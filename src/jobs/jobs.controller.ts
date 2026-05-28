import { Controller, Get, Post, Patch, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { JobsService } from './jobs.service';
import {
  CreateJobDto,
  UpdateJobDto,
  UnifiedJobListResponseDto,
  DisputeJobDto,
} from './dto/job.dto';
import { JobMapper } from './mappers/job.mapper';
import { JwtAuthGuard, OptionalJwtAuthGuard, RolesGuard } from '@/common/guards';
import { CurrentUser, CurrentUserPayload, Roles } from '@/common/decorators';
import { UserRole } from '@/common/enums';

@ApiTags('jobs')
@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.CUSTOMER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new job' })
  async createJob(@CurrentUser() user: CurrentUserPayload, @Body() createJobDto: CreateJobDto) {
    return this.jobsService.createJob(user.userId, createJobDto);
  }

  @Get()
  @ApiOperation({ summary: 'List jobs (open jobs for providers, all jobs for customers)' })
  @ApiQuery({ name: 'status', required: false, type: String })
  @ApiQuery({ name: 'title', required: false, type: String })
  @ApiQuery({ name: 'categoryId', required: false, type: String })
  @ApiQuery({ name: 'suburb', required: false, type: String })
  @ApiQuery({ name: 'state', required: false, type: String })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'pageSize', required: false, type: Number, example: 20 })
  @ApiResponse({ status: 200, type: UnifiedJobListResponseDto })
  async listJobs(
    @Query('status') status?: string,
    @Query('title') title?: string,
    @Query('categoryId') categoryId?: string,
    @Query('suburb') suburb?: string,
    @Query('state') state?: string,
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    const response = await this.jobsService.listJobs({
      status,
      title,
      categoryId,
      suburb,
      state,
      page: page ? parseInt(page) : 1,
      pageSize: pageSize ? parseInt(pageSize) : 20,
    });

    return JobMapper.mapJobsToUnifiedList(response.data, response.pagination);
  }

  @Get(':jobId')
  @UseGuards(OptionalJwtAuthGuard)
  @ApiOperation({
    summary:
      'Get job details. Unauthenticated requests receive a scrubbed public response (no customer PII, no bid data).',
  })
  async getJob(@Param('jobId') jobId: string, @CurrentUser() user?: CurrentUserPayload) {
    return this.jobsService.getJobById(jobId, user?.userId, user?.role);
  }

  @Patch(':jobId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.CUSTOMER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update job (customer only)' })
  async updateJob(
    @Param('jobId') jobId: string,
    @CurrentUser() user: CurrentUserPayload,
    @Body() updateJobDto: UpdateJobDto,
  ) {
    return this.jobsService.updateJob(jobId, user.userId, updateJobDto);
  }

  @Post(':jobId/cancel')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.CUSTOMER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Cancel a job' })
  async cancelJob(@Param('jobId') jobId: string, @CurrentUser() user: CurrentUserPayload) {
    return this.jobsService.cancelJob(jobId, user.userId);
  }

  // ─── Completion flow ────────────────────────────────────────────────────────

  /**
   * Provider signals the work is done.
   * Transitions ASSIGNED → AWAITING_CUSTOMER_CONFIRMATION and starts the
   * auto-release clock (default 48 h, configurable via AUTO_RELEASE_HOURS).
   */
  @Post(':jobId/complete/request')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PROVIDER)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Provider requests job completion (ASSIGNED → AWAITING_CUSTOMER_CONFIRMATION)',
  })
  async requestCompletion(@Param('jobId') jobId: string, @CurrentUser() user: CurrentUserPayload) {
    return this.jobsService.requestCompletion(jobId, user.userId);
  }

  /**
   * Customer confirms the provider's completion request.
   * Transitions AWAITING_CUSTOMER_CONFIRMATION → COMPLETED.
   */
  @Post(':jobId/complete/confirm')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.CUSTOMER)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Customer confirms job completion (AWAITING_CUSTOMER_CONFIRMATION → COMPLETED)',
  })
  async confirmCompletion(@Param('jobId') jobId: string, @CurrentUser() user: CurrentUserPayload) {
    return this.jobsService.confirmCompletion(jobId, user.userId);
  }

  /**
   * Customer shortcut — directly marks a job complete without waiting for the
   * two-step flow (e.g. "I've verified the work myself"). Also handles
   * AWAITING → COMPLETED via the same service method.
   * Transitions ASSIGNED or AWAITING_CUSTOMER_CONFIRMATION → COMPLETED.
   */
  @Post(':jobId/complete')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.CUSTOMER)
  @ApiBearerAuth()
  @ApiOperation({
    summary:
      'Customer marks job complete (shortcut — works from ASSIGNED or AWAITING_CUSTOMER_CONFIRMATION)',
  })
  async completeJob(@Param('jobId') jobId: string, @CurrentUser() user: CurrentUserPayload) {
    return this.jobsService.confirmCompletion(jobId, user.userId);
  }

  /**
   * Customer disputes the provider's completion request.
   * Transitions AWAITING_CUSTOMER_CONFIRMATION → DISPUTED.
   */
  @Post(':jobId/dispute')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.CUSTOMER)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Customer disputes job completion (AWAITING_CUSTOMER_CONFIRMATION → DISPUTED)',
  })
  async disputeCompletion(
    @Param('jobId') jobId: string,
    @CurrentUser() user: CurrentUserPayload,
    @Body() body: DisputeJobDto,
  ) {
    return this.jobsService.disputeCompletion(jobId, user.userId, body.reason);
  }

  // ─── Customer-scoped job list ───────────────────────────────────────────────

  @Get('customer/:customerId')
  @ApiOperation({ summary: 'Get all jobs for a specific customer' })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'pageSize', required: false, type: Number, example: 20 })
  @ApiResponse({ status: 200, type: UnifiedJobListResponseDto })
  async getCustomerJobs(
    @Param('customerId') customerId: string,
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    const response = await this.jobsService.getJobsByCustomerId(customerId, {
      page: page ? parseInt(page) : 1,
      pageSize: pageSize ? parseInt(pageSize) : 20,
    });

    return JobMapper.mapJobsToUnifiedList(response.data, response.pagination);
  }

  // ─── Provider-scoped job history ────────────────────────────────────────────

  /**
   * Returns jobs where the given provider is the assigned provider.
   * Defaults to completed + disputed + cancelled (history) when no ?status is given.
   * Pass ?status=completed,disputed,cancelled,assigned to customise the filter.
   */
  @Get('provider/:providerId')
  @ApiOperation({ summary: 'Get job history for a specific provider' })
  @ApiQuery({
    name: 'status',
    required: false,
    type: String,
    description: 'Comma-separated JobStatus values, e.g. completed,disputed',
  })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'pageSize', required: false, type: Number, example: 20 })
  @ApiResponse({ status: 200, type: UnifiedJobListResponseDto })
  async getProviderJobs(
    @Param('providerId') providerId: string,
    @Query('status') status?: string,
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    const statuses = status ? (status.split(',').map((s) => s.trim()) as any[]) : undefined;

    const response = await this.jobsService.getJobsByAssignedProviderId(
      providerId,
      {
        page: page ? parseInt(page) : 1,
        pageSize: pageSize ? parseInt(pageSize) : 20,
      },
      statuses,
    );

    return JobMapper.mapJobsToUnifiedList(response.data, response.pagination);
  }
}

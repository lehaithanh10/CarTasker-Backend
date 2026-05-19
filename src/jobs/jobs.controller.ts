import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { JobsService } from './jobs.service';
import { CreateJobDto, UpdateJobDto, UnifiedJobListResponseDto } from './dto/job.dto';
import { JobMapper } from './mappers/job.mapper';
import { JwtAuthGuard, RolesGuard } from '@/common/guards';
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
  async createJob(
    @CurrentUser() user: CurrentUserPayload,
    @Body() createJobDto: CreateJobDto,
  ) {
    return this.jobsService.createJob(user.userId, createJobDto);
  }

  @Get()
  @ApiOperation({ summary: 'List jobs (open jobs for providers, all jobs for customers)' })
  @ApiQuery({ name: 'status', required: false, type: String, description: 'Filter by job status (e.g., "open")' })
  @ApiQuery({ name: 'title', required: false, type: String, description: 'Filter by job title (partial match)' })
  @ApiQuery({ name: 'categoryId', required: false, type: String, description: 'Filter by category ID' })
  @ApiQuery({ name: 'suburb', required: false, type: String, description: 'Filter by suburb' })
  @ApiQuery({ name: 'state', required: false, type: String, description: 'Filter by state' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number', example: 1 })
  @ApiQuery({ name: 'pageSize', required: false, type: Number, description: 'Items per page', example: 20 })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved list of jobs',
    type: UnifiedJobListResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - Invalid query parameters',
  })
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

    // Map response to unified format
    return JobMapper.mapJobsToUnifiedList(response.data, response.pagination);
  }

  @Get(':jobId')
  @ApiOperation({ summary: 'Get job details' })
  async getJob(@Param('jobId') jobId: string) {
    return this.jobsService.getJobById(jobId);
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
  async cancelJob(
    @Param('jobId') jobId: string,
    @CurrentUser() user: CurrentUserPayload,
  ) {
    return this.jobsService.cancelJob(jobId, user.userId);
  }

  @Post(':jobId/complete')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Mark job as complete' })
  async completeJob(
    @Param('jobId') jobId: string,
    @CurrentUser() user: CurrentUserPayload,
  ) {
    return this.jobsService.completeJob(jobId, user.userId);
  }

  @Get('customer/:customerId')
  @ApiOperation({ summary: 'Get all jobs for a specific customer' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number', example: 1 })
  @ApiQuery({ name: 'pageSize', required: false, type: Number, description: 'Items per page', example: 20 })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved customer jobs',
    type: UnifiedJobListResponseDto,
  })
  async getCustomerJobs(
    @Param('customerId') customerId: string,
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    const response = await this.jobsService.getJobsByCustomerId(customerId, {
      page: page ? parseInt(page) : 1,
      pageSize: pageSize ? parseInt(pageSize) : 20,
    });

    // Map response to unified format
    return JobMapper.mapJobsToUnifiedList(response.data, response.pagination);
  }
}

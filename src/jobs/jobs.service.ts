import { Injectable } from '@nestjs/common';
import { JobRepository } from '@/repositories/job.repository';
import { CategoryRepository } from '@/repositories/category.repository';
import { BidRepository } from '@/repositories/bid.repository';
import { CreateJobDto, UpdateJobDto } from './dto/job.dto';
import {
  ResourceNotFoundException,
  UnauthorizedActionException,
} from '@/common/exceptions';
import { JobStatus, UserRole } from '@/common/enums';
import {
  PaginationHelper,
  AuthorizationHelper,
  StatusValidator,
  DateHelper,
} from '@/common/helpers';

interface JobListFilters {
  status?: string;
  title?: string;
  categoryId?: string;
  suburb?: string;
  state?: string;
  page?: number;
  pageSize?: number;
}

@Injectable()
export class JobsService {
  constructor(
    private jobRepository: JobRepository,
    private categoryRepository: CategoryRepository,
    private bidRepository: BidRepository,
  ) {}

  async createJob(customerId: string, createJobDto: CreateJobDto) {
    await this.categoryRepository.findByIdOrThrow(
      createJobDto.categoryId,
      'Service category',
    );

    return this.jobRepository.create({
      customerId,
      categoryId: createJobDto.categoryId,
      title: createJobDto.title,
      description: createJobDto.description,
      locationText: createJobDto.locationText,
      suburb: createJobDto.suburb || null,
      state: createJobDto.state || null,
      preferredDate: DateHelper.parseOrNull(createJobDto.preferredDate),
      status: JobStatus.OPEN,
    });
  }

  async getJobById(jobId: string, currentUserId?: string, currentUserRole?: string) {
    const job = await this.jobRepository.findByIdWithCategory(jobId);

    if (!job) {
      throw new ResourceNotFoundException('Job');
    }

    const bidsCount = await this.bidRepository.countPendingByJob(jobId);

    const response: any = {
      id: job.id,
      title: job.title,
      description: job.description,
      locationText: job.locationText,
      suburb: job.suburb,
      state: job.state,
      preferredDate: job.preferredDate,
      category: job.category,
      status: job.status,
      assignedProviderId: job.assignedProviderId,
      createdAt: job.createdAt,
      customerId: job.customerId,
      customer: job.customer,
      bidsCount,
    };

    if (currentUserRole === UserRole.PROVIDER && currentUserId) {
      const [otherBidsCount, lowestBidAmount, myBid] = await Promise.all([
        this.bidRepository.countPendingByJobExcludingProvider(jobId, currentUserId),
        this.bidRepository.findLowestPendingByJobExcludingProvider(jobId, currentUserId),
        this.bidRepository.findByJobAndProvider(jobId, currentUserId),
      ]);

      response.otherBidsCount = otherBidsCount;
      response.lowestBidAmount = lowestBidAmount;
      response.myBid = myBid || null;
    }

    return response;
  }

  async listJobs(filters: JobListFilters = {}, isProvider = false) {
    const { page, pageSize } = PaginationHelper.normalize({
      page: filters.page,
      pageSize: filters.pageSize,
    });

    const where: any = {};
    if (isProvider) {
      where.status = JobStatus.OPEN;
    }
    if (filters.status) where.status = filters.status;
    if (filters.title) where.title = { contains: filters.title, mode: 'insensitive' };
    if (filters.categoryId) where.categoryId = filters.categoryId;
    if (filters.suburb) where.suburb = filters.suburb;
    if (filters.state) where.state = filters.state;

    const skip = PaginationHelper.calculateSkip(page, pageSize);

    const [jobs, total] = await Promise.all([
      this.jobRepository.findManyWithRelations(where, skip, pageSize),
      this.jobRepository.countJobs(where),
    ]);

    return PaginationHelper.buildResponse(jobs, total, page, pageSize);
  }

  async updateJob(jobId: string, customerId: string, updateJobDto: UpdateJobDto) {
    const job = await this.jobRepository.findByIdOrThrow(jobId, 'Job');

    AuthorizationHelper.ensureOwner(job, customerId, 'customerId');
    StatusValidator.requireStatus(job, JobStatus.OPEN, 'Only open jobs can be updated');

    return this.jobRepository.update(
      { id: jobId },
      {
        ...updateJobDto,
        preferredDate: DateHelper.parseOrUndefined(updateJobDto.preferredDate),
      },
    );
  }

  async cancelJob(jobId: string, customerId: string) {
    const job = await this.jobRepository.findByIdOrThrow(jobId, 'Job');

    AuthorizationHelper.ensureOwner(job, customerId, 'customerId');
    StatusValidator.requireStatus(job, JobStatus.OPEN, 'Only open jobs can be cancelled');

    return this.jobRepository.cancelJobWithHistory(jobId, customerId);
  }

  async completeJob(jobId: string, userId: string) {
    const job = await this.jobRepository.findByIdOrThrow(jobId, 'Job');

    const isCustomer = job.customerId === userId;
    const isProvider = job.assignedProviderId === userId;
    if (!isCustomer && !isProvider) {
      throw new UnauthorizedActionException();
    }

    StatusValidator.requireStatus(
      job,
      JobStatus.ASSIGNED,
      'Only assigned jobs can be completed',
    );

    return this.jobRepository.completeJobWithTransaction(jobId, userId, job.status);
  }

  async getJobsByCustomerId(
    customerId: string,
    pagination: { page: number; pageSize: number },
  ) {
    const { page, pageSize } = PaginationHelper.normalize(pagination);
    const skip = PaginationHelper.calculateSkip(page, pageSize);

    const [jobs, total] = await Promise.all([
      this.jobRepository.findManyWithRelations({ customerId }, skip, pageSize),
      this.jobRepository.countJobs({ customerId }),
    ]);

    return PaginationHelper.buildResponse(jobs, total, page, pageSize);
  }
}

import { Injectable } from '@nestjs/common';
import { JobRepository } from '@/repositories/job.repository';
import { CategoryRepository } from '@/repositories/category.repository';
import { BidRepository } from '@/repositories/bid.repository';
import { CreateJobDto, UpdateJobDto } from './dto/job.dto';
import {
  ResourceNotFoundException,
  UnauthorizedActionException,
  InvalidJobStatusException,
} from '@/common/exceptions';
import { JobStatus } from '@/common/enums';

@Injectable()
export class JobsService {
  constructor(
    private jobRepository: JobRepository,
    private categoryRepository: CategoryRepository,
    private bidRepository: BidRepository,
  ) {}

  async createJob(customerId: string, createJobDto: CreateJobDto) {
    const category = await this.categoryRepository.findUnique({
      id: createJobDto.categoryId,
    });

    if (!category) {
      throw new ResourceNotFoundException('Service category');
    }

    const job = await this.jobRepository.create({
      customerId,
      categoryId: createJobDto.categoryId,
      title: createJobDto.title,
      description: createJobDto.description,
      locationText: createJobDto.locationText,
      suburb: createJobDto.suburb || null,
      state: createJobDto.state || null,
      preferredDate: createJobDto.preferredDate
        ? new Date(createJobDto.preferredDate)
        : null,
      status: JobStatus.OPEN,
    });

    return job;
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

    // Enrich with provider-specific bid info
    if (currentUserRole === 'provider' && currentUserId) {
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

  async listJobs(
    filters: {
      status?: string;
      title?: string;
      categoryId?: string;
      suburb?: string;
      state?: string;
      page?: number;
      pageSize?: number;
    } = {},
    isProvider = false,
  ) {
    const {
      status,
      title,
      categoryId,
      suburb,
      state,
      page = 1,
      pageSize = 20,
    } = filters;

    const where: any = {};

    if (isProvider) {
      where.status = JobStatus.OPEN;
    }

    if (status) where.status = status;
    if (title) where.title = { contains: title, mode: 'insensitive' };
    if (categoryId) where.categoryId = categoryId;
    if (suburb) where.suburb = suburb;
    if (state) where.state = state;

    const skip = (page - 1) * pageSize;

    const jobs = await this.jobRepository.findManyWithRelations(where, skip, pageSize);
    const total = await this.jobRepository.countJobs(where);

    return {
      data: jobs,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
    };
  }

  async updateJob(jobId: string, customerId: string, updateJobDto: UpdateJobDto) {
    const job = await this.jobRepository.findUnique({ id: jobId });

    if (!job) {
      throw new ResourceNotFoundException('Job');
    }

    if (job.customerId !== customerId) {
      throw new UnauthorizedActionException();
    }

    if (job.status !== JobStatus.OPEN) {
      throw new InvalidJobStatusException('Only open jobs can be updated');
    }

    const updateInput = {
      ...updateJobDto,
      preferredDate: updateJobDto.preferredDate
        ? new Date(updateJobDto.preferredDate)
        : undefined,
    };

    return this.jobRepository.update(
      { id: jobId },
      updateInput,
    );
  }

  async cancelJob(jobId: string, customerId: string) {
    const job = await this.jobRepository.findUnique({ id: jobId });

    if (!job) {
      throw new ResourceNotFoundException('Job');
    }

    if (job.customerId !== customerId) {
      throw new UnauthorizedActionException();
    }

    if (job.status !== JobStatus.OPEN) {
      throw new InvalidJobStatusException('Only open jobs can be cancelled');
    }

    return this.jobRepository.cancelJobWithHistory(jobId, customerId);
  }

  async completeJob(jobId: string, userId: string) {
    const job = await this.jobRepository.findUnique({ id: jobId });

    if (!job) {
      throw new ResourceNotFoundException('Job');
    }

    const isCustomer = job.customerId === userId;
    const isProvider = job.assignedProviderId === userId;

    if (!isCustomer && !isProvider) {
      throw new UnauthorizedActionException();
    }

    if (job.status !== JobStatus.ASSIGNED) {
      throw new InvalidJobStatusException('Only assigned jobs can be completed');
    }

    return this.jobRepository.completeJobWithTransaction(jobId, userId, job.status);
  }

  async getJobsByCustomerId(
    customerId: string,
    pagination: { page: number; pageSize: number },
  ) {
    const { page = 1, pageSize = 20 } = pagination;
    const skip = (page - 1) * pageSize;

    const jobs = await this.jobRepository.findManyWithRelations(
      { customerId },
      skip,
      pageSize,
    );
    const total = await this.jobRepository.countJobs({ customerId });

    return {
      data: jobs,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
    };
  }
}

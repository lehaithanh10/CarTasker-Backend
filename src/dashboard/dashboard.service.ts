import { Injectable } from '@nestjs/common';
import { JobRepository } from '@/repositories/job.repository';
import { BidRepository } from '@/repositories/bid.repository';
import { CustomerDashboardDto, ProviderDashboardDto } from './dto/dashboard.dto';
import { JobStatus, BidStatus } from '@/common/enums';
import { BidMapper } from '@/bids/mappers/bid.mapper';

const RECENT_ITEMS_LIMIT = 5;

@Injectable()
export class DashboardService {
  constructor(
    private jobRepository: JobRepository,
    private bidRepository: BidRepository,
  ) {}

  async getCustomerDashboard(customerId: string): Promise<CustomerDashboardDto> {
    const [openJobsCount, assignedJobsCount, completedJobsCount, openJobs] = await Promise.all([
      this.jobRepository.countByCustomerAndStatus(customerId, JobStatus.OPEN),
      this.jobRepository.countByCustomerAndStatus(customerId, JobStatus.ASSIGNED),
      this.jobRepository.countByCustomerAndStatus(customerId, JobStatus.COMPLETED),
      this.jobRepository.findRecentByCustomerAndStatus(
        customerId,
        JobStatus.OPEN,
        RECENT_ITEMS_LIMIT,
      ),
    ]);

    return {
      openJobsCount,
      assignedJobsCount,
      completedJobsCount,
      openJobs,
    };
  }

  async getProviderDashboard(providerId: string): Promise<ProviderDashboardDto> {
    const [
      availableJobsCount,
      pendingBidsCount,
      assignedJobsCount,
      completedJobsCount,
      recentBids,
    ] = await Promise.all([
      this.jobRepository.countByStatus(JobStatus.OPEN),
      this.bidRepository.countByProviderAndStatus(providerId, BidStatus.PENDING),
      this.jobRepository.countAssignmentsByProvider(providerId),
      this.jobRepository.countByAssignedProviderAndStatus(providerId, JobStatus.COMPLETED),
      this.bidRepository.findRecentByProvider(providerId, RECENT_ITEMS_LIMIT),
    ]);

    return {
      availableJobsCount,
      pendingBidsCount,
      assignedJobsCount,
      completedJobsCount,
      recentBids: BidMapper.toDashboardItems(recentBids),
    };
  }
}

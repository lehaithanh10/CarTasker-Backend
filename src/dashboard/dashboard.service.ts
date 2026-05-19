import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CustomerDashboardDto, ProviderDashboardDto } from './dto/dashboard.dto';
import { JobStatus, BidStatus } from '@/common/enums';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getCustomerDashboard(customerId: string): Promise<CustomerDashboardDto> {
    const openJobsCount = await this.prisma.job.count({
      where: {
        customerId,
        status: JobStatus.OPEN,
      },
    });

    const assignedJobsCount = await this.prisma.job.count({
      where: {
        customerId,
        status: JobStatus.ASSIGNED,
      },
    });

    const completedJobsCount = await this.prisma.job.count({
      where: {
        customerId,
        status: JobStatus.COMPLETED,
      },
    });

    const openJobs = await this.prisma.job.findMany({
      where: {
        customerId,
        status: JobStatus.OPEN,
      },
      select: {
        id: true,
        title: true,
        status: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    return {
      openJobsCount,
      assignedJobsCount,
      completedJobsCount,
      openJobs,
    };
  }

  async getProviderDashboard(providerId: string): Promise<ProviderDashboardDto> {
    const availableJobsCount = await this.prisma.job.count({
      where: {
        status: JobStatus.OPEN,
      },
    });

    const pendingBidsCount = await this.prisma.jobBid.count({
      where: {
        providerId,
        status: BidStatus.PENDING,
      },
    });

    const assignedJobsCount = await this.prisma.jobAssignment.count({
      where: {
        providerId,
      },
    });

    const completedJobsCount = await this.prisma.job.count({
      where: {
        assignedProviderId: providerId,
        status: JobStatus.COMPLETED,
      },
    });

    const recentBids = await this.prisma.jobBid.findMany({
      where: {
        providerId,
      },
      include: {
        job: {
          select: { title: true },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    return {
      availableJobsCount,
      pendingBidsCount,
      assignedJobsCount,
      completedJobsCount,
      recentBids: recentBids.map((bid: any) => ({
        id: bid.id,
        jobTitle: bid.job.title,
        status: bid.status,
        createdAt: bid.createdAt,
      })),
    };
  }
}

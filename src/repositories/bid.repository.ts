import { Injectable, Inject } from '@nestjs/common';
import { ORMAdapter } from './adapters/orm.adapter';
import { ORM_ADAPTER_TOKEN } from './adapters/orm.adapter.token';
import { BaseRepository } from './base.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { BidStatus, JobStatus } from '@/common/enums';

export interface JobBid {
  id: string;
  jobId: string;
  providerId: string;
  bidAmount: number | null;
  message: string | null;
  estimatedArrivalHours: number | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateJobBidInput {
  jobId: string;
  providerId: string;
  bidAmount?: number | null;
  message?: string | null;
  estimatedArrivalHours?: number | null;
  status?: string;
}

export interface UpdateJobBidInput {
  bidAmount?: number | null;
  message?: string | null;
  estimatedArrivalHours?: number | null;
  status?: string;
}

@Injectable()
export class BidRepository extends BaseRepository<JobBid, CreateJobBidInput, UpdateJobBidInput> {
  protected readonly modelName = 'jobBid';

  constructor(
    @Inject(ORM_ADAPTER_TOKEN) ormAdapter: ORMAdapter,
    private prisma: PrismaService,
  ) {
    super(ormAdapter);
  }

  findByJobAndProvider(jobId: string, providerId: string) {
    return this.prisma.jobBid.findUnique({
      where: {
        jobId_providerId: { jobId, providerId },
      },
    });
  }

  async acceptBidWithTransaction(
    bidId: string,
    jobId: string,
    providerId: string,
    customerId: string,
    oldStatus: string,
  ) {
    return this.prisma.$transaction(async (tx: any) => {
      const acceptedBid = await tx.jobBid.update({
        where: { id: bidId },
        data: { status: BidStatus.ACCEPTED },
      });

      await tx.jobBid.updateMany({
        where: {
          jobId,
          id: { not: bidId },
          status: BidStatus.PENDING,
        },
        data: { status: BidStatus.REJECTED },
      });

      const updatedJob = await tx.job.update({
        where: { id: jobId },
        data: {
          status: JobStatus.ASSIGNED,
          assignedProviderId: providerId,
        },
      });

      const jobAssignment = await tx.jobAssignment.create({
        data: {
          jobId,
          customerId,
          providerId,
          acceptedBidId: bidId,
        },
      });

      const conversation = await tx.conversation.create({
        data: {
          jobId,
          customerId,
          providerId,
        },
      });

      await tx.jobStatusHistory.create({
        data: {
          jobId,
          oldStatus,
          newStatus: JobStatus.ASSIGNED,
          changedBy: customerId,
          note: `Bid from provider ${providerId} accepted`,
        },
      });

      return {
        acceptedBid,
        updatedJob,
        jobAssignment,
        conversation,
      };
    });
  }

  async getProviderBidsWithPagination(providerId: string, skip: number, take: number) {
    const bids = await this.prisma.jobBid.findMany({
      where: { providerId },
      include: {
        job: {
          select: {
            id: true,
            title: true,
            description: true,
            status: true,
            locationText: true,
            suburb: true,
            state: true,
          },
        },
      },
      skip,
      take,
      orderBy: { createdAt: 'desc' },
    });

    const total = await this.prisma.jobBid.count({ where: { providerId } });

    return {
      bids: bids.map((bid) => ({
        id: bid.id,
        jobId: bid.jobId,
        providerId: bid.providerId,
        bidAmount: bid.bidAmount,
        message: bid.message,
        estimatedArrivalHours: bid.estimatedArrivalHours,
        status: bid.status,
        createdAt: bid.createdAt,
        updatedAt: bid.updatedAt,
        jobTitle: bid.job.title,
        jobLocation: bid.job.locationText || `${bid.job.suburb}, ${bid.job.state}`,
      })),
      total,
    };
  }

  async findByIdWithJob(bidId: string) {
    return this.prisma.jobBid.findUnique({
      where: { id: bidId },
      include: { job: true },
    });
  }

  async countPendingByJob(jobId: string) {
    return this.prisma.jobBid.count({
      where: { jobId, status: BidStatus.PENDING },
    });
  }

  async countByProviderAndStatus(providerId: string, status: string) {
    return this.prisma.jobBid.count({ where: { providerId, status } });
  }

  async findRecentByProvider(providerId: string, limit: number) {
    return this.prisma.jobBid.findMany({
      where: { providerId },
      include: {
        job: {
          select: { title: true },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  async countPendingByJobExcludingProvider(jobId: string, providerId: string) {
    return this.prisma.jobBid.count({
      where: {
        jobId,
        providerId: { not: providerId },
        status: BidStatus.PENDING,
      },
    });
  }

  async findLowestPendingByJobExcludingProvider(jobId: string, providerId: string) {
    const bids = await this.prisma.jobBid.findMany({
      where: {
        jobId,
        providerId: { not: providerId },
        status: BidStatus.PENDING,
      },
      orderBy: { bidAmount: 'asc' },
      take: 1,
    });
    return bids[0]?.bidAmount || null;
  }

  async findManyByJobWithProvider(jobId: string) {
    return this.prisma.jobBid.findMany({
      where: { jobId },
      include: {
        provider: {
          select: {
            id: true,
            fullName: true,
            phone: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}

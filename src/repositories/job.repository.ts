import { Injectable, Inject } from '@nestjs/common';
import { ORMAdapter } from './adapters/orm.adapter';
import { ORM_ADAPTER_TOKEN } from './adapters/orm.adapter.token';
import { BaseRepository } from './base.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { JobStatus } from '@/common/enums';

export interface Job {
  id: string;
  customerId: string;
  categoryId: string;
  title: string;
  description: string;
  locationText: string;
  suburb: string | null;
  state: string | null;
  latitude: number | null;
  longitude: number | null;
  preferredDate: Date | null;
  status: string;
  assignedProviderId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateJobInput {
  customerId: string;
  categoryId: string;
  title: string;
  description: string;
  locationText: string;
  suburb?: string | null;
  state?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  preferredDate?: Date | null;
  status?: string;
  assignedProviderId?: string | null;
}

export interface UpdateJobInput {
  categoryId?: string;
  title?: string;
  description?: string;
  locationText?: string;
  suburb?: string | null;
  state?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  preferredDate?: Date | null;
  status?: string;
  assignedProviderId?: string | null;
}

@Injectable()
export class JobRepository extends BaseRepository<Job, CreateJobInput, UpdateJobInput> {
  protected readonly modelName = 'job';

  constructor(
    @Inject(ORM_ADAPTER_TOKEN) ormAdapter: ORMAdapter,
    private prisma: PrismaService,
  ) {
    super(ormAdapter);
  }

  async findByIdWithCategory(id: string) {
    return this.prisma.job.findUnique({
      where: { id },
      include: {
        category: { select: { id: true, name: true } },
        customer: { select: { fullName: true, id: true, phone: true, avatarUrl: true } },
      },
    });
  }

  async findManyWithRelations(where: any = {}, skip: number, take: number) {
    return this.prisma.job.findMany({
      where,
      include: {
        customer: {
          select: {
            id: true,
            fullName: true,
            phone: true,
            avatarUrl: true,
          },
        },
        category: {
          select: { id: true, name: true, slug: true },
        },
        assignedProvider: {
          select: {
            id: true,
            fullName: true,
            phone: true,
            avatarUrl: true,
          },
        },
        bids: {
          select: {
            id: true,
            providerId: true,
            bidAmount: true,
            message: true,
            estimatedArrivalHours: true,
            status: true,
            createdAt: true,
          },
        },
      },
      skip,
      take,
      orderBy: { createdAt: 'desc' },
    });
  }

  async countJobs(where: any = {}) {
    return this.prisma.job.count({ where });
  }

  async countByCustomerAndStatus(customerId: string, status: string) {
    return this.prisma.job.count({ where: { customerId, status } });
  }

  async countByStatus(status: string) {
    return this.prisma.job.count({ where: { status } });
  }

  async countByAssignedProviderAndStatus(providerId: string, status: string) {
    return this.prisma.job.count({
      where: { assignedProviderId: providerId, status },
    });
  }

  async countAssignmentsByProvider(providerId: string) {
    return this.prisma.jobAssignment.count({ where: { providerId } });
  }

  async findRecentByCustomerAndStatus(
    customerId: string,
    status: string,
    limit: number,
  ) {
    return this.prisma.job.findMany({
      where: { customerId, status },
      select: {
        id: true,
        title: true,
        status: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  async completeJobWithTransaction(jobId: string, userId: string, oldStatus: string) {
    return this.prisma.$transaction(async (tx: any) => {
      const updatedJob = await tx.job.update({
        where: { id: jobId },
        data: { status: JobStatus.COMPLETED },
      });

      await tx.jobAssignment.update({
        where: { jobId },
        data: { completedAt: new Date() },
      });

      await tx.jobStatusHistory.create({
        data: {
          jobId,
          oldStatus,
          newStatus: JobStatus.COMPLETED,
          changedBy: userId,
        },
      });

      return updatedJob;
    });
  }

  async cancelJobWithHistory(jobId: string, customerId: string) {
    return this.prisma.$transaction(async (tx: any) => {
      const updatedJob = await tx.job.update({
        where: { id: jobId },
        data: { status: JobStatus.CANCELLED },
      });

      await tx.jobStatusHistory.create({
        data: {
          jobId,
          oldStatus: JobStatus.OPEN,
          newStatus: JobStatus.CANCELLED,
          changedBy: customerId,
        },
      });

      return updatedJob;
    });
  }
}

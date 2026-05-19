import { Injectable, Inject } from '@nestjs/common';
import { ORMAdapter } from './adapters/orm.adapter';
import { ORM_ADAPTER_TOKEN } from './adapters/orm.adapter.token';
import { BaseRepository } from './base.repository';
import { PrismaService } from '@/prisma/prisma.service';

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

  async completeJobWithTransaction(jobId: string, userId: string, oldStatus: string) {
    return this.prisma.$transaction(async (tx: any) => {
      const updatedJob = await tx.job.update({
        where: { id: jobId },
        data: { status: 'completed' },
      });

      await tx.jobAssignment.update({
        where: { jobId },
        data: { completedAt: new Date() },
      });

      await tx.jobStatusHistory.create({
        data: {
          jobId,
          oldStatus,
          newStatus: 'completed',
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
        data: { status: 'cancelled' },
      });

      await tx.jobStatusHistory.create({
        data: {
          jobId,
          oldStatus: 'open',
          newStatus: 'cancelled',
          changedBy: customerId,
        },
      });

      return updatedJob;
    });
  }
}

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

  // ─── Provider history ─────────────────────────────────────────────────────

  /**
   * Returns paginated jobs where the given user is the assigned provider,
   * optionally filtered by one or more statuses (defaults to all statuses).
   */
  async findManyByAssignedProvider(
    providerId: string,
    statuses: string[],
    skip: number,
    take: number,
  ) {
    return this.prisma.job.findMany({
      where: {
        assignedProviderId: providerId,
        ...(statuses.length > 0 ? { status: { in: statuses } } : {}),
      },
      include: {
        category: { select: { id: true, name: true, slug: true } },
        customer: { select: { id: true, fullName: true, avatarUrl: true } },
        bids: { select: { id: true } },
      },
      skip,
      take,
      orderBy: { updatedAt: 'desc' },
    });
  }

  async countByAssignedProvider(
    providerId: string,
    statuses: string[],
  ): Promise<number> {
    return this.prisma.job.count({
      where: {
        assignedProviderId: providerId,
        ...(statuses.length > 0 ? { status: { in: statuses } } : {}),
      },
    });
  }

  // ─── Completion flow ──────────────────────────────────────────────────────

  /**
   * Provider requests completion: ASSIGNED → AWAITING_CUSTOMER_CONFIRMATION.
   * Sets the auto-release deadline on JobAssignment.
   */
  async requestCompletionWithTransaction(
    jobId: string,
    providerId: string,
    autoReleaseAt: Date,
  ) {
    return this.prisma.$transaction(async (tx: any) => {
      const updatedJob = await tx.job.update({
        where: { id: jobId },
        data: { status: JobStatus.AWAITING_CUSTOMER_CONFIRMATION },
      });

      await tx.jobAssignment.update({
        where: { jobId },
        data: {
          completionRequestedAt: new Date(),
          completionRequestedBy: providerId,
          autoReleaseAt,
        },
      });

      await tx.jobStatusHistory.create({
        data: {
          jobId,
          oldStatus: JobStatus.ASSIGNED,
          newStatus: JobStatus.AWAITING_CUSTOMER_CONFIRMATION,
          changedBy: providerId,
          note: 'Provider requested completion',
        },
      });

      return updatedJob;
    });
  }

  /**
   * Confirms completion: AWAITING_CUSTOMER_CONFIRMATION → COMPLETED
   * (or ASSIGNED → COMPLETED for customer shortcut / auto-release).
   * source: 'customer' | 'customer-shortcut' | 'auto-release'
   */
  async confirmCompletionWithTransaction(
    jobId: string,
    userId: string,
    oldStatus: string,
    source: 'customer' | 'customer-shortcut' | 'auto-release',
  ) {
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
          note: source,
        },
      });

      return updatedJob;
    });
  }

  /**
   * Customer disputes completion: AWAITING_CUSTOMER_CONFIRMATION → DISPUTED.
   */
  async disputeWithTransaction(
    jobId: string,
    customerId: string,
    reason: string,
  ) {
    return this.prisma.$transaction(async (tx: any) => {
      const updatedJob = await tx.job.update({
        where: { id: jobId },
        data: { status: JobStatus.DISPUTED },
      });

      await tx.jobAssignment.update({
        where: { jobId },
        data: {
          disputedAt: new Date(),
          disputeReason: reason,
        },
      });

      await tx.jobStatusHistory.create({
        data: {
          jobId,
          oldStatus: JobStatus.AWAITING_CUSTOMER_CONFIRMATION,
          newStatus: JobStatus.DISPUTED,
          changedBy: customerId,
          note: reason,
        },
      });

      return updatedJob;
    });
  }

  /**
   * Returns all jobs that are AWAITING_CUSTOMER_CONFIRMATION and whose
   * autoReleaseAt deadline has already passed (used by the cron scheduler).
   */
  async findExpiredAwaitingJobs(): Promise<{ jobId: string; customerId: string }[]> {
    const rows = await this.prisma.jobAssignment.findMany({
      where: {
        job: { status: JobStatus.AWAITING_CUSTOMER_CONFIRMATION },
        autoReleaseAt: { lte: new Date() },
      },
      select: { jobId: true, customerId: true },
    });
    return rows;
  }

  // ─── Legacy / existing ────────────────────────────────────────────────────

  /** @deprecated Use confirmCompletionWithTransaction instead */
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

import { UnifiedJobResponseDto, UnifiedJobListResponseDto } from '../dto/job.dto';

/**
 * Maps raw job data to unified response format
 * Can be used with any raw job data structure
 */
export class JobMapper {
  static mapJobToUnifiedResponse(rawJob: any): UnifiedJobResponseDto {
    return {
      id: rawJob.id,
      title: rawJob.title,
      description: rawJob.description,
      locationText: rawJob.locationText,
      suburb: rawJob.suburb,
      state: rawJob.state,
      preferredDate: rawJob.preferredDate,
      bidsCount: rawJob.bids?.length || 0,
      status: rawJob.status,
      createdAt: rawJob.createdAt,
      category: {
        id: rawJob.category?.id || rawJob.categoryId,
        name: rawJob.category?.name,
      },
    };
  }

  /**
   * Safe subset for unauthenticated public requests.
   * Omits: locationText (may contain street address), customerId, customer
   * (PII), assignedProviderId, and all bid-specific fields.
   */
  static toPublicDetail(job: any) {
    return {
      id: job.id,
      title: job.title,
      description: job.description,
      suburb: job.suburb,
      state: job.state,
      preferredDate: job.preferredDate,
      status: job.status,
      category: job.category
        ? { id: job.category.id, name: job.category.name }
        : null,
      bidsCount: job.bidsCount ?? 0,
      createdAt: job.createdAt,
    };
  }

  static mapJobsToUnifiedList(
    rawJobs: any[],
    pagination: {
      page: number;
      pageSize: number;
      total: number;
      totalPages: number;
    },
  ): UnifiedJobListResponseDto {
    return {
      data: rawJobs.map((job) => this.mapJobToUnifiedResponse(job)),
      pagination: {
        page: pagination.page,
        pageSize: pagination.pageSize,
        total: pagination.total,
        totalPages: pagination.totalPages,
      },
    };
  }
}

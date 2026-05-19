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
      bidsCount: rawJob.bids.length || 0,
      status: rawJob.status,
      category: {
        id: rawJob.category?.id || rawJob.categoryId,
        name: rawJob.category?.name,
      },
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

export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationMeta;
}

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 20;

export class PaginationHelper {
  static normalize(params: PaginationParams = {}): { page: number; pageSize: number } {
    const page = params.page && params.page > 0 ? params.page : DEFAULT_PAGE;
    const pageSize = params.pageSize && params.pageSize > 0 ? params.pageSize : DEFAULT_PAGE_SIZE;
    return { page, pageSize };
  }

  static calculateSkip(page: number, pageSize: number): number {
    return (page - 1) * pageSize;
  }

  static calculateTotalPages(total: number, pageSize: number): number {
    if (pageSize <= 0) return 0;
    return Math.ceil(total / pageSize);
  }

  static buildResponse<T>(
    data: T[],
    total: number,
    page: number,
    pageSize: number,
  ): PaginatedResponse<T> {
    return {
      data,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: PaginationHelper.calculateTotalPages(total, pageSize),
      },
    };
  }
}

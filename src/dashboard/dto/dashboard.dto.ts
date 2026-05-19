import { ApiProperty } from '@nestjs/swagger';

export class CustomerDashboardDto {
  @ApiProperty({
    description: 'Number of open jobs',
    example: 3,
  })
  openJobsCount?: number;

  @ApiProperty({
    description: 'Number of assigned jobs',
    example: 2,
  })
  assignedJobsCount?: number;

  @ApiProperty({
    description: 'Number of completed jobs',
    example: 12,
  })
  completedJobsCount?: number;

  @ApiProperty({
    description: 'List of open jobs',
    type: [Object],
    example: [
      {
        id: '550e8400-e29b-41d4-a716-446655440000',
        title: 'Car washing',
        status: 'open',
        createdAt: '2026-03-15T10:00:00Z',
      },
    ],
  })
  openJobs?: Array<{
    id?: string;
    title?: string;
    status?: string;
    createdAt?: Date;
  }>;
}

export class ProviderDashboardDto {
  @ApiProperty({
    description: 'Number of available jobs',
    example: 5,
  })
  availableJobsCount?: number;

  @ApiProperty({
    description: 'Number of pending bids',
    example: 2,
  })
  pendingBidsCount?: number;

  @ApiProperty({
    description: 'Number of assigned jobs',
    example: 1,
  })
  assignedJobsCount?: number;

  @ApiProperty({
    description: 'Number of completed jobs',
    example: 8,
  })
  completedJobsCount?: number;

  @ApiProperty({
    description: 'Recent bids made',
    type: [Object],
    example: [
      {
        id: '550e8400-e29b-41d4-a716-446655440000',
        jobTitle: 'Car detailing',
        status: 'pending',
        createdAt: '2026-03-15T10:00:00Z',
      },
    ],
  })
  recentBids?: Array<{
    id?: string;
    jobTitle?: string;
    status?: string;
    createdAt?: Date;
  }>;
}

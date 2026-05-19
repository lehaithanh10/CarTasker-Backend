import { IsString, IsUUID, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateJobDto {
  @ApiProperty({
    description: 'Service category ID',
    format: 'uuid',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsUUID()
  categoryId: string;

  @ApiProperty({
    description: 'Job title',
    example: 'Car washing and detailing',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Detailed job description',
    example: 'Need professional wash and interior cleaning for my sedan',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Location address',
    example: '123 Main Street, Sydney',
  })
  @IsString()
  locationText: string;

  @ApiProperty({
    description: 'Suburb/locality',
    example: 'Parramatta',
    required: false,
  })
  @IsOptional()
  @IsString()
  suburb?: string;

  @ApiProperty({
    description: 'State/province',
    example: 'NSW',
    required: false,
  })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiProperty({
    description: 'Preferred date and time for service',
    format: 'date-time',
    example: '2026-03-20T10:00:00Z',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  preferredDate?: string;
}

export class UpdateJobDto {
  @ApiProperty({
    description: 'Job title',
    example: 'Car washing and detailing',
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    description: 'Job description',
    example: 'Need professional wash and interior cleaning',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Location address',
    example: '123 Main Street, Sydney',
    required: false,
  })
  @IsOptional()
  @IsString()
  locationText?: string;

  @ApiProperty({
    description: 'Suburb/locality',
    required: false,
  })
  @IsOptional()
  @IsString()
  suburb?: string;

  @ApiProperty({
    description: 'State/province',
    required: false,
  })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiProperty({
    description: 'Preferred service date',
    format: 'date-time',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  preferredDate?: string;
}

export class CategoryDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}

export class UnifiedJobResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  locationText: string;

  @ApiProperty()
  suburb: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  preferredDate: string;

  @ApiProperty()
  bidsCount: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  category: CategoryDto;
}

export class PaginationDto {
  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({ example: 20 })
  pageSize: number;

  @ApiProperty({ example: 45 })
  total: number;

  @ApiProperty({ example: 3 })
  totalPages: number;
}

export class UnifiedJobListResponseDto {
  @ApiProperty({ type: [UnifiedJobResponseDto] })
  data: UnifiedJobResponseDto[];

  @ApiProperty()
  pagination: PaginationDto;
}

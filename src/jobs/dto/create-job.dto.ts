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

import { IsString, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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

  @ApiProperty({ description: 'Suburb/locality', required: false })
  @IsOptional()
  @IsString()
  suburb?: string;

  @ApiProperty({ description: 'State/province', required: false })
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

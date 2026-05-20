import { IsOptional, IsNumber, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateJobBidDto {
  @ApiProperty({
    description: 'Bid amount in dollars',
    example: 89.99,
  })
  @IsNumber()
  bidAmount: number;

  @ApiProperty({
    description: 'Optional message from provider',
    example: 'I can complete this job within 2 hours',
    required: false,
  })
  @IsOptional()
  @IsString()
  message?: string;

  @ApiProperty({
    description: 'Estimated arrival time in hours',
    example: 2,
  })
  @IsNumber()
  estimatedArrivalHours: number;
}

export class UpdateJobBidDto {
  @ApiProperty({
    description: 'Bid amount in dollars',
    example: 89.99,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  bidAmount?: number;

  @ApiProperty({
    description: 'Optional message from provider',
    example: 'I can complete this job within 2 hours',
    required: false,
  })
  @IsOptional()
  @IsString()
  message?: string;

  @ApiProperty({
    description: 'Estimated arrival time in hours',
    example: 2,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  estimatedArrivalHours?: number;
}

export class AcceptBidDto {
  @ApiProperty({
    description: 'Job bid ID to accept',
    format: 'uuid',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsUUID()
  bidId!: string;
}

export class JobBidResponseDto {
  @ApiProperty({
    description: 'Bid ID',
    format: 'uuid',
  })
  id?: string;

  @ApiProperty({
    description: 'Job ID',
    format: 'uuid',
  })
  jobId?: string;

  @ApiProperty({
    description: 'Provider ID',
    format: 'uuid',
  })
  providerId?: string;

  @ApiProperty({
    description: 'Bid amount',
  })
  bidAmount?: number;

  @ApiProperty({
    description: 'Provider message',
  })
  message?: string;

  @ApiProperty({
    description: 'Estimated arrival hours',
  })
  estimatedArrivalHours?: number;

  @ApiProperty({
    description: 'Bid status',
    enum: ['pending', 'accepted', 'rejected', 'withdrawn'],
  })
  status?: string;

  @ApiProperty({
    description: 'Bid creation timestamp',
    format: 'date-time',
  })
  createdAt?: Date;

  @ApiProperty({
    description: 'Bid last update timestamp',
    format: 'date-time',
  })
  updatedAt?: Date;
}

export class JobBidWithDetailsDto extends JobBidResponseDto {
  @ApiProperty({
    description: 'Provider information',
    example: {
      id: '550e8400-e29b-41d4-a716-446655440000',
      fullName: 'John Smith',
      phone: '+1234567890',
    },
  })
  provider?: {
    id?: string;
    fullName?: string;
    phone?: string;
  };
}

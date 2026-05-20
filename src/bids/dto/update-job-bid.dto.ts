import { IsOptional, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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

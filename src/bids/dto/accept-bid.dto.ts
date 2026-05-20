import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AcceptBidDto {
  @ApiProperty({
    description: 'Job bid ID to accept',
    format: 'uuid',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsUUID()
  bidId!: string;
}

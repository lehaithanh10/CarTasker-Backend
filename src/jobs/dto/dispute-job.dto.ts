import { IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DisputeJobDto {
  @ApiProperty({
    description: 'Reason for disputing the job completion',
    example: 'The work was not completed as agreed.',
    minLength: 10,
    maxLength: 500,
  })
  @IsString()
  @MinLength(10)
  @MaxLength(500)
  reason: string;
}

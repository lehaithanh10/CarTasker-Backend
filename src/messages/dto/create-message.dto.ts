import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty({
    description: 'Message content',
    example: 'I can complete this job by 2 PM today.',
  })
  @IsString()
  messageText: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { MessageResponseDto } from './message-response.dto';

export class ConversationResponseDto {
  @ApiProperty({ description: 'Conversation ID', format: 'uuid' })
  id?: string;

  @ApiProperty({ description: 'Associated job ID', format: 'uuid' })
  jobId?: string;

  @ApiProperty({ description: 'Customer user ID', format: 'uuid' })
  customerId?: string;

  @ApiProperty({ description: 'Provider user ID', format: 'uuid' })
  providerId?: string;

  @ApiProperty({
    description: 'Conversation creation timestamp',
    format: 'date-time',
  })
  createdAt?: Date;

  @ApiProperty({
    description: 'Messages in this conversation',
    type: [MessageResponseDto],
  })
  messages?: MessageResponseDto[];
}

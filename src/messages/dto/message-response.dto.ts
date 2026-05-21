import { ApiProperty } from '@nestjs/swagger';

export class MessageResponseDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty({ format: 'uuid' })
  conversationId: string;

  @ApiProperty({ format: 'uuid', description: 'ID of the user who sent this message' })
  senderId: string;

  @ApiProperty({ description: 'Message text content' })
  messageText: string;

  @ApiProperty({ description: 'Whether the message has been read by the recipient' })
  isRead: boolean;

  @ApiProperty({ type: Date, description: 'When the message was created' })
  createdAt: Date;
}

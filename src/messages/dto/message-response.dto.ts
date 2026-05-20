import { ApiProperty } from '@nestjs/swagger';

export class MessageResponseDto {
  @ApiProperty({ description: 'Message ID', format: 'uuid' })
  id?: string;

  @ApiProperty({ description: 'Conversation ID', format: 'uuid' })
  conversationId?: string;

  @ApiProperty({ description: 'Sender user ID', format: 'uuid' })
  senderId?: string;

  @ApiProperty({ description: 'Message content' })
  messageText?: string;

  @ApiProperty({ description: 'Message read status' })
  isRead?: boolean;

  @ApiProperty({
    description: 'Message creation timestamp',
    format: 'date-time',
  })
  createdAt?: Date;
}

export class MessageWithSenderDto extends MessageResponseDto {
  @ApiProperty({
    description: 'Sender user information',
    example: {
      id: '550e8400-e29b-41d4-a716-446655440000',
      fullName: 'John Doe',
      avatarUrl: 'https://example.com/avatar.jpg',
    },
  })
  sender?: {
    id?: string;
    fullName?: string;
    avatarUrl?: string;
  };
}

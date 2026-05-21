import { ApiProperty } from '@nestjs/swagger';

class UserDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty({ nullable: true })
  avatarUrl: string | null;
}

class LastMessageDto {
  @ApiProperty()
  text: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ format: 'uuid' })
  senderId: string;
}

export class ConversationResponseDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty({ format: 'uuid' })
  jobId: string;

  @ApiProperty()
  jobTitle: string;

  @ApiProperty({ format: 'uuid' })
  customerId: string;

  @ApiProperty({ format: 'uuid' })
  providerId: string;

  @ApiProperty({ type: UserDto, description: 'The other party in the conversation' })
  otherUser: UserDto;

  @ApiProperty({ type: LastMessageDto, nullable: true })
  lastMessage: LastMessageDto | null;

  @ApiProperty({ type: Number, description: 'Unread message count for current user' })
  unreadCount: number;
}

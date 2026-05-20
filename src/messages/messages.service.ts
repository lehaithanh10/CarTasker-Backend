import { Injectable } from '@nestjs/common';
import { MessageRepository } from '@/repositories/message.repository';
import { CreateMessageDto } from './dto/message.dto';
import { ResourceNotFoundException } from '@/common/exceptions';

@Injectable()
export class MessagesService {
  constructor(private messageRepository: MessageRepository) {}

  async getConversations(userId: string) {
    return this.messageRepository.findMany({
      where: {
        OR: [{ senderId: userId }],
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getConversation(conversationId: string) {
    return this.findConversationMessagesOrThrow(conversationId);
  }

  async getConversationMessages(conversationId: string) {
    return this.findConversationMessagesOrThrow(conversationId, {
      orderBy: { createdAt: 'desc' },
    });
  }

  async sendMessage(
    conversationId: string,
    userId: string,
    createMessageDto: CreateMessageDto,
  ) {
    return this.messageRepository.create({
      conversationId,
      senderId: userId,
      messageText: createMessageDto.messageText,
      isRead: false,
    });
  }

  async markMessageAsRead(messageId: string) {
    await this.messageRepository.findByIdOrThrow(messageId, 'Message');
    return this.messageRepository.update({ id: messageId }, { isRead: true });
  }

  private async findConversationMessagesOrThrow(
    conversationId: string,
    extraQuery: Record<string, any> = {},
  ) {
    const messages = await this.messageRepository.findMany({
      where: { conversationId },
      ...extraQuery,
    });

    if (!messages || messages.length === 0) {
      throw new ResourceNotFoundException('Conversation');
    }

    return messages;
  }
}

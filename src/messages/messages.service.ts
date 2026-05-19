import { Injectable } from '@nestjs/common';
import { MessageRepository } from '@/repositories/message.repository';
import { CreateMessageDto } from './dto/message.dto';
import {
  ResourceNotFoundException,
} from '@/common/exceptions';

@Injectable()
export class MessagesService {
  constructor(private messageRepository: MessageRepository) {}

  async getConversations(userId: string) {
    return this.messageRepository.findMany({
      where: {
        OR: [
          { senderId: userId },
        ],
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getConversation(conversationId: string) {
    const messages = await this.messageRepository.findMany({
      where: { conversationId },
    });

    if (!messages || messages.length === 0) {
      throw new ResourceNotFoundException('Conversation');
    }

    return messages;
  }

  async getConversationMessages(conversationId: string) {
    const messages = await this.messageRepository.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'desc' },
    });

    if (!messages || messages.length === 0) {
      throw new ResourceNotFoundException('Conversation');
    }

    return messages;
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
    const message = await this.messageRepository.findUnique({ id: messageId });

    if (!message) {
      throw new ResourceNotFoundException('Message');
    }

    return this.messageRepository.update(
      { id: messageId },
      { isRead: true }
    );
  }
}

import { Injectable } from '@nestjs/common';
import { MessageRepository } from '@/repositories/message.repository';
import { ConversationRepository } from '@/repositories/conversation.repository';
import { JobRepository } from '@/repositories/job.repository';
import { MessagesGateway } from './messages.gateway';
import { CreateMessageDto } from './dto';
import { ResourceNotFoundException, UnauthorizedActionException } from '@/common/exceptions';
import { AuthorizationHelper } from '@/common/helpers';

export interface GetMessagesQuery {
  limit?: number; // default 30, max 100
  before?: string; // messageId — return older messages (infinite scroll up)
  after?: string; // messageId — return newer messages (gap-fill after reconnect)
}

@Injectable()
export class MessagesService {
  constructor(
    private messageRepository: MessageRepository,
    private conversationRepository: ConversationRepository,
    private jobRepository: JobRepository,
    private gateway: MessagesGateway,
  ) {}

  // ── Conversations ────────────────────────────────────────────────────────

  async getOrCreateConversation(userId: string, jobId: string, recipientId: string) {
    const job = await this.jobRepository.findByIdOrThrow(jobId, 'Job');

    const isCustomer = job.customerId === userId;
    const isAssignedProvider = job.assignedProviderId === userId;

    if (!isCustomer && !isAssignedProvider) {
      throw new UnauthorizedActionException(
        'You must be the job owner or assigned provider to start a conversation',
      );
    }

    const customerId = isCustomer ? userId : recipientId;
    const providerId = isCustomer ? recipientId : userId;

    return this.conversationRepository.upsertByJobId(jobId, customerId, providerId);
  }

  async getConversations(userId: string) {
    return this.conversationRepository.findManyForUser(userId);
  }

  async getUnreadCount(userId: string) {
    const count = await this.conversationRepository.countUnreadForUser(userId);
    return { count };
  }

  // ── Messages ─────────────────────────────────────────────────────────────

  async getConversationMessages(
    conversationId: string,
    userId: string,
    query: GetMessagesQuery = {},
  ) {
    const allowed = await this.conversationRepository.isParticipant(conversationId, userId);
    if (!allowed) {
      throw new UnauthorizedActionException('Not a participant in this conversation');
    }

    const limit = Math.min(query.limit ?? 30, 100);

    if (query.before) {
      // Older messages: createdAt < cursor message's createdAt (scroll up)
      const cursor = await this.messageRepository.findUnique({
        id: query.before,
      });
      if (!cursor) throw new ResourceNotFoundException('Cursor message');
      return this.messageRepository.findMany({
        where: {
          conversationId,
          createdAt: { lt: (cursor as { createdAt: Date }).createdAt },
        },
        orderBy: { createdAt: 'asc' },
        take: limit,
      });
    }

    if (query.after) {
      // Newer messages: createdAt > cursor message's createdAt (gap-fill)
      const cursor = await this.messageRepository.findUnique({
        id: query.after,
      });
      if (!cursor) throw new ResourceNotFoundException('Cursor message');
      return this.messageRepository.findMany({
        where: {
          conversationId,
          createdAt: { gt: (cursor as { createdAt: Date }).createdAt },
        },
        orderBy: { createdAt: 'asc' },
      });
    }

    // Initial load: fetch the most-recent N messages then reverse to ascending
    const messages = await this.messageRepository.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
    return [...messages].reverse();
  }

  async sendMessage(conversationId: string, userId: string, dto: CreateMessageDto) {
    const conv = await this.conversationRepository.findByIdOrNull(conversationId);
    if (!conv) throw new ResourceNotFoundException('Conversation');

    AuthorizationHelper.ensureOneOfOwners(conv, userId, ['customerId', 'providerId']);

    const message = await this.messageRepository.create({
      conversationId,
      senderId: userId,
      messageText: dto.messageText,
      isRead: false,
    });

    // Emit real-time events
    this.gateway.emitNewMessage(conversationId, message);

    const recipientId = conv.customerId === userId ? conv.providerId : conv.customerId;
    const unreadCount = await this.conversationRepository.countUnreadForUser(recipientId);
    this.gateway.emitUnreadChanged(recipientId, unreadCount);

    return message;
  }

  async markMessageAsRead(messageId: string, userId: string) {
    const message = await this.messageRepository.findByIdOrThrow(messageId, 'Message');

    // Security: the user must be a participant in this message's conversation.
    // Without this check, any authenticated user could mark another user's
    // messages as read by guessing message IDs — polluting their unread counts.
    const conversationId = (message as { conversationId: string }).conversationId;
    const allowed = await this.conversationRepository.isParticipant(conversationId, userId);
    if (!allowed) {
      throw new UnauthorizedActionException('Not a participant in this conversation');
    }

    const updated = await this.messageRepository.update({ id: messageId }, { isRead: true });

    // Emit read receipt and refresh unread count for the reader
    this.gateway.emitMessageRead(conversationId, messageId, userId);
    const newCount = await this.conversationRepository.countUnreadForUser(userId);
    this.gateway.emitUnreadChanged(userId, newCount);

    return updated;
  }
}

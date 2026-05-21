import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import {
  ConversationMapper,
  type ConversationListItem,
} from '@/messages/mappers/conversation.mapper';

// Re-export so existing import paths (`from '@/repositories/conversation.repository'`)
// keep working for consumers that import the type alongside the repo class.
export type { ConversationListItem };

@Injectable()
export class ConversationRepository {
  constructor(private prisma: PrismaService) {}

  async findByJobId(jobId: string) {
    return this.prisma.conversation.findUnique({ where: { jobId } });
  }

  async findByIdOrNull(id: string) {
    return this.prisma.conversation.findUnique({ where: { id } });
  }

  /** Create-or-get by jobId (jobId is UNIQUE in schema) */
  async upsertByJobId(jobId: string, customerId: string, providerId: string) {
    return this.prisma.conversation.upsert({
      where: { jobId },
      update: {},
      create: { jobId, customerId, providerId },
    });
  }

  /** All conversations for a user, with last message + per-conversation unread count */
  async findManyForUser(userId: string): Promise<ConversationListItem[]> {
    const rows = await this.prisma.conversation.findMany({
      where: { OR: [{ customerId: userId }, { providerId: userId }] },
      include: {
        job: { select: { id: true, title: true } },
        customer: { select: { id: true, fullName: true, avatarUrl: true } },
        provider: { select: { id: true, fullName: true, avatarUrl: true } },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
        _count: {
          select: {
            messages: { where: { isRead: false, senderId: { not: userId } } },
          },
        },
      },
    });

    return ConversationMapper.toListItems(rows, userId);
  }

  /** Total unread message count across all conversations for a user */
  async countUnreadForUser(userId: string): Promise<number> {
    return this.prisma.message.count({
      where: {
        isRead: false,
        senderId: { not: userId },
        conversation: { OR: [{ customerId: userId }, { providerId: userId }] },
      },
    });
  }

  /** Check whether userId is a participant in the conversation */
  async isParticipant(conversationId: string, userId: string): Promise<boolean> {
    const conv = await this.prisma.conversation.findUnique({
      where: { id: conversationId },
      select: { customerId: true, providerId: true },
    });
    if (!conv) return false;
    return conv.customerId === userId || conv.providerId === userId;
  }
}

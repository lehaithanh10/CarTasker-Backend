/**
 * Maps Prisma conversation rows (with included relations) into the
 * client-facing `ConversationListItem` shape. Lives here (not in the
 * repository) per CLAUDE.md §2 — entity → response DTO transformation
 * belongs in a mapper, not in data-access code.
 */

export interface ConversationListItem {
  id: string;
  jobId: string;
  jobTitle: string;
  customerId: string;
  providerId: string;
  otherUser: { id: string; fullName: string; avatarUrl: string | null };
  lastMessage: { text: string; createdAt: Date; senderId: string } | null;
  unreadCount: number;
}

/** Shape of a single row returned by `ConversationRepository.findManyForUser`'s Prisma query */
export interface ConversationRowWithRelations {
  id: string;
  jobId: string;
  customerId: string;
  providerId: string;
  job: { id: string; title: string };
  customer: { id: string; fullName: string; avatarUrl: string | null };
  provider: { id: string; fullName: string; avatarUrl: string | null };
  messages: Array<{
    messageText: string;
    createdAt: Date;
    senderId: string;
  }>;
  _count: { messages: number };
}

export class ConversationMapper {
  /**
   * Map a single conversation row to a `ConversationListItem`.
   * `viewerUserId` selects which side of the conversation is "the other user".
   */
  static toListItem(
    row: ConversationRowWithRelations,
    viewerUserId: string,
  ): ConversationListItem {
    const otherUser =
      row.customerId === viewerUserId ? row.provider : row.customer;
    const lastMsg = row.messages[0] ?? null;

    return {
      id: row.id,
      jobId: row.jobId,
      jobTitle: row.job.title,
      customerId: row.customerId,
      providerId: row.providerId,
      otherUser: {
        id: otherUser.id,
        fullName: otherUser.fullName,
        avatarUrl: otherUser.avatarUrl,
      },
      lastMessage: lastMsg
        ? {
            text: lastMsg.messageText,
            createdAt: lastMsg.createdAt,
            senderId: lastMsg.senderId,
          }
        : null,
      unreadCount: row._count.messages,
    };
  }

  /**
   * Map many rows, sorted by most-recent message timestamp (descending, nulls last).
   * Sorting is done in-memory; acceptable for typical user conversation volumes (<100).
   */
  static toListItems(
    rows: ConversationRowWithRelations[],
    viewerUserId: string,
  ): ConversationListItem[] {
    const sorted = [...rows].sort((a, b) => {
      const aTime = a.messages[0]?.createdAt?.getTime() ?? 0;
      const bTime = b.messages[0]?.createdAt?.getTime() ?? 0;
      return bTime - aTime;
    });
    return sorted.map((row) => ConversationMapper.toListItem(row, viewerUserId));
  }
}

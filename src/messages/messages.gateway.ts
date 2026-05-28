import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { Logger } from '@nestjs/common';
import { ConversationRepository } from '@/repositories/conversation.repository';

interface AuthSocket extends Socket {
  userId?: string;
}

// CORS is configured on the IoAdapter in main.ts (bootstrap), not here —
// keeps the gateway free of process.env reads per CLAUDE.md §6.
@WebSocketGateway({ namespace: '/ws' })
export class MessagesGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private readonly logger = new Logger(MessagesGateway.name);

  constructor(
    private jwtService: JwtService,
    private conversationRepository: ConversationRepository,
  ) {}

  // ── Connection / disconnection ──────────────────────────────────────────

  async handleConnection(client: AuthSocket) {
    try {
      const token =
        client.handshake.auth?.token ||
        client.handshake.headers?.authorization?.replace('Bearer ', '');
      if (!token) throw new Error('No token provided');

      const payload = this.jwtService.verify<{ sub: string }>(token);
      if (!payload?.sub) throw new Error('Invalid token payload');

      client.userId = payload.sub;

      // Each authenticated user has a personal room for unread-count broadcasts
      client.join(`user:${client.userId}`);
      this.logger.log(`Client connected: ${client.id} (userId: ${client.userId})`);
    } catch (error) {
      this.logger.warn(
        `Rejected unauthenticated connection: ${client.id} — ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      client.disconnect(true);
    }
  }

  handleDisconnect(client: AuthSocket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  // ── Room management ─────────────────────────────────────────────────────

  @SubscribeMessage('conversation:join')
  async handleJoin(
    @ConnectedSocket() client: AuthSocket,
    @MessageBody() data: { conversationId: string },
  ) {
    if (!client.userId || !data?.conversationId) return;

    const allowed = await this.conversationRepository.isParticipant(
      data.conversationId,
      client.userId,
    );

    if (!allowed) {
      client.emit('error', { message: 'Not a participant in this conversation' });
      return;
    }

    client.join(`conversation:${data.conversationId}`);
    this.logger.log(`User ${client.userId} joined conversation:${data.conversationId}`);
  }

  @SubscribeMessage('conversation:leave')
  handleLeave(
    @ConnectedSocket() client: AuthSocket,
    @MessageBody() data: { conversationId: string },
  ) {
    if (!data?.conversationId) return;
    client.leave(`conversation:${data.conversationId}`);
  }

  // ── Emit helpers (called by MessagesService after each mutation) ─────────

  emitNewMessage(conversationId: string, message: unknown) {
    this.server.to(`conversation:${conversationId}`).emit('message:new', message);
  }

  emitMessageRead(conversationId: string, messageId: string, readerId: string) {
    this.server.to(`conversation:${conversationId}`).emit('message:read', { messageId, readerId });
  }

  emitUnreadChanged(userId: string, count: number) {
    this.server.to(`user:${userId}`).emit('unread:changed', { count });
  }
}

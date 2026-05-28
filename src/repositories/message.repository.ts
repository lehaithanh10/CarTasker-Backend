import { Injectable, Inject } from '@nestjs/common';
import { ORMAdapter } from './adapters/orm.adapter';
import { ORM_ADAPTER_TOKEN } from './adapters/orm.adapter.token';
import { BaseRepository } from './base.repository';

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  messageText: string;
  isRead: boolean;
  createdAt: Date;
}

export interface CreateMessageInput {
  conversationId: string;
  senderId: string;
  messageText: string;
  isRead?: boolean;
}

export interface UpdateMessageInput {
  messageText?: string;
  isRead?: boolean;
}

@Injectable()
export class MessageRepository extends BaseRepository<
  Message,
  CreateMessageInput,
  UpdateMessageInput
> {
  protected readonly modelName = 'message';

  constructor(@Inject(ORM_ADAPTER_TOKEN) ormAdapter: ORMAdapter) {
    super(ormAdapter);
  }
}

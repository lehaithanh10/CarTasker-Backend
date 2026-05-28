import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { MessagesService } from './messages.service';
import { CreateMessageDto, CreateConversationDto } from './dto';
import { JwtAuthGuard } from '@/common/guards';
import { CurrentUser, CurrentUserPayload } from '@/common/decorators';

@ApiTags('messages')
@Controller('conversations')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get or create a conversation for a job' })
  async getOrCreateConversation(
    @CurrentUser() user: CurrentUserPayload,
    @Body() dto: CreateConversationDto,
  ) {
    return this.messagesService.getOrCreateConversation(user.userId, dto.jobId, dto.recipientId);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all conversations for the current user' })
  async getConversations(@CurrentUser() user: CurrentUserPayload) {
    return this.messagesService.getConversations(user.userId);
  }

  @Get(':conversationId/messages')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get messages for a conversation (cursor-paginated)',
  })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({
    name: 'before',
    required: false,
    type: String,
    description: 'Message ID — return messages older than this',
  })
  @ApiQuery({
    name: 'after',
    required: false,
    type: String,
    description: 'Message ID — return messages newer than this (gap-fill)',
  })
  async getConversationMessages(
    @Param('conversationId') conversationId: string,
    @CurrentUser() user: CurrentUserPayload,
    @Query('limit') limit?: string,
    @Query('before') before?: string,
    @Query('after') after?: string,
  ) {
    return this.messagesService.getConversationMessages(conversationId, user.userId, {
      limit: limit ? parseInt(limit, 10) : undefined,
      before,
      after,
    });
  }

  @Post(':conversationId/messages')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Send a message in a conversation' })
  async sendMessage(
    @Param('conversationId') conversationId: string,
    @CurrentUser() user: CurrentUserPayload,
    @Body() dto: CreateMessageDto,
  ) {
    return this.messagesService.sendMessage(conversationId, user.userId, dto);
  }
}

@ApiTags('messages')
@Controller('messages')
export class MessageActionsController {
  constructor(private messagesService: MessagesService) {}

  @Get('unread-count')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get total unread message count for current user' })
  async getUnreadCount(@CurrentUser() user: CurrentUserPayload) {
    return this.messagesService.getUnreadCount(user.userId);
  }

  @Post(':messageId/read')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Mark a message as read' })
  async markMessageAsRead(
    @Param('messageId') messageId: string,
    @CurrentUser() user: CurrentUserPayload,
  ) {
    return this.messagesService.markMessageAsRead(messageId, user.userId);
  }
}

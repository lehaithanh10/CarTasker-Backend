import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/message.dto';
import { JwtAuthGuard } from '@/common/guards';
import { CurrentUser, CurrentUserPayload } from '@/common/decorators';

@ApiTags('messages')
@Controller('conversations')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all conversations for current user' })
  async getConversations(@CurrentUser() user: CurrentUserPayload) {
    return this.messagesService.getConversations(user.userId);
  }

  @Get(':conversationId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get conversation details' })
  async getConversation(
    @Param('conversationId') conversationId: string,
  ) {
    return this.messagesService.getConversation(conversationId);
  }

  @Get(':conversationId/messages')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get messages for a conversation' })
  async getConversationMessages(
    @Param('conversationId') conversationId: string,
  ) {
    return this.messagesService.getConversationMessages(conversationId);
  }

  @Post(':conversationId/messages')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Send a message' })
  async sendMessage(
    @Param('conversationId') conversationId: string,
    @CurrentUser() user: CurrentUserPayload,
    @Body() createMessageDto: CreateMessageDto,
  ) {
    return this.messagesService.sendMessage(conversationId, user.userId, createMessageDto);
  }
}

@ApiTags('messages')
@Controller('messages')
export class MessageActionsController {
  constructor(private messagesService: MessagesService) {}

  @Post(':messageId/read')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Mark message as read' })
  async markMessageAsRead(
    @Param('messageId') messageId: string,
  ) {
    return this.messagesService.markMessageAsRead(messageId);
  }
}

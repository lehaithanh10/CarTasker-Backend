import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController, MessageActionsController } from './messages.controller';
import { RepositoriesModule } from '@/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  providers: [MessagesService],
  controllers: [MessagesController, MessageActionsController],
  exports: [MessagesService],
})
export class MessagesModule {}

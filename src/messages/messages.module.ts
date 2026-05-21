import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController, MessageActionsController } from './messages.controller';
import { MessagesGateway } from './messages.gateway';
import { RepositoriesModule } from '@/repositories/repositories.module';
import { AuthModule } from '@/auth/auth.module';

@Module({
  // AuthModule exports JwtModule → JwtService is available for MessagesGateway
  imports: [RepositoriesModule, AuthModule],
  providers: [MessagesService, MessagesGateway],
  controllers: [MessagesController, MessageActionsController],
  exports: [MessagesService],
})
export class MessagesModule {}

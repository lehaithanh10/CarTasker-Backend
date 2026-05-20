import { Module } from '@nestjs/common';
import { BidsService } from './bids.service';
import { BidsController, BidActionsController } from './bids.controller';
import { RepositoriesModule } from '@/repositories/repositories.module';
import { ProvidersModule } from '@/providers/providers.module';

@Module({
  imports: [RepositoriesModule, ProvidersModule],
  providers: [BidsService],
  controllers: [BidsController, BidActionsController],
  exports: [BidsService],
})
export class BidsModule {}

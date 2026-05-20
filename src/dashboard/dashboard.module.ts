import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { RepositoriesModule } from '@/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  providers: [DashboardService],
  controllers: [DashboardController],
})
export class DashboardModule {}

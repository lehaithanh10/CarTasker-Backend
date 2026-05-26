import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { CompletionAutoReleaseScheduler } from './completion-auto-release.scheduler';
import { RepositoriesModule } from '@/repositories/repositories.module';

@Module({
  imports: [
    RepositoriesModule,
    ScheduleModule.forRoot(),
  ],
  providers: [JobsService, CompletionAutoReleaseScheduler],
  controllers: [JobsController],
  exports: [JobsService],
})
export class JobsModule {}

import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { JobsService } from './jobs.service';

/**
 * Periodically checks for jobs stuck in AWAITING_CUSTOMER_CONFIRMATION
 * past their autoReleaseAt deadline and flips them to COMPLETED.
 *
 * The window is controlled by AUTO_RELEASE_HOURS in ConfigService (default 48h).
 */
@Injectable()
export class CompletionAutoReleaseScheduler {
  private readonly logger = new Logger(CompletionAutoReleaseScheduler.name);

  constructor(private readonly jobsService: JobsService) {}

  @Cron(CronExpression.EVERY_10_MINUTES)
  async handleAutoRelease() {
    this.logger.debug('Running completion auto-release check…');
    await this.jobsService.autoReleaseExpiredCompletions();
  }
}

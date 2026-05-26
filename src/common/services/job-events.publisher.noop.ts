import { Injectable, Logger } from '@nestjs/common';
import { JobEventsPublisher, JobLifecycleEvent } from './job-events.publisher';

/**
 * Default (no-op) job events publisher.
 * Logs the event at debug level — real payment / notification publishers
 * are wired in follow-up PRs by overriding this binding in their own modules.
 */
@Injectable()
export class NoopJobEventsPublisher extends JobEventsPublisher {
  private readonly logger = new Logger(NoopJobEventsPublisher.name);

  async publish(event: JobLifecycleEvent): Promise<void> {
    this.logger.debug(`[JobEvent] ${event.type} — ${JSON.stringify(event)}`);
  }
}

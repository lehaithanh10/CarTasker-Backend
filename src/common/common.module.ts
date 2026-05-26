import { Global, Module } from '@nestjs/common';
import { PasswordService } from './services/password.service';
import { JobEventsPublisher } from './services/job-events.publisher';
import { NoopJobEventsPublisher } from './services/job-events.publisher.noop';

@Global()
@Module({
  providers: [
    PasswordService,
    // Default publisher: logs events at debug level.
    // Override by providing a real implementation in the payment / notification module.
    { provide: JobEventsPublisher, useClass: NoopJobEventsPublisher },
  ],
  exports: [PasswordService, JobEventsPublisher],
})
export class CommonModule {}

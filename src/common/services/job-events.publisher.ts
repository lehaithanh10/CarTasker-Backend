/**
 * Job lifecycle event publisher.
 *
 * This is a thin publish-only interface — the completion service emits events here,
 * and separate listener classes (payment, notifications, etc.) subscribe to them.
 * Keep payment / notification logic OUT of JobsService; bind a real publisher
 * implementation in those downstream modules instead.
 *
 * Default binding: NoopJobEventsPublisher (Logger.debug only).
 * To add a real listener: extend this abstract class, implement publish(), and
 * provide it via a NestJS DI token override in the relevant module.
 */

export type JobLifecycleEvent =
  | {
      type: 'job.completion-requested';
      jobId: string;
      providerId: string;
      autoReleaseAt: Date;
    }
  | {
      type: 'job.completed';
      jobId: string;
      source: 'customer' | 'customer-shortcut' | 'auto-release';
    }
  | {
      type: 'job.disputed';
      jobId: string;
      customerId: string;
      reason: string;
    };

export abstract class JobEventsPublisher {
  abstract publish(event: JobLifecycleEvent): Promise<void>;
}

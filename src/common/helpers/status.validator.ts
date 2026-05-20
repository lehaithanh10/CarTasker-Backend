import { InvalidJobStatusException } from '@/common/exceptions';

export class StatusValidator {
  static requireStatus<T extends { status: string }>(
    resource: T,
    allowedStatus: string,
    message: string,
  ): void {
    if (resource.status !== allowedStatus) {
      throw new InvalidJobStatusException(message);
    }
  }

  static requireOneOf<T extends { status: string }>(
    resource: T,
    allowedStatuses: string[],
    message: string,
  ): void {
    if (!allowedStatuses.includes(resource.status)) {
      throw new InvalidJobStatusException(message);
    }
  }
}

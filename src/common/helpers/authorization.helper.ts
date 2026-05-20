import { UnauthorizedActionException } from '@/common/exceptions';

export class AuthorizationHelper {
  static ensureOwner<T>(
    resource: T,
    expectedOwnerId: string,
    ownerField: keyof T,
    message?: string,
  ): void {
    const actualOwnerId = resource[ownerField] as unknown as string;
    if (actualOwnerId !== expectedOwnerId) {
      throw new UnauthorizedActionException(message);
    }
  }

  static ensureOneOfOwners<T>(
    resource: T,
    expectedOwnerId: string,
    ownerFields: Array<keyof T>,
    message?: string,
  ): void {
    const matches = ownerFields.some(
      (field) => (resource[field] as unknown as string) === expectedOwnerId,
    );
    if (!matches) {
      throw new UnauthorizedActionException(message);
    }
  }
}

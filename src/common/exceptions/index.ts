import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExistsException extends HttpException {
  constructor(message = 'User with this email already exists') {
    super(message, HttpStatus.CONFLICT);
  }
}

export class InvalidCredentialsException extends HttpException {
  constructor(message = 'Invalid email or password') {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}

export class ResourceNotFoundException extends HttpException {
  constructor(resource: string) {
    super(`${resource} not found`, HttpStatus.NOT_FOUND);
  }
}

export class UnauthorizedActionException extends HttpException {
  constructor(message = 'You are not authorized to perform this action') {
    super(message, HttpStatus.FORBIDDEN);
  }
}

export class ProviderProfileRequiredException extends HttpException {
  constructor(message = 'Provider profile is required to perform this action') {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export class InvalidJobStatusException extends HttpException {
  constructor(message = 'Invalid job status for this operation') {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export class CannotBidOnOwnJobException extends HttpException {
  constructor() {
    super('You cannot bid on your own job', HttpStatus.BAD_REQUEST);
  }
}

export class BidAlreadyExistsException extends HttpException {
  constructor() {
    super('You have already placed a bid on this job', HttpStatus.BAD_REQUEST);
  }
}

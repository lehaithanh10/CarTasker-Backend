import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Optional JWT guard — attaches the user if a valid token is present,
 * but allows the request through (user = null) when no token is provided
 * or the token is invalid. Use on endpoints that serve both authenticated
 * and unauthenticated visitors with different response shapes.
 */
@Injectable()
export class OptionalJwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(_err: any, user: any) {
    // Return the user if valid, null otherwise — never throw.
    return user ?? null;
  }
}

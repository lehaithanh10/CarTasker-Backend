import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  Logger,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, query, params, body } = request;

    const logData = {
      timestamp: new Date().toISOString(),
      method,
      url,
      params,
      query,
      ...(body && body && Object.keys(body).length > 0 && { body }),
    };

    this.logger.log(JSON.stringify(logData));

    return next.handle().pipe(
      tap(() => {
        this.logger.log(
          JSON.stringify({
            timestamp: new Date().toISOString(),
            method,
            url,
            status: 'completed',
          }),
        );
      }),
    );
  }
}

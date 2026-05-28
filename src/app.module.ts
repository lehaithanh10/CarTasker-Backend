import { Module, ValidationPipe, BadRequestException } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProvidersModule } from './providers/providers.module';
import { CategoriesModule } from './categories/categories.module';
import { JobsModule } from './jobs/jobs.module';
import { BidsModule } from './bids/bids.module';
import { MessagesModule } from './messages/messages.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PrismaModule } from './prisma/prisma.module';
import { CommonModule } from './common/common.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // Rate limiting — 100 req/60s per IP by default.
    // Auth routes override this to 20 req/60s via @Throttle() on AuthController.
    ThrottlerModule.forRoot([
      {
        name: 'default',
        ttl: 60_000,   // milliseconds
        limit: 100,
      },
    ]),
    CommonModule,
    PrismaModule,
    HealthModule,
    AuthModule,
    UsersModule,
    ProvidersModule,
    CategoriesModule,
    JobsModule,
    BidsModule,
    MessagesModule,
    DashboardModule,
  ],
  providers: [
    // Apply ThrottlerGuard globally so every route is rate-limited.
    // Individual controllers/handlers can override via @Throttle() or @SkipThrottle().
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: 'APP_PIPE',
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        exceptionFactory: (errors) => {
          const messages = errors.map((error) => ({
            field: error.property,
            errors: Object.values(error.constraints || {}),
          }));
          return new BadRequestException({
            message: 'Validation failed',
            errors: messages,
          });
        },
      }),
    },
  ],
})
export class AppModule {}

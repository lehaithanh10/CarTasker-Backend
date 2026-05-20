import { Module, ValidationPipe, BadRequestException } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CommonModule,
    PrismaModule,
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

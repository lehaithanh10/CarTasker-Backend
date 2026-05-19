import { Module } from '@nestjs/common';
import { PrismaModule } from '@/prisma/prisma.module';
import { PrismaAdapter } from './adapters/prisma.adapter';
import { ORM_ADAPTER_TOKEN } from './adapters/orm.adapter.token';
import { UserRepository } from './user.repository';
import { JobRepository } from './job.repository';
import { BidRepository } from './bid.repository';
import { MessageRepository } from './message.repository';
import { ProviderRepository } from './provider.repository';
import { CategoryRepository } from './category.repository';

const repositories = [
  UserRepository,
  JobRepository,
  BidRepository,
  MessageRepository,
  ProviderRepository,
  CategoryRepository,
];

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: ORM_ADAPTER_TOKEN,
      useClass: PrismaAdapter,
    },
    ...repositories,
  ],
  exports: [...repositories],
})
export class RepositoriesModule {}

import { Injectable, Inject } from '@nestjs/common';
import { ORMAdapter } from './adapters/orm.adapter';
import { ORM_ADAPTER_TOKEN } from './adapters/orm.adapter.token';
import { BaseRepository } from './base.repository';

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  isActive: boolean;
  createdAt: Date;
}

export interface CreateServiceCategoryInput {
  name: string;
  slug: string;
  isActive?: boolean;
}

export interface UpdateServiceCategoryInput {
  name?: string;
  slug?: string;
  isActive?: boolean;
}

@Injectable()
export class CategoryRepository extends BaseRepository<
  ServiceCategory,
  CreateServiceCategoryInput,
  UpdateServiceCategoryInput
> {
  protected readonly modelName = 'serviceCategory';

  constructor(@Inject(ORM_ADAPTER_TOKEN) ormAdapter: ORMAdapter) {
    super(ormAdapter);
  }
}

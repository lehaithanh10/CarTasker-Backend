import { Injectable, Inject } from '@nestjs/common';
import { ORMAdapter } from './adapters/orm.adapter';
import { ORM_ADAPTER_TOKEN } from './adapters/orm.adapter.token';
import { BaseRepository } from './base.repository';

export interface ProviderProfile {
  id: string;
  userId: string;
  businessName: string | null;
  bio: string | null;
  yearsExperience: number | null;
  serviceAreaText: string | null;
  suburb: string | null;
  state: string | null;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProviderProfileInput {
  userId: string;
  businessName?: string | null;
  bio?: string | null;
  yearsExperience?: number | null;
  serviceAreaText?: string | null;
  suburb?: string | null;
  state?: string | null;
  isVerified?: boolean;
}

export interface UpdateProviderProfileInput {
  businessName?: string | null;
  bio?: string | null;
  yearsExperience?: number | null;
  serviceAreaText?: string | null;
  suburb?: string | null;
  state?: string | null;
  isVerified?: boolean;
}

@Injectable()
export class ProviderRepository extends BaseRepository<
  ProviderProfile,
  CreateProviderProfileInput,
  UpdateProviderProfileInput
> {
  protected readonly modelName = 'providerProfile';

  constructor(@Inject(ORM_ADAPTER_TOKEN) ormAdapter: ORMAdapter) {
    super(ormAdapter);
  }
}

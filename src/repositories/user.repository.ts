import { Injectable, Inject } from '@nestjs/common';
import { ORMAdapter } from './adapters/orm.adapter';
import { ORM_ADAPTER_TOKEN } from './adapters/orm.adapter.token';
import { BaseRepository } from './base.repository';

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  fullName: string;
  phone: string | null;
  role: string;
  avatarUrl: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserInput {
  email: string;
  passwordHash: string;
  fullName: string;
  phone?: string | null;
  role: string;
}

export interface UpdateUserInput {
  email?: string;
  passwordHash?: string;
  fullName?: string;
  phone?: string | null;
  role?: string;
  avatarUrl?: string | null;
  isActive?: boolean;
}

@Injectable()
export class UserRepository extends BaseRepository<User, CreateUserInput, UpdateUserInput> {
  protected readonly modelName = 'user';

  constructor(@Inject(ORM_ADAPTER_TOKEN) ormAdapter: ORMAdapter) {
    super(ormAdapter);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.ormAdapter.findUnique<User>(this.modelName, { email });
  }

  async findByIdWithSelect(userId: string) {
    return this.ormAdapter.findUnique<any>(this.modelName, { id: userId });
  }
}

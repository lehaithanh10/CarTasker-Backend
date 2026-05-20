import { Injectable } from '@nestjs/common';
import { ProviderRepository } from '@/repositories/provider.repository';
import { UserRepository } from '@/repositories/user.repository';
import {
  CreateProviderProfileDto,
  UpdateProviderProfileDto,
} from './dto/provider.dto';

@Injectable()
export class ProvidersService {
  constructor(
    private providerRepository: ProviderRepository,
    private userRepository: UserRepository,
  ) {}

  async createOrUpdateProfile(
    userId: string,
    createProfileDto: CreateProviderProfileDto,
  ) {
    const existingProfile = await this.providerRepository.findUnique({ userId });

    if (existingProfile) {
      return this.providerRepository.update({ userId }, createProfileDto);
    }

    return this.providerRepository.create({
      userId,
      ...createProfileDto,
    });
  }

  async updateProfile(
    userId: string,
    updateProfileDto: UpdateProviderProfileDto,
  ) {
    await this.providerRepository.findByOrThrow({ userId }, 'Provider profile');
    return this.providerRepository.update({ userId }, updateProfileDto);
  }

  async getProfile(userId: string) {
    return this.providerRepository.findUnique({ userId });
  }

  async getProviderDetails(providerId: string) {
    const provider = await this.userRepository.findByIdOrThrow(providerId, 'Provider');
    const profile = await this.providerRepository.findUnique({ userId: providerId });

    return {
      id: provider.id,
      email: provider.email,
      fullName: provider.fullName,
      phone: provider.phone,
      avatarUrl: provider.avatarUrl,
      profile,
    };
  }

  async hasProfile(userId: string): Promise<boolean> {
    const profile = await this.providerRepository.findUnique({ userId });
    return !!profile;
  }
}

import { Injectable } from '@nestjs/common';
import { ProviderRepository } from '@/repositories/provider.repository';
import { UserRepository } from '@/repositories/user.repository';
import {
  CreateProviderProfileDto,
  UpdateProviderProfileDto,
} from './dto/provider.dto';
import {
  ResourceNotFoundException,
} from '@/common/exceptions';

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
    const profile = await this.providerRepository.findUnique({ userId });

    if (!profile) {
      throw new ResourceNotFoundException('Provider profile');
    }

    return this.providerRepository.update({ userId }, updateProfileDto);
  }

  async getProfile(userId: string) {
    return this.providerRepository.findUnique({ userId });
  }

  async getProviderDetails(providerId: string) {
    const provider = await this.userRepository.findUnique({ id: providerId });

    if (!provider) {
      throw new ResourceNotFoundException('Provider');
    }

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

  async updateServices(
    userId: string,
  ) {
    const profile = await this.providerRepository.findUnique({ userId });

    if (!profile) {
      throw new ResourceNotFoundException('Provider profile');
    }

    return profile;
  }

  async hasProfile(userId: string): Promise<boolean> {
    const profile = await this.providerRepository.findUnique({ userId });
    return !!profile;
  }
}

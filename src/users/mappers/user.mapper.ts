import { User } from '@/repositories/user.repository';
import { AuthResponseDto } from '@/auth/dto/auth.dto';

export interface AuthUserPayload {
  id: string;
  email: string;
  fullName: string;
  phone: string | null;
  role: string;
  avatarUrl: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class UserMapper {
  static toAuthUser(user: User): AuthUserPayload {
    return {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      phone: user.phone,
      role: user.role,
      avatarUrl: user.avatarUrl,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static toAuthResponse(
    user: User,
    accessToken: string,
    refreshToken: string,
  ): AuthResponseDto {
    return {
      accessToken,
      refreshToken,
      user: UserMapper.toAuthUser(user),
    };
  }
}

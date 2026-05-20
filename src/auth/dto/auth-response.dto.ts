import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({
    description: 'JWT access token (expires in 24 hours)',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    required: false,
  })
  accessToken?: string;

  @ApiProperty({
    description: 'Refresh token (expires in 7 days)',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    required: false,
  })
  refreshToken?: string;

  @ApiProperty({
    description: 'User information',
    example: {
      id: '550e8400-e29b-41d4-a716-446655440000',
      email: 'john@example.com',
      fullName: 'John Doe',
      phone: '+1234567890',
      role: 'customer',
      avatarUrl: null,
      isActive: true,
      createdAt: '2026-01-01T00:00:00.000Z',
      updatedAt: '2026-01-01T00:00:00.000Z',
    },
    required: false,
  })
  user?: {
    id?: string;
    email?: string;
    fullName?: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };
}

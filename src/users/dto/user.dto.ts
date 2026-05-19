import { IsString, IsOptional, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'User full name',
    example: 'John Doe',
    required: false,
  })
  @IsOptional()
  @IsString()
  fullName?: string;

  @ApiProperty({
    description: 'User phone number',
    example: '+1234567890',
    required: false,
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    description: 'User avatar URL',
    example: 'https://example.com/avatar.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  avatarUrl?: string;
}

export class UpdatePasswordDto {
  @ApiProperty({
    description: 'Current password',
    example: 'oldPassword123',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  currentPassword: string;

  @ApiProperty({
    description: 'New password (minimum 6 characters)',
    example: 'newPassword123',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  newPassword: string;
}

export class UserResponseDto {
  @ApiProperty({
    description: 'User ID',
    format: 'uuid',
  })
  id?: string;

  @ApiProperty({
    description: 'User email',
  })
  email?: string;

  @ApiProperty({
    description: 'User full name',
  })
  fullName?: string;

  @ApiProperty({
    description: 'User phone number',
  })
  phone?: string;

  @ApiProperty({
    description: 'User role',
    enum: ['customer', 'provider', 'admin'],
  })
  role?: string;

  @ApiProperty({
    description: 'User avatar URL',
  })
  avatarUrl?: string;

  @ApiProperty({
    description: 'Account creation timestamp',
    format: 'date-time',
  })
  createdAt?: Date;

  @ApiProperty({
    description: 'Account last update timestamp',
    format: 'date-time',
  })
  updatedAt?: Date;
}

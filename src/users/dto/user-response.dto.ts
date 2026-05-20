import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ description: 'User ID', format: 'uuid' })
  id?: string;

  @ApiProperty({ description: 'User email' })
  email?: string;

  @ApiProperty({ description: 'User full name' })
  fullName?: string;

  @ApiProperty({ description: 'User phone number' })
  phone?: string;

  @ApiProperty({
    description: 'User role',
    enum: ['customer', 'provider', 'admin'],
  })
  role?: string;

  @ApiProperty({ description: 'User avatar URL' })
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

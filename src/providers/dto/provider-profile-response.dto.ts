import { ApiProperty } from '@nestjs/swagger';

export class ProviderProfileResponseDto {
  @ApiProperty({ description: 'Profile ID', format: 'uuid' })
  id?: string;

  @ApiProperty({ description: 'User ID', format: 'uuid' })
  userId?: string;

  @ApiProperty({ description: 'Business name' })
  businessName?: string;

  @ApiProperty({ description: 'Provider bio' })
  bio?: string;

  @ApiProperty({ description: 'Years of experience' })
  yearsExperience?: number;

  @ApiProperty({ description: 'Service area' })
  serviceAreaText?: string;

  @ApiProperty({ description: 'Suburb' })
  suburb?: string;

  @ApiProperty({ description: 'State' })
  state?: string;

  @ApiProperty({ description: 'Profile verification status' })
  isVerified?: boolean;

  @ApiProperty({ description: 'Profile creation date', format: 'date-time' })
  createdAt?: Date;

  @ApiProperty({ description: 'Last update date', format: 'date-time' })
  updatedAt?: Date;
}

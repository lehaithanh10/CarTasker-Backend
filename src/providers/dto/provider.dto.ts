import { IsString, IsOptional, IsArray, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProviderProfileDto {
  @ApiProperty({
    description: 'Business name',
    example: 'John Car Services',
    required: false,
  })
  @IsOptional()
  @IsString()
  businessName?: string;

  @ApiProperty({
    description: 'Provider bio/description',
    example: 'Professional car detailer with 5 years of experience',
    required: false,
  })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty({
    description: 'Years of experience',
    example: 5,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  yearsExperience?: number;

  @ApiProperty({
    description: 'Service area text',
    example: 'Sydney metropolitan area',
    required: false,
  })
  @IsOptional()
  @IsString()
  serviceAreaText?: string;

  @ApiProperty({
    description: 'Suburb',
    example: 'Parramatta',
    required: false,
  })
  @IsOptional()
  @IsString()
  suburb?: string;

  @ApiProperty({
    description: 'State',
    example: 'NSW',
    required: false,
  })
  @IsOptional()
  @IsString()
  state?: string;
}

export class UpdateProviderProfileDto {
  @ApiProperty({
    description: 'Business name',
    required: false,
  })
  @IsOptional()
  @IsString()
  businessName?: string;

  @ApiProperty({
    description: 'Bio',
    required: false,
  })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty({
    description: 'Years of experience',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  yearsExperience?: number;

  @ApiProperty({
    description: 'Service area',
    required: false,
  })
  @IsOptional()
  @IsString()
  serviceAreaText?: string;

  @ApiProperty({
    description: 'Suburb',
    required: false,
  })
  @IsOptional()
  @IsString()
  suburb?: string;

  @ApiProperty({
    description: 'State',
    required: false,
  })
  @IsOptional()
  @IsString()
  state?: string;
}

export class UpdateProviderServicesDto {
  @ApiProperty({
    description: 'Array of service category IDs',
    type: [String],
    example: ['category-uuid-1', 'category-uuid-2'],
  })
  @IsArray()
  @IsString({ each: true })
  serviceCategories: string[];
}

export class ProviderProfileResponseDto {
  @ApiProperty({
    description: 'Profile ID',
    format: 'uuid',
  })
  id?: string;

  @ApiProperty({
    description: 'User ID',
    format: 'uuid',
  })
  userId?: string;

  @ApiProperty({
    description: 'Business name',
  })
  businessName?: string;

  @ApiProperty({
    description: 'Provider bio',
  })
  bio?: string;

  @ApiProperty({
    description: 'Years of experience',
  })
  yearsExperience?: number;

  @ApiProperty({
    description: 'Service area',
  })
  serviceAreaText?: string;

  @ApiProperty({
    description: 'Suburb',
  })
  suburb?: string;

  @ApiProperty({
    description: 'State',
  })
  state?: string;

  @ApiProperty({
    description: 'Profile verification status',
  })
  isVerified?: boolean;

  @ApiProperty({
    description: 'Profile creation date',
    format: 'date-time',
  })
  createdAt?: Date;

  @ApiProperty({
    description: 'Last update date',
    format: 'date-time',
  })
  updatedAt?: Date;
}

export class ProviderDetailResponseDto {
  @ApiProperty({
    description: 'Provider user ID',
    format: 'uuid',
  })
  id?: string;

  @ApiProperty({
    description: 'Provider email',
  })
  email?: string;

  @ApiProperty({
    description: 'Provider full name',
  })
  fullName?: string;

  @ApiProperty({
    description: 'Provider phone',
  })
  phone?: string;

  @ApiProperty({
    description: 'Provider avatar URL',
  })
  avatarUrl?: string;

  @ApiProperty({
    description: 'Provider profile details',
  })
  profile?: ProviderProfileResponseDto;

  @ApiProperty({
    description: 'Services offered',
    type: [Object],
  })
  services?: Array<{ id: string; name: string; slug: string }>;
}

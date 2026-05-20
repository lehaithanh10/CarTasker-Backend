import { IsString, IsOptional, IsNumber } from 'class-validator';
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

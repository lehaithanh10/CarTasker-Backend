import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProviderProfileDto {
  @ApiProperty({ description: 'Business name', required: false })
  @IsOptional()
  @IsString()
  businessName?: string;

  @ApiProperty({ description: 'Bio', required: false })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty({ description: 'Years of experience', required: false })
  @IsOptional()
  @IsNumber()
  yearsExperience?: number;

  @ApiProperty({ description: 'Service area', required: false })
  @IsOptional()
  @IsString()
  serviceAreaText?: string;

  @ApiProperty({ description: 'Suburb', required: false })
  @IsOptional()
  @IsString()
  suburb?: string;

  @ApiProperty({ description: 'State', required: false })
  @IsOptional()
  @IsString()
  state?: string;
}

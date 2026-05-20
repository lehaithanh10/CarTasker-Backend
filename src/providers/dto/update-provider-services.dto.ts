import { IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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

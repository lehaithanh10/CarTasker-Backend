import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}

export class UnifiedJobResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  locationText: string;

  @ApiProperty()
  suburb: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  preferredDate: string;

  @ApiProperty()
  bidsCount: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  category: CategoryDto;
}

export class PaginationDto {
  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({ example: 20 })
  pageSize: number;

  @ApiProperty({ example: 45 })
  total: number;

  @ApiProperty({ example: 3 })
  totalPages: number;
}

export class UnifiedJobListResponseDto {
  @ApiProperty({ type: [UnifiedJobResponseDto] })
  data: UnifiedJobResponseDto[];

  @ApiProperty()
  pagination: PaginationDto;
}

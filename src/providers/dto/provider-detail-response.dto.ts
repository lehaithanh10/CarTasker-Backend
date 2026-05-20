import { ApiProperty } from '@nestjs/swagger';
import { ProviderProfileResponseDto } from './provider-profile-response.dto';

export class ProviderDetailResponseDto {
  @ApiProperty({ description: 'Provider user ID', format: 'uuid' })
  id?: string;

  @ApiProperty({ description: 'Provider email' })
  email?: string;

  @ApiProperty({ description: 'Provider full name' })
  fullName?: string;

  @ApiProperty({ description: 'Provider phone' })
  phone?: string;

  @ApiProperty({ description: 'Provider avatar URL' })
  avatarUrl?: string;

  @ApiProperty({ description: 'Provider profile details' })
  profile?: ProviderProfileResponseDto;

  @ApiProperty({
    description: 'Services offered',
    type: [Object],
  })
  services?: Array<{ id: string; name: string; slug: string }>;
}

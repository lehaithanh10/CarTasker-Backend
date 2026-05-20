import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ProvidersService } from './providers.service';
import {
  CreateProviderProfileDto,
  UpdateProviderProfileDto,
} from './dto/provider.dto';
import { JwtAuthGuard, RolesGuard } from '@/common/guards';
import { CurrentUser, CurrentUserPayload, Roles } from '@/common/decorators';
import { UserRole } from '@/common/enums';

@ApiTags('providers')
@Controller('providers')
export class ProvidersController {
  constructor(private providersService: ProvidersService) {}

  @Get(':providerId')
  @ApiOperation({ summary: 'Get provider details' })
  async getProviderDetails(@Param('providerId') providerId: string) {
    return this.providersService.getProviderDetails(providerId);
  }

  @Post('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PROVIDER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create provider profile' })
  async createProfile(
    @CurrentUser() user: CurrentUserPayload,
    @Body() createProfileDto: CreateProviderProfileDto,
  ) {
    return this.providersService.createOrUpdateProfile(user.userId, createProfileDto);
  }

  @Patch('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PROVIDER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update provider profile' })
  async updateProfile(
    @CurrentUser() user: CurrentUserPayload,
    @Body() updateProfileDto: UpdateProviderProfileDto,
  ) {
    return this.providersService.updateProfile(user.userId, updateProfileDto);
  }
}

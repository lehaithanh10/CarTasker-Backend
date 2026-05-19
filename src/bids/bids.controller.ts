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
import { BidsService } from './bids.service';
import { CreateJobBidDto } from './dto/bid.dto';
import { JwtAuthGuard, RolesGuard } from '@/common/guards';
import { CurrentUser, CurrentUserPayload, Roles } from '@/common/decorators';
import { UserRole } from '@/common/enums';

@ApiTags('bids')
@Controller('jobs')
export class BidsController {
  constructor(private bidsService: BidsService) {}

  @Post(':jobId/bids')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PROVIDER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a bid for a job' })
  async createBid(
    @Param('jobId') jobId: string,
    @CurrentUser() user: CurrentUserPayload,
    @Body() createBidDto: CreateJobBidDto,
  ) {
    return this.bidsService.createBid(jobId, user.userId, createBidDto);
  }

  @Get(':jobId/bids')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.CUSTOMER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all bids for a job' })
  async getBidsForJob(
    @Param('jobId') jobId: string,
    @CurrentUser() user: CurrentUserPayload,
  ) {
    return this.bidsService.getBidsForJob(jobId, user.userId);
  }

  @Patch(':bidId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PROVIDER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a bid' })
  async updateBid(
    // @Param('bidId') bidId: string,
    // @CurrentUser() user: CurrentUserPayload,
    // @Body() updateBidDto: CreateJobBidDto,
  ) {
    // For now, we'll leave bid updates to withdrawing and accepting
    // This endpoint can be extended to allow partial updates
    return { message: 'Bid update not yet implemented' };
  }

  @Post(':bidId/withdraw')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PROVIDER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Withdraw a bid' })
  async withdrawBid(
    @Param('bidId') bidId: string,
    @CurrentUser() user: CurrentUserPayload,
  ) {
    return this.bidsService.withdrawBid(bidId, user.userId);
  }

  @Post(':bidId/accept')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.CUSTOMER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Accept a bid' })
  async acceptBid(
    @Param('bidId') bidId: string,
    @CurrentUser() user: CurrentUserPayload,
  ) {
    const bid = await this.bidsService.getBid(bidId);
    return this.bidsService.acceptBid(bid.jobId, bidId, user.userId);
  }

  @Post(':bidId/reject')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.CUSTOMER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Reject a bid' })
  async rejectBid(
    @Param('bidId') bidId: string,
    @CurrentUser() user: CurrentUserPayload,
  ) {
    return this.bidsService.rejectBid(bidId, user.userId);
  }
}

// @ApiTags('bids')
// @Controller('bids')
// export class BidActionsController {
//   constructor(private bidsService: BidsService) {}
// }

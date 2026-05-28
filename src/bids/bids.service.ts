import { Injectable } from '@nestjs/common';
import { BidRepository } from '@/repositories/bid.repository';
import { JobRepository } from '@/repositories/job.repository';
// import { ProvidersService } from '@/providers/providers.service';
import { CreateJobBidDto, UpdateJobBidDto } from './dto/bid.dto';
import {
  ResourceNotFoundException,
  UnauthorizedActionException,
  CannotBidOnOwnJobException,
  BidAlreadyExistsException,
  // ProviderProfileRequiredException,
} from '@/common/exceptions';
import { BidStatus, JobStatus } from '@/common/enums';
import { PaginationHelper, AuthorizationHelper, StatusValidator } from '@/common/helpers';

interface BidPaginationFilters {
  page?: number;
  pageSize?: number;
}

@Injectable()
export class BidsService {
  constructor(
    private bidRepository: BidRepository,
    private jobRepository: JobRepository,
    // private providersService: ProvidersService,
  ) {}

  async createBid(jobId: string, providerId: string, createBidDto: CreateJobBidDto) {
    const job = await this.jobRepository.findByIdOrThrow(jobId, 'Job');

    if (job.customerId === providerId) {
      throw new CannotBidOnOwnJobException();
    }

    StatusValidator.requireStatus(job, JobStatus.OPEN, 'Job is not open for bids');

    // const hasProfile = await this.providersService.hasProfile(providerId);
    // if (!hasProfile) {
    //   throw new ProviderProfileRequiredException();
    // }

    const existingBid = await this.bidRepository.findByJobAndProvider(jobId, providerId);
    if (existingBid) {
      throw new BidAlreadyExistsException();
    }

    return this.bidRepository.create({
      jobId,
      providerId,
      bidAmount: createBidDto.bidAmount || null,
      message: createBidDto.message || null,
      estimatedArrivalHours: createBidDto.estimatedArrivalHours || null,
      status: BidStatus.PENDING,
    });
  }

  async getBidsForJob(jobId: string, customerId: string) {
    const job = await this.jobRepository.findByIdOrThrow(jobId, 'Job');

    AuthorizationHelper.ensureOwner(job, customerId, 'customerId', 'Only job owner can view bids');

    return this.bidRepository.findManyByJobWithProvider(jobId);
  }

  async updateBid(bidId: string, providerId: string, updateBidDto: UpdateJobBidDto) {
    const bid = await this.bidRepository.findByIdOrThrow(bidId, 'Bid');

    AuthorizationHelper.ensureOwner(bid, providerId, 'providerId');
    StatusValidator.requireStatus(bid, BidStatus.PENDING, 'Only pending bids can be updated');

    const job = await this.jobRepository.findByIdOrThrow(bid.jobId, 'Job');
    StatusValidator.requireStatus(job, JobStatus.OPEN, 'Job is not open for bid updates');

    return this.bidRepository.update({ id: bidId }, updateBidDto);
  }

  async withdrawBid(bidId: string, providerId: string) {
    const bid = await this.bidRepository.findByIdOrThrow(bidId, 'Bid');

    AuthorizationHelper.ensureOwner(bid, providerId, 'providerId');
    StatusValidator.requireStatus(bid, BidStatus.PENDING, 'Only pending bids can be withdrawn');

    return this.bidRepository.delete({ id: bidId });
  }

  async acceptBid(jobId: string, bidId: string, customerId: string) {
    const job = await this.jobRepository.findByIdOrThrow(jobId, 'Job');
    AuthorizationHelper.ensureOwner(
      job,
      customerId,
      'customerId',
      'Only job owner can accept bids',
    );

    const bid = await this.bidRepository.findByIdOrThrow(bidId, 'Bid');

    if (bid.jobId !== jobId) {
      throw new UnauthorizedActionException('Bid does not belong to this job');
    }

    StatusValidator.requireStatus(bid, BidStatus.PENDING, 'Only pending bids can be accepted');
    StatusValidator.requireStatus(job, JobStatus.OPEN, 'Job is not open for bid acceptance');

    return this.bidRepository.acceptBidWithTransaction(
      bidId,
      jobId,
      bid.providerId,
      customerId,
      job.status,
    );
  }

  async rejectBid(bidId: string, customerId: string) {
    const bid = await this.bidRepository.findByIdWithJob(bidId);

    if (!bid) {
      throw new ResourceNotFoundException('Bid');
    }

    if (bid.job.customerId !== customerId) {
      throw new UnauthorizedActionException('Only job owner can reject bids');
    }

    StatusValidator.requireStatus(bid, BidStatus.PENDING, 'Only pending bids can be rejected');

    return this.bidRepository.update({ id: bidId }, { status: BidStatus.REJECTED });
  }

  async getBid(bidId: string) {
    return this.bidRepository.findByIdOrThrow(bidId, 'Bid');
  }

  async getProviderBids(providerId: string, filters: BidPaginationFilters = {}) {
    const { page, pageSize } = PaginationHelper.normalize(filters);
    const skip = PaginationHelper.calculateSkip(page, pageSize);

    const { bids, total } = await this.bidRepository.getProviderBidsWithPagination(
      providerId,
      skip,
      pageSize,
    );

    return PaginationHelper.buildResponse(bids, total, page, pageSize);
  }
}

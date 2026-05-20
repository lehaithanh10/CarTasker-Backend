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
  InvalidJobStatusException,
} from '@/common/exceptions';
import { BidStatus, JobStatus } from '@/common/enums';

@Injectable()
export class BidsService {
  constructor(
    private bidRepository: BidRepository,
    private jobRepository: JobRepository,
    // private providersService: ProvidersService,
  ) {}

  async createBid(jobId: string, providerId: string, createBidDto: CreateJobBidDto) {
    const job = await this.jobRepository.findUnique({ id: jobId });

    if (!job) {
      throw new ResourceNotFoundException('Job');
    }

    if (job.customerId === providerId) {
      throw new CannotBidOnOwnJobException();
    }

    if (job.status !== JobStatus.OPEN) {
      throw new InvalidJobStatusException('Job is not open for bids');
    }

    console.log('Checking if provider has profile:', providerId);

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
    const job = await this.jobRepository.findUnique({ id: jobId });

    if (!job) {
      throw new ResourceNotFoundException('Job');
    }

    if (job.customerId !== customerId) {
      throw new UnauthorizedActionException('Only job owner can view bids');
    }

    return this.bidRepository.findManyByJobWithProvider(jobId);
  }

  async updateBid(bidId: string, providerId: string, updateBidDto: UpdateJobBidDto) {
    const bid = await this.bidRepository.findUnique({ id: bidId });

    if (!bid) {
      throw new ResourceNotFoundException('Bid');
    }

    if (bid.providerId !== providerId) {
      throw new UnauthorizedActionException();
    }

    if (bid.status !== BidStatus.PENDING) {
      throw new InvalidJobStatusException('Only pending bids can be updated');
    }

    const job = await this.jobRepository.findUnique({ id: bid.jobId });

    if (!job) {
      throw new ResourceNotFoundException('Job');
    }

    if (job.status !== JobStatus.OPEN) {
      throw new InvalidJobStatusException('Job is not open for bid updates');
    }

    return this.bidRepository.update(
      { id: bidId },
      updateBidDto,
    );
  }

  async withdrawBid(bidId: string, providerId: string) {
    const bid = await this.bidRepository.findUnique({ id: bidId });

    if (!bid) {
      throw new ResourceNotFoundException('Bid');
    }

    if (bid.providerId !== providerId) {
      throw new UnauthorizedActionException();
    }

    if (bid.status !== BidStatus.PENDING) {
      throw new InvalidJobStatusException('Only pending bids can be withdrawn');
    }

    return this.bidRepository.delete({ id: bidId });
  }

  async acceptBid(jobId: string, bidId: string, customerId: string) {
    const job = await this.jobRepository.findUnique({ id: jobId });

    if (!job) {
      throw new ResourceNotFoundException('Job');
    }

    if (job.customerId !== customerId) {
      throw new UnauthorizedActionException('Only job owner can accept bids');
    }

    const bid = await this.bidRepository.findUnique({ id: bidId });

    if (!bid) {
      throw new ResourceNotFoundException('Bid');
    }

    if (bid.jobId !== jobId) {
      throw new UnauthorizedActionException('Bid does not belong to this job');
    }

    if (bid.status !== BidStatus.PENDING) {
      throw new InvalidJobStatusException('Only pending bids can be accepted');
    }

    if (job.status !== JobStatus.OPEN) {
      throw new InvalidJobStatusException('Job is not open for bid acceptance');
    }

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

    if (bid.status !== BidStatus.PENDING) {
      throw new InvalidJobStatusException('Only pending bids can be rejected');
    }

    return this.bidRepository.update(
      { id: bidId },
      { status: BidStatus.REJECTED }
    );
  }

  async getBid(bidId: string) {
    const bid = await this.bidRepository.findUnique({ id: bidId });

    if (!bid) {
      throw new ResourceNotFoundException('Bid');
    }

    return bid;
  }

  async getProviderBids(providerId: string, filters: any = {}) {
    const { page = 1, pageSize = 20 } = filters;
    const skip = (page - 1) * pageSize;

    const { bids, total } = await this.bidRepository.getProviderBidsWithPagination(
      providerId,
      skip,
      pageSize,
    );

    return {
      data: bids,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
    };
  }
}

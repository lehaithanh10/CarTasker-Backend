export interface DashboardBidItem {
  id: string;
  jobTitle: string;
  status: string;
  createdAt: Date;
}

interface BidWithJobTitle {
  id: string;
  status: string;
  createdAt: Date;
  job: { title: string };
}

export class BidMapper {
  static toDashboardItem(bid: BidWithJobTitle): DashboardBidItem {
    return {
      id: bid.id,
      jobTitle: bid.job.title,
      status: bid.status,
      createdAt: bid.createdAt,
    };
  }

  static toDashboardItems(bids: BidWithJobTitle[]): DashboardBidItem[] {
    return bids.map(BidMapper.toDashboardItem);
  }
}

export interface ICompanyProfile {
  id: number;
  name: string;
  tagline: string;
  address: string;
  logoUrl: string;
  starRating: number;
  metrics: CompanyMetrics;
  ratings: RatingAnalysis;
  reviews: Review[];
  about: string;
}

interface CompanyMetrics {
  workersSatisfaction: number;
  promptPayment: number;
  workLifeBalance: number;
}

interface RatingAnalysis {
  averageRating: number;
  totalRatings: number;
  ratingBreakdown: RatingBreakdown;
}

interface RatingBreakdown {
  fiveStar: number;
  fourStar: number;
  threeStar: number;
  twoStar: number;
  oneStar: number;
}

interface Review {
  date: string;
  rating: number;
  reviewText: string;
  userName: string;
  up_votes: number;
  down_votes: number;
  user: string;
  companyName: string;
}

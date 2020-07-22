export interface IReview {
  id: number;
  // name: string;
  rating: number;
  // comment: string;

  author: string;
  created_at?: string;

  product_id?: 10;

  status?: 1;
  text: string;
  updated_at?: string;
  user_id?: 1;
}

export interface IManufacturerReviews {
  percent: number;
  count: number;
  reviews: IReview[];
}

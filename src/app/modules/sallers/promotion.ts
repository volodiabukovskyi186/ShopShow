export interface IPromotion {
  id: number;
  name: string;
  src: { src: string; src_mini: string };
  image: { src: string; src_mini: string };
  daysLeft?: number;
  data_start?: string;
  data_end?: string;
  host?: string;
  descriptions
}

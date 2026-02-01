export interface IReview {
  id: number;
  user_name: string;
  city: string;
  comment: string;
  rating: number;
  video_url: string;
  tour: {
    id: number;
    title: string;
  };
}

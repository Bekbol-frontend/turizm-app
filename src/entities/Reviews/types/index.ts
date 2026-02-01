export interface IReview {
  id: number;
  user_name: string;
  rating: number;
  review_text: string;
  video_url: string;
  tour: {
    id: number;
    title: string;
  };
}

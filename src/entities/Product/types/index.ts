export interface IProductQuestion {
  question: string;
  answer: string;
}

export interface IProductFAQ {
  title: string;
  questions: IProductQuestion[];
}

export interface IAccommodations {
  day_number: number;
  type: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface IProduct {
  id: number;
  title: string;
  slogan: string;
  description: string;
  routes: string;
  important_info: string;
  price: number;
  phone: string;
  duration_days: number;
  duration_nights: number;
  min_age: number;
  max_people: number;
  rating: number;
  reviews_count: number;
  category: {
    id: number;
    name: string;
  };
  main_image: string;
  images: {
    id: number;
    url: string;
    is_main: boolean;
  }[];

  itineraries: {
    day_number: number;
    event_time: string;
    activity_title: string;
    activity_description: string;
  }[];
  features: {
    description: string;
    icon: string;
    id: number;
    is_included: boolean;
    name: string;
  }[];
  faq: IProductFAQ[];
  gif_map: string;

  accommodations: IAccommodations[];
}

export interface IAbout {
  id: number;
  image: string;
  title: string;
  description: string;
  images: [
    {
      id: number;
      image_path: string;
      sort_order: number;
    },
    {
      id: number;
      image_path: string;
      sort_order: number;
    },
    {
      id: number;
      image_path: string;
      sort_order: number;
    },
  ];
}

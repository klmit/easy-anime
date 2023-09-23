export type AnimeType<T> = {
  id: T;
  data: {
    title: string;
    originalName: string;
    year: string;
    image: string;
    source: string;
    url: string;
  };
};

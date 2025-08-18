
export type internalAd = {
  id: number;
  title: string;
  description: string;
  image: string;
  subcategory: { name: string };
  category: { name: string };
};


export type externalAd = {
  id: number;
  image: string;
  link: string
};
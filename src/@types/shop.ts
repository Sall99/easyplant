export interface Iimages {
  items: {
    id: number;
    images: string[];
    alt: string;
    title: string;
    description: string;
    colors: string[];
    price: number;
  }[];
}

export interface IAccordion {
  data: {
    title: string;
    Content: React.FC;
  }[];
}

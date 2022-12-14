export interface IPlant {
  id: number;
  images: string[];
  alt: string;
  title: string;
  description: string;
  colors: string[];
  price: number;
  amount?: number;
}
export interface Iimages {
  items: IPlant[];
}

export interface IAccordion {
  data: {
    title: string;
    Content: React.FC;
  }[];
  line?: "top" | "bottom";
}

export interface ICartItems {
  id: number;
  images: string[];
  alt: string;
  title: string;
  description: string;
  colors: string[];
  price: number;
  amount: number;
}

export interface ICart {
  items: ICartItems[];
  displayCart: boolean;
  subTotal: number;
}

export interface ICartProduct {
  item: ICartItems;
}

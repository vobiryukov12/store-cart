export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  count: number;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IStateProducts {
  products: IProduct[];
  loading: boolean;
  amount: number;
  error: string;
}

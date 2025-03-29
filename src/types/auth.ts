export interface IAuthState {
  user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface IProductState {
  products: any[],
  loading: boolean,
  error: string | null
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

export interface ICartState {
  items: CartItem[],
  totalQuantity: number;
}
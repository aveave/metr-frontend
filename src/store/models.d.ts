export interface CatalogItem {
  depth_level: string;
  id: string;
  name: string;
  parent_id?: string;
}

export interface SpecialOfferResponse {
  error: boolean;
  products?: Product[] | null;
}

export interface Product {
  available: string;
  id: string;
  name: string;
  picture: string;
  price: string;
}

export interface CartResponse {
  error: boolean;
  payload: CartPayload;
}

export interface CartPayload {
  products?: (CartItemEntity)[] | null;
  quantity: number;
  sum: number;
}

export interface CartItemEntity {
  name: string;
  price: number;
  productId: string;
  quantity: number;
  picture: string;
}

export interface BookedItem {
    id: string;
    quantity: number;
}

export interface BookItemResponse {
  error: boolean;
  message: string;
  name: string;
  price: number;
  product_id: string;
  quantity: number;
  picture: string;
}
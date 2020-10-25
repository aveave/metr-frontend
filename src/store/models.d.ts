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
  available: number;
  id: string;
  name: string;
  picture: string;
  price: string;
  sectionId?: string;
}

export interface CartResponse {
  error: boolean;
  payload: CartPayload;
}

export interface CartPayload {
  products?: CartItemEntity[] | null;
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

export interface UserInfo {
  email: string;
  token: string;
  name: string;
  surname: string;
  company: string;
  country: string;
  city: string;
  address: string;
  inn: string;
}

export interface UserLoginSubmit {
  email: string;
  password: string;
}

export interface UserRegisterSubmit {
  name: string;
  email: string;
  password: string;
}

export interface OrderInfo {
  name: string;
  surname: string;
  phoneNumber: string;
  mobileNumber: string;
  address: string;
  city: string;
  email: string;
  inn: string;
  deliveryId: string;
  paymentId: string;
  comment: string;
}

export interface OrderEntity {
  date: string;
  id: string;
  pictures: [];
  sum: string;
}

export interface OrderData {
  date: string;
  id: string;
  products: OrderItemEntity[];
  sum: string;
}

export interface OrderItemEntity {
  name: string;
  picture: string;
  price: string;
  quantity: string;
}

export interface GroupedItem {
  id: string;
  name: string;
  available: string;
  picture: string;
  price: string;
  category_id: string;
}

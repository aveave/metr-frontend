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

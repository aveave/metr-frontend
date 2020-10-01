import axios from "axios";
import { SpecialOfferResponse, Product } from "./models";

export const shopApi = axios.create({
  baseURL: 'https://metropt.ru/api/index.php'
  // baseURL: "https://4d362027-7c18-4ab5-a18a-1640896f385f.mock.pstmn.io"
  // baseURL: "https://bca2af26-ab78-4af8-8b98-1807fa9f1eb8.mock.pstmn.io"
});

export async function getCatalogItems() {
  const response = await shopApi.get("?action=getMenu");
  return response.data;
}

export async function getSuggestedProducts(): Promise<Product[]> {
  console.log("inside api call");
  const response = await shopApi.get("?action=getPopularProducts");
  console.log("after api call");
  console.log(response);
  return response.data.products;
}

export async function getProducts(sectionID: number, page: number): Promise<Product[]> {
  return shopApi.get(`?action=getProducts&sectionId=${sectionID}&page=${page}`);
}
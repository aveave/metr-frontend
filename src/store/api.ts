import axios from "axios";
import { SpecialOfferResponse, Product, BookedItem, BookItemResponse } from "./models";

export const shopApi = axios.create({
  baseURL: "http://localhost:8081",});

export async function getCatalogItems() {
  const response = await shopApi.get("/catalogItems")
  return response.data;
}

export async function getSuggestedProducts(): Promise<Product[]> {
  const response = await shopApi.get("?action=getPopularProducts");
  return response.data.products;
}

export async function getProducts(sectionID: number, page: number): Promise<Product[]> {
  return shopApi.get(`?action=getProducts&sectionId=${sectionID}&page=${page}`);
}

export async function getCartResponse() {
  const response = await shopApi.get("/cart");
  return response.data;
}

export async function addItemToCart(bookedItem: BookedItem) : Promise<BookItemResponse | undefined> {
  try {
     const response = await shopApi.post("/cart", {
      bookedItem
     })
     return (response.data as BookItemResponse)
  } catch(e) {
    console.log(e);
  }
}
import axios from "axios";
import {
  Product,
  BookedItem,
  BookItemResponse,
  UserLoginSubmit,
  UserRegisterSubmit,
  UserInfo,
  OrderInfo,
  OrderEntity,
  GroupedItem,
  OrderData
} from "./models";

export const shopApi = axios.create({
  baseURL: "http://localhost:8081"
});

export function setJWT(jwt: string) {
  shopApi.defaults.headers.common["Authorization"] = `Token ${jwt}`;
}

export function clearJWT() {
  delete shopApi.defaults.headers.common["Authorization"];
}

export async function getCatalogItems() {
  const response = await shopApi.get("/catalog");
  return response.data;
}

export async function getSuggestedProducts(): Promise<Product[]> {
  const response = await shopApi.get("/suggestedProducts");
  return response.data.products;
}

export async function getProducts(
  sectionID: number,
  page: number
): Promise<Product[]> {
  return shopApi.get(`?action=getProducts&sectionId=${sectionID}&page=${page}`);
}

export async function getCartResponse() {
  const response = await shopApi.get("/cart");
  return response.data;
}

export async function addItemToCart(
  bookedItem: BookedItem
): Promise<BookItemResponse | undefined> {
  try {
    const response = await shopApi.post("/cart", {
      bookedItem
    });
    return response.data as BookItemResponse;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteFromCart(cartItemId: string) {
  const response = await shopApi.delete("/cart", { data: cartItemId });
  return response;
}

export async function loginUser(user: UserLoginSubmit): Promise<UserInfo> {
  const userResponse = await shopApi.post("users/login", {
    user
  });
  return userResponse.data;
}

export async function registerUser(
  user: UserRegisterSubmit
): Promise<UserInfo> {
  const userResponse = await shopApi.post("users/register", {
    user
  });
  return userResponse.data;
}

export async function updateUser(userToUpdate: UserInfo): Promise<UserInfo> {
  const userResponse = await shopApi.put("users/personal", {
    userToUpdate
  });
  return userResponse.data;
}

export async function addOrder(order: OrderInfo): Promise<number> {
  const orderResponse = await shopApi.post("/orders", {
    order
  });
  return orderResponse.data;
}

export async function getOrders(): Promise<OrderEntity[]> {
  const orderListResponse = await shopApi.get("/orders");
  return orderListResponse.data;
}

export async function getGroupedItems(sectionId: string): Promise<GroupedItem> {
  const groupedItemsResponse = await shopApi.get("/products/" + sectionId);
  return groupedItemsResponse.data;
}

export async function getFavoriteProducts() {
  const favoritesResponse = await shopApi.get("/favorites");
  return favoritesResponse.data;
}

export async function getOrderItems(orderId: string): Promise<OrderData> {
  const orderItemsResponse = await shopApi.get("/orders/" + orderId);
  return orderItemsResponse.data;
}

import axios from "axios";

export const shopApi = axios.create({
  // baseURL: 'https://metropt.ru/api/'
  baseURL: "https://4d362027-7c18-4ab5-a18a-1640896f385f.mock.pstmn.io"
});

export async function getCatalogItems() {
  const response = await shopApi.get("/catalogItems");
  return response.data;
}

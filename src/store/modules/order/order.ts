import {
  VuexModule,
  Module,
  getModule,
  Action,
  Mutation
} from "vuex-module-decorators";
import store from "@/store";
import { addOrder, getOrders, getOrderItems } from "../../api";
import {
  OrderInfo,
  OrderEntity,
  OrderItemEntity,
  OrderData
} from "../../models";

@Module({
  namespaced: true,
  name: "order",
  dynamic: true,
  store
})
class OrderModule extends VuexModule {
  orderInfo: OrderInfo | null = null;
  orderList: OrderEntity[] | null = null;

  orderId = 0;
  orderSum = "";
  orderDate = "";
  orderItems: OrderItemEntity[] = [];

  @Mutation
  setOrder(orderInfo: OrderInfo) {
    this.orderInfo = orderInfo;
  }

  @Action({ commit: "setOrder" })
  async createOrder(order: OrderInfo) {
    const orderResponse = await addOrder(order);
    return orderResponse;
  }

  @Mutation
  setOrders(orderList: OrderEntity[]) {
    this.orderList = orderList;
  }

  @Action({ commit: "setOrders" })
  async uploadOrders() {
    const orderListResponse = await getOrders();
    return orderListResponse;
  }

  @Mutation
  setOrderData(orderData: OrderData) {
    this.orderId = orderData.id;
    this.orderSum = orderData.sum;
    this.orderDate = orderData.date;
    this.orderItems = orderData.products;
  }

  @Action({ commit: "setOrderData" })
  async uploadOrderItems(orderId: string) {
    const orderDataResponse = await getOrderItems(orderId);
    return orderDataResponse;
  }
}

export default getModule(OrderModule);

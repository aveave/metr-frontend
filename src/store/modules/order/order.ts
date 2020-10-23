import {
  VuexModule,
  Module,
  getModule,
  Action,
  Mutation
} from "vuex-module-decorators";
import store from "@/store";
import { addOrder, getOrders } from "../../api";
import { OrderInfo, OrderEntity } from "../../models";

@Module({
  namespaced: true,
  name: "order",
  dynamic: true,
  store
})
class OrderModule extends VuexModule {
  orderInfo: OrderInfo | null = null;

  orderList: OrderEntity[] | null = null;

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
}

export default getModule(OrderModule);

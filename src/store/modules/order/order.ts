import {
  VuexModule,
  Module,
  getModule,
  Action,
  Mutation
} from "vuex-module-decorators";
import store from "@/store";
import { addOrder } from "../../api";
import { OrderInfo } from "../../models";

@Module({
  namespaced: true,
  name: "order",
  dynamic: true,
  store
})
class OrderModule extends VuexModule {
  orderInfo: OrderInfo | null = null;

  @Mutation
  setOrder(orderInfo: OrderInfo) {
    this.orderInfo = orderInfo;
  }

  @Action({ commit: "setOrder" })
  async createOrder(order: OrderInfo) {
    const orderResponse = await addOrder(order);
    return orderResponse;
  }
}

export default getModule(OrderModule);

import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { Product } from "../../models";
import * as api from "../../api";
import store from "@/store";

@Module({
  dynamic: true,
  namespaced: true,
  name: "specialOffer",
  store
})
class SpecialOfferModule extends VuexModule {
  suggestedProducts: Product[] = [];

  @Mutation
  setSuggestedProducts(suggestedProducts: Product[]) {
    this.suggestedProducts = suggestedProducts;
  }

  @Action({ commit: "setSuggestedProducts" })
  async uploadSuggestedProducts() {
    const suggestedProducts = await api.getSuggestedProducts();
    return suggestedProducts;
  }
}

export default getModule(SpecialOfferModule);

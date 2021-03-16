import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { Product } from "../../models";
import { getSuggestedProducts } from "../../api";
import store from "@/store";

@Module({
  namespaced: true,
  name: "specialOffer",
  dynamic: true,
  store
})
class SpecialOfferModule extends VuexModule {
  suggestedProducts: Product[] = [];

  get getSuggestedProducts() {
    return this.suggestedProducts;
  }

  @Mutation
  setSuggestedProducts(suggestedProducts: Product[]) {
    this.suggestedProducts = suggestedProducts;
  }

  @Action({ commit: "setSuggestedProducts" })
  async uploadSuggestedProducts() {
    const suggestedProducts = await getSuggestedProducts();
    return suggestedProducts;
  }
}

export default getModule(SpecialOfferModule);

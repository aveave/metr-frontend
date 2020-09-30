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
    console.log(this.suggestedProducts);
  }

  @Action({ commit: "setSuggestedProducts" })
  async uploadSuggestedProducts() {
    console.log("inside upload");
    const suggestedProducts = await api.getSuggestedProducts();
    console.log("after upload");

    return suggestedProducts;
  }
}

export default getModule(SpecialOfferModule);

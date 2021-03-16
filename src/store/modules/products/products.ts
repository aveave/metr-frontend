import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { Product } from "../../models";
import { getProducts } from "../../api";
import store from "@/store";

@Module({
  namespaced: true,
  name: "products",
  dynamic: true,
  store
})
class ProductsModule extends VuexModule {
  products: Product[] = [];

  @Mutation
  setProducts(products: Product[]) {
    this.products = products;
  }

  @Action({ commit: "setProducts" })
  async uploadProducts(sectionID: number, page: number) {
    const products = await getProducts(sectionID, page);
    return products;
  }
}

export default getModule(ProductsModule);

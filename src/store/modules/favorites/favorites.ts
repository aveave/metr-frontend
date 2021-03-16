import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { getFavoriteProducts } from "../../api";
import { Product } from "../../models";
import store from "@/store";

@Module({
  namespaced: true,
  name: "favorites",
  dynamic: true,
  store
})
class FavoritesModule extends VuexModule {
  favoriteProducts: Product[] = [];

  get getFavoriteProducts() {
    return this.favoriteProducts;
  }

  @Mutation
  setFavoriteProducts(favoriteProducts: Product[]) {
    this.favoriteProducts = favoriteProducts;
  }

  @Action({ commit: "setFavoriteProducts" })
  async uploadFavoriteProducts() {
    const favoritesResponse = await getFavoriteProducts();
    return favoritesResponse;
  }
}

export default getModule(FavoritesModule);

import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { CatalogItem } from "../../models";
import * as api from "../../api";
import store from "@/store";

@Module({
  dynamic: true,
  namespaced: true,
  name: "catalogItems",
  store
})
class CatalogItemsModule extends VuexModule {
  itemsFromCatalog: CatalogItem[] = [];

  @Mutation
  setCatalogItems(itemsFromCatalog: CatalogItem[]) {
    this.itemsFromCatalog = itemsFromCatalog;
  }

  @Action({ commit: "setCatalogItems" })
  async uploadCatalogItems() {
    const itemsFromCatalog = await api.getCatalogItems();
    return itemsFromCatalog;
  }
}

export default getModule(CatalogItemsModule);

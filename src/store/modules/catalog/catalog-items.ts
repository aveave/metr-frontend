import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { CatalogItem, GroupedItem } from "../../models";
import * as api from "../../api";
import store from "@/store";

@Module({
  namespaced: true,
  name: "catalogItems",
  dynamic: true,
  store
})
class CatalogItemsModule extends VuexModule {
  itemsFromCatalog: CatalogItem[] = [];

  groupedItems: GroupedItem[] = [];

  @Mutation
  setCatalogItems(itemsFromCatalog: CatalogItem[]) {
    this.itemsFromCatalog = itemsFromCatalog;
  }

  @Mutation
  setGroupedItems(groupedItems: GroupedItem[]) {
    this.groupedItems = groupedItems;
  }

  @Action({ commit: "setCatalogItems" })
  async uploadCatalogItems() {
    const itemsFromCatalog = await api.getCatalogItems();
    return itemsFromCatalog;
  }

  @Action({ commit: "setGroupedItems" })
  async uploadGroupedItems(sectionId: string) {
    const groupedItemsResponse = await api.getGroupedItems(sectionId);
    return groupedItemsResponse;
  }
}

export default getModule(CatalogItemsModule);

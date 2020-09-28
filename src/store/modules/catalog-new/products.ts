import { Module, VuexModule, getModule, Mutation, Action } from "vuex-module-decorators";
import { Product } from "../../models";
import * as api from "../../api";
import store from '@/store';


@Module({
    dynamic: true,
    namespaced: true,
    name: 'products',
    store
})
class ProductsModule extends VuexModule {
    productsFromCatalog: Product[] = [];

    @Mutation
    setProducts(productsFromCatalog: Product[]) {
        this.productsFromCatalog = productsFromCatalog;
    }

    @Action({commit: 'setProducts'})
    async uploadProducts() {
        const productsFromCatalog = await api.getCatalogItems();
        return productsFromCatalog;
    }
}

export default getModule(ProductsModule)
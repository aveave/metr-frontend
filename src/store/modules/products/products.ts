import {
    Module,
    VuexModule,
    getModule,
    Mutation,
    Action
} from "vuex-module-decorators";
import {Product} from "../../models";
import * as api from "../../api";
import store from "@/store";

@Module({
    dynamic: true,
    namespaced: true,
    name: 'products',
    store
})
class ProductsModule extends VuexModule {

    products: Product[] = [];

    @Mutation
    setProducts(products: Product[]) {
        this.products = products;
    }

    @Action({commit: 'setProducts'})
    async uploadProducts(sectionID: number, page: number) {
        const products = await api.getProducts(sectionID, page);
        return products;
    }
}

export default getModule(ProductsModule);
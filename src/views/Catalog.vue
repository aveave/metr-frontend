<template>
    <b-modal id="modal-catalog" hide-header hide-footer hide-backdrop content-class="shadow modal-catalog-content">
        <b-tabs pills vertical nav-wrapper-class="w-30" active-nav-item-class="active-tab">
            <b-tab active v-for="product in mainProducts" :key="product.id" :title="product.name">
                <b-row>
                    <b-col cols="4" v-for="subProduct in relatedProducts.get(product.id)" :key="subProduct.id">
                        <p style="font-weight: bold;">{{subProduct.name}}</p>
                        <div class="card-text">
                            <p v-for="(subProductThirdLevel, index) in relatedNames(subProduct)" :key="index">
                                {{subProductThirdLevel}}
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </b-tab>
        </b-tabs>
    </b-modal>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    import products from "../store/modules/catalog-new/products";
    import {Product} from "../store/models";

    @Component({
        name: "Catalog",
    })
    export default class Catalog extends Vue {

        productCatalog: Product[] = [];
        mainProducts: Product[] = [];

        relatedProducts = new Map();
        relatedSubProducts = new Map();

        created() {
            products.uploadProducts().then(() => {

                this.productCatalog = products.productsFromCatalog
                this.mainProducts = this.productCatalog.filter(p => p.parent_id == null)

                this.mainProducts.forEach(
                    mainProduct => {
                        const subProducts: Product[] = this.productCatalog.filter(subProduct => mainProduct.id == subProduct.parent_id);
                        this.relatedProducts.set(mainProduct.id, subProducts);

                        subProducts.forEach(
                            subProduct => {
                                const subProductsThirdLevel: Product[] = this.productCatalog.filter(subProductThirdLevel => subProduct.id == subProductThirdLevel.parent_id);
                                this.relatedSubProducts.set(subProduct.id, subProductsThirdLevel);
                            }
                        )
                    }
                )
            })
        }

        relatedNames(subProduct: Product): string[] {
            return this.relatedSubProducts.get(subProduct.id).map((product: Product) => product.name);
        }
    }
</script>

<style>
    .modal-catalog-content {
        width: 1000px;
        margin-top: 70px;
    }

    .modal-catalog-content a:hover {
        color: #EF9A41;
    }

    .active-tab {
        color: #EF9A41 !important;
        background-color: white !important;
    }

    .card-text {
        line-height: 1;
    }
</style>
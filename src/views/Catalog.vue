<template>
    <b-modal id="modal-catalog" lazy hide-header hide-footer hide-backdrop content-class="shadow">

        <b-tabs pills card vertical>

            <b-tab active v-for="product in mainProducts" :key="product.id" :title="product.name">
                <!-- <b-card-text v-for="">
                    {{relatedProducts.get(product.id)}}
                </b-card-text> -->
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

        created() {
            products.uploadProducts().then(() => {

                this.productCatalog = products.productsFromCatalog
                this.mainProducts = this.productCatalog.filter(p => p.parent_id == null)

                this.mainProducts.forEach(
                    mainProduct => {
                        const subProducts: Product[] = this.productCatalog.filter(subProduct => mainProduct.id == subProduct.parent_id);
                        this.relatedProducts.set(mainProduct.id, subProducts);
                    }
                )
            })
        }

        // relatedProducts(parentId: string): Product[] {

        //     let relatedProducts = new Map();
        //     this.mainProducts.forEach(
        //         mainProduct => {
        //             let subProducts: Product[] = this.productCatalog.filter(subProduct => mainProduct.id == subProduct.parent_id);
        //             relatedProducts.set(mainProduct.id, subProducts);
        //         }
        //     )
        // }
    }
</script>

<style>

</style>
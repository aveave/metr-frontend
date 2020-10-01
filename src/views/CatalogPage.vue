<template>
  <b-container>
    <b-row>
      <b-col>
        <b-breadcrumb :items="breadcrumbsItems"></b-breadcrumb>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h1>{{ categoryName }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-container>
          <b-row>
            <b-col cols="2">
              <ul class="category-list">
                <li v-for="category in subcategories" :key="category.id">
                  <router-link v-bind:to="category.id">
                    {{ category.name }}
                  </router-link>
                </li>
              </ul>
            </b-col>
            <b-col cols="10">
              <b-container>
                <b-row>
                  <b-col cols="2" v-for="product in products" v-bind:key="product.id">
                    <Card :product=product />
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

import Card from "../components/Card.vue";
import products from "../store/modules/products/products";

@Component({
  components: {
    Card
  }
})

export default class CatalogPage extends Vue {

  breadcrumbsItems = [
    {
      text: "Каталог",
      href: "/catalog"
    }
  ]

  created() {
    const sectionID = this.$route.params.sectionID;
    products.uploadProducts(613, 1)
  }

  get categoryName() {
      const category = this.$store.state.catalogItems.itemsFromCatalog.filter(
        (category: any) => category.id == "612"
      );
      if (category.length > 0) {
        return category[0]["name"];
      }
      return "";
  }

  get subcategories() {
   return this.$store.state.catalogItems.itemsFromCatalog.filter(
        (category: any) => category.parent_id == "612"
      );
  }

  get products() {
    return this.$store.state.products.products.data;
  }

}
</script>

<style lang="css" scoped>
.category-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>

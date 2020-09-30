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
                  <b-col cols="2">
                    <Card />
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
import Vue from "vue";
import Card from "../components/Card.vue";

export default Vue.extend({
  name: "CatalogPage",
  components: {
    Card
  },

  computed: {
    categoryName: function() {
      const category = this.$store.state.products.productsFromCatalog.filter(
        (category: any) => category.id == "612"
      );
      if (category.length > 0) {
        return category[0]["name"];
      }
      return "";
    },

    subcategories: function() {
      return this.$store.state.products.productsFromCatalog.filter(
        (category: any) => category.parent_id == "612"
      );
    }
  },

  data() {
    return {
      sectionID: this.$route.params.sectionID,

      breadcrumbsItems: [
        {
          text: "Каталог",
          href: "/catalog"
        }
      ]
    };
  }
});
</script>

<style lang="css" scoped>
.category-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>

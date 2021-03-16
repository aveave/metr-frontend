<template>
  <b-container class="width-limiter height-limiter favorites" fluid>
    <b-row>
      <Card
        v-for="product in favoriteProducts"
        :product="product"
        :key="product.id"
      />
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import favorites from "@/store/modules/favorites/favorites";
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    Card
  },
  computed: {
    ...mapGetters('favorites', {favoriteProducts: 'getFavoriteProducts'})
  }
})
export default class Favorites extends Vue {

  created() {
    favorites.uploadFavoriteProducts();
  }
}
</script>

<style>
.favorites {
  padding: 40px;
}
</style>

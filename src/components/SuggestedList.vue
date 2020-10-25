<template>
  <b-container fluid class="suggestion">
    <b-row>
      <b-col cols="auto" class="mr-auto">
        <h2>
          {{ header }}
        </h2>
      </b-col>
      <b-col cols="auto">
        <button class="suggestion-btn" @click="prevPage">&lt;</button>
        <button class="suggestion-btn" @click="nextPage">&gt;</button>
      </b-col>
    </b-row>
    <b-row>
      <Card
        v-for="(product, index) in paginatedProducts"
        :key="index"
        :product="product"
      />
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Card from "./Card.vue";
import { Product } from "@/store/models";

@Component({
  components: {
    Card
  }
})
export default class SuggestedList extends Vue {
  quantity = 1;
  pageNumber = 1;

  displayAmount = 6;

  @Prop(String) header: string | undefined;
  @Prop() suggestedList?: Product[];

  get pageCount() {
    return Math.ceil(this.suggestedList.length / this.displayAmount);
  }

  get paginatedProducts() {
    const start = (this.pageNumber - 1) * this.displayAmount,
      end = start + this.displayAmount;
    return this.suggestedList.slice(start, end);
  }

  prevPage() {
    if (this.pageNumber != 1) {
      this.pageNumber--;
    }
  }

  nextPage() {
    if (this.pageNumber != this.pageCount) {
      this.pageNumber++;
    }
  }
}
</script>

<style scoped>
.suggestion {
  background-color: #ffffff;
  margin: 20px 0px;
}

.suggestion-btn {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 30px;
  font-weight: bold;
}
</style>

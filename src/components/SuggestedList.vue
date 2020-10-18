<template>
  <b-container fluid class="suggestion">
    <b-row>
      <h2>
        {{ header }}
      </h2>
      <b-row align-h="center">
        <Card
          v-for="(product, index) in suggestedList"
          :key="index"
          :product="product"
        />
      </b-row>
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

  @Prop(String) header: string | undefined;
  @Prop() suggestedList?: Product[];
}
</script>

<style>
.suggestion {
  margin: 10px 20px;
}
</style>

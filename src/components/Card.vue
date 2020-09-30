<template>
  <b-container fluid class="card">
    <b-row>
      <b-col>
        <b-row align-h="end">
          <img src="../assets/card/heart-card.svg" />
        </b-row>

        <b-row align-h="center">
          <!-- <img :src="product.picture" style="width: 160px;" /> -->
          <img src="../assets/header/image.png" />
        </b-row>

        <b-row>
          <b-col>
            <h4 class="card-title">Бумага SVETOCOPY</h4>

            <h6 class="card-subtitle mb-2 text-muted">Наличие: 582</h6>

            <h5 class="price metr-text mt-4">$125</h5>
            <!-- <h5 class="card-title">{{ product.name }}</h5>

            <h6 class="card-subtitle mb-2 text-muted">
              {{ product.available }}
            </h6>

            <h5 class="price metr-text mt-4">{{ product.price }}</h5> -->
          </b-col>
        </b-row>

        <b-row align-v="center">
          <b-col>
            <button class="card-basket-btn">В корзину</button>
          </b-col>
          <b-col offset-md="1">
            <select class="card-count-btn">
              <option selected>1</option>
              <option value="1">Green</option>
              <option value="2">Blue</option>
              <option value="3">Red</option>
            </select>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { Product } from "../store/models";

@Component
export default class Card extends Vue {
  @Prop() readonly product: null | undefined;

  created() {
    console.log(this.product);
  }
}
</script>

<style>
.card {
  width: 318px;
  height: 370px;
  /* height: 400px;
  margin-bottom: 10px; */
}

.card img {
  margin: 10px;
}

.card-basket-btn {
  width: 110px;
  height: 30px;
}

.card-count-btn {
  width: 85px;
  height: 30px;
}

.btn-color {
  background-color: #ef9a41;
  border-radius: 5px;
  color: white;
  border-color: #ef9a41;
}

.card text {
  color: #ef9a41;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
}
</style>

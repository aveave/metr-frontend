<template>
  <b-container fluid class="card">
        <b-row align-h="end">
          <img src="../assets/card/heart-card.svg" />
        </b-row>

        <b-row align-h="center">
          <!-- <img :src="product.picture" style="width: 160px;" /> -->
          <img src="../assets/header/image.svg" />
        </b-row>

        <b-row h-50>
          <b-col>
            <!-- <h4 class="card-title">Бумага SVETOCOPY</h4>

            <h6 class="card-subtitle mb-2 text-muted">Наличие: 582</h6>

            <h5 class="price metr-text mt-4">$125</h5> -->
            <h5 class="card-title" style="height: 40px; font-size: 14px;">{{ product.name }}</h5>

            <h6 class="card-subtitle mb-2 text-muted">
              Наличие: {{ product.available }}
            </h6>

            <h5 class="price metr-text mt-4">{{ product.price }}</h5>
          </b-col>
        </b-row>

        <b-row align-v="center" no-gutters>
          <b-col>
            <button class="card-basket-btn" @click="addToCart">В корзину</button>
          </b-col>
          <b-col>
            <select v-model="quantity" class="card-count-btn">
              <option v-for="n in product.available" :key="n" :value="n">{{ n }}</option>
            </select>
          </b-col>
        </b-row>
  </b-container>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "vue-property-decorator";

  import { Product } from "../store/models";

  import { BookItemResponse } from "@/store/models";
  import cart from "@/store/modules/cart/cart";


  @Component
  export default class Card extends Vue {

    quantity = 1;

    @Prop() product?: Product;

    addToCart() {
      cart.saveItemInBusket({
        id: this.product.id,
        quantity: this.quantity
      })
    }
  }
</script>

<style>
  .card {
    width: 205px;
    height: 338px;
    margin: 10px;
  }

  .card img {
    margin: 10px;
  }

  .card-basket-btn {
    width: 104px;
    height: 30px;
    font-weight: normal;
    font-size: 14px;
    margin-right: 5px;
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

  .card-count-btn {
    width: 62px;
    height: 30px;
    color: #ef9a41;
    background-color: #ffffff;
    border: 1.5px solid #dedede;
    border-radius: 6px;
    box-sizing: border-box;
    border-radius: 5px;
  }

  .price {
    color: #ef9a41;
  }
</style>
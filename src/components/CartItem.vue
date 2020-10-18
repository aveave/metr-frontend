<template>
  <b-container fluid class="cart-item">
    <hr />
    <b-row>
      <b-col cols="2">
        <b-row align-v="center">
          <input
            id="cart-select-checkbox"
            type="checkbox"
            :checked="value"
            @change="toggle"
          />
          <img :src="cartItem.picture" alt="product" style="width: 60px;" />
        </b-row>
      </b-col>
      <b-col cols="6" align-v="center" align-h="center" align-content="center">
        <b-row>
          <b-col>
            <p>{{ cartItem.name }}</p>

            <p>Код: {{ cartItem.productId }}</p>

            <p class="cart-price">
              {{ cartItem.price }} <img src="../assets/cart/currency.svg" />
            </p>
          </b-col>
        </b-row>

        <b-row align-v="center">
          <b-col>
            <b-link href="#">В избранное</b-link>
          </b-col>
          <b-col offset-md="1">
            <b-link href="#" @click="deleteItemFromCart">Удалить</b-link>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <select class="cart-count-btn" v-model="selected">
          <option v-for="n in cartItem.quantity" :key="n" :value="n">{{
            n
          }}</option>
        </select>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { CartItemEntity } from "@/store/models";

import cart from "@/store/modules/cart/cart";

@Component
export default class CartItem extends Vue {
  cartSelect = false;

  data() {
    return {
      selected: this.cartItem.quantity
    };
  }

  @Prop() cartItem?: CartItemEntity;
  @Prop(Boolean) value: boolean | undefined;

  deleteItemFromCart() {
    cart.deleteCartItem(this.cartItem);
  }

  toggle() {
    this.$emit("input", !this.value);
  }
}
</script>

<style>
.cart-item a {
  color: #ef9a41;
}

.cart-price {
  font-weight: 700;
  font-size: 16px;
}
</style>

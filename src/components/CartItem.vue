<template>
  <b-row class="cart-item" align-v="center">
    <b-col cols="2">
      <b-row align-v="center">
        <b-col>
          <input
            id="cart-select-checkbox"
            type="checkbox"
            :checked="value"
            @change="toggle"
          />
        </b-col>
        <b-col>
          <img :src="cartItem.picture" alt="product" style="width: 60px;" />
        </b-col>
      </b-row>
    </b-col>

    <b-col>
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
        <b-col cols="6">
          <b-row align-h="around">
            <b-link href="#">В избранное</b-link>
            <b-link href="#" @click="deleteItemFromCart">Удалить</b-link>
          </b-row>
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
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { CartItemEntity } from "@/store/models";

import cart from "@/store/modules/cart/cart";

@Component
export default class CartItem extends Vue {
  cartSelect = false;

  get selected() {
    return this.cartItem.quantity;
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
.cart-item {
  border-bottom: 2px solid #dedede;
  padding: 15px 0px;
}

.cart-item a {
  color: #ef9a41;
}

.cart-price {
  font-weight: 700;
  font-size: 16px;
}

.cart-count-btn {
  width: 80px;
  height: 33px;
  background: #ffffff;
  border: 1.5px solid #dedede;
  box-sizing: border-box;
  border-radius: 5px;
}
</style>

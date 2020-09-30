<template>
  <b-container fluid class="cart-item">
    <hr />
    <b-row>
      <b-col cols="2">
        <b-row align-v="center">
          <b-form-checkbox
            id="cart-select-checkbox"
            v-model="cartSelect"
            name="cart-select"
            value="accepted"
            unchecked-value="not_accepted"
          >
          </b-form-checkbox>
          <img src="../assets/cart/product.png" alt="product" />
        </b-row>
      </b-col>
      <b-col cols="6" align-v="center" align-h="center" align-content="center">
        <!-- <p>Стержень гелевый deVENTE 130мм 0,5мм чёрный</p>
            <p>Код: 212358</p>
            <p>Код: 212358</p>
            <b-row>
                <b-link href="#">В избранное</b-link>
                <b-link href="#">Удалить</b-link>
            </b-row> -->
        <b-row>
          <b-col>
            <p>Стержень гелевый deVENTE 130мм 0,5мм чёрный</p>

            <p>Код: 212358</p>

            <p class="cart-price">
              125 <img src="../assets/cart/currency.svg" />
            </p>
          </b-col>
        </b-row>

        <b-row align-v="center">
          <b-col>
            <!-- <button class="card-basket-btn">В корзину</button> -->
            <b-link href="#">В избранное</b-link>
          </b-col>
          <b-col offset-md="1">
            <b-link href="#">Удалить</b-link>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <select class="cart-count-btn">
          <option selected>1</option>
          <option value="1">Green</option>
          <option value="2">Blue</option>
          <option value="3">Red</option>
        </select>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CartItem extends Vue {
  cartSelect = false;
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

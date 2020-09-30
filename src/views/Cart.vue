<template>
  <div class="width-limiter">
    <b-container class="cart" fluid>
      <h2>Корзина</h2>
      <b-row align-v="baseline">
        <b-col cols="8" class="cart-list cart-content">
          <b-row class="cart-header" align-v="center">
            <b-col>
              <b-form-checkbox
                id="cart-checkbox"
                v-model="cartHighlight"
                name="cart-highlight"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Выделить все
              </b-form-checkbox>
            </b-col>
            <b-col offset-sm="1">
              <b-link href="#">Удалить выбранное</b-link>
            </b-col>
          </b-row>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <hr />
        </b-col>

        <b-col cols="3" class="cart-content cart-result" align-self="baseline">
          <b-row>
            <button сlass="cart-order-btn">Оформить заказ</button>
          </b-row>
          <hr />
          <b-row>
            <b-col>
              <p>Ваша коризна</p>
              <p>Общая стоимость</p>
            </b-col>
            <b-col>
              <p>{{ quantity }} товаров</p>
              <p>{{ sum }} <img src="../assets/cart/currency.svg" /></p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <h2>
        Рекомендуем
      </h2>
      <b-row>
        <Card
          v-for="product in suggestedList"
          :key="product.id"
          :product="product"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CartItem from "@/components/CartItem.vue";
import Card from "@/components/Card.vue";

import { Product } from "@/store/models";
import specialOffer from "@/store/modules/offer/special-offer";

@Component({
  components: {
    CartItem,
    Card
  }
})
export default class Cart extends Vue {
  quantity = 0;
  sum = 0;

  cartHighlight = false;

  suggestedList: Product[] = [];

  created() {
    console.log("start call");
    specialOffer.uploadSuggestedProducts().then(() => {
      this.suggestedList = specialOffer.suggestedProducts;
      console.log(this.suggestedList);
    });
  }
}
</script>

<style>
.cart {
  background-color: #f3f3f3;
}

.cart-list {
  margin: 20px;
}

.cart-header a {
  color: #eb5757;
}

.cart-content {
  background-color: #ffffff;
}

.cart-result {
  font-weight: 700;
  font-size: 16px;
}

.cart-order-btn {
  width: 80%;
}

.cart-count-btn {
  float: right;
  color: black;
  background: #ffffff;
  border: 1.5px solid #dedede;
  box-sizing: border-box;
  border-radius: 5px;
}
</style>

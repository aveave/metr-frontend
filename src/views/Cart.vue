<template>
  <div class="width-limiter">
    <b-container fluid class="cart-view">
      <h2>Корзина</h2>
      <b-row class="cart" align-v="baseline">
        <b-col cols="8" class="cart-list cart-content">
          <b-row class="cart-header" align-v="center">
            <b-col>
              <input type="checkbox" @click="selectAll" v-model="allSelected">
            </b-col>
            <b-col offset-sm="1">
              <b-link href="#">Удалить выбранное</b-link>
            </b-col>
          </b-row>
          <CartItem v-for="(cartItem, index) in cartItems" :key="index" :cartItem="cartItem" />
          <hr />
        </b-col>

        <b-col cols="3" class="cart-content cart-result" align-self="baseline">
          <b-row class="cart-order">
            <button>Оформить заказ</button>
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
      <SuggestedList :header="'Рекомендуем'" :suggestedList="suggestedList"/>
      <!-- <b-row class="suggestion">
        <h2>
          Рекомендуем
        </h2>
        <b-row align-h="center">
          <Card v-for="product in suggestedList" :key="product.id" :product="product" />
        </b-row>
      </b-row> -->
    </b-container>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import CartItem from "@/components/CartItem.vue";
  import Card from "@/components/Card.vue";
  import SuggestedList from "@/components/SuggestedList.vue";

  import {Product} from "@/store/models";
  import specialOffer from "@/store/modules/offer/special-offer";

  import cart from "@/store/modules/cart/cart";
  import {CartItemEntity, CartPayload} from "@/store/models";

  @Component({
    components: {
      CartItem,
      Card,
      SuggestedList
    }
  })
  export default class Cart extends Vue {

    get allSelected() {
      return this.$store.state.cart.allSelected;
    }

    get suggestedList() {
      return this.$store.state.specialOffer.suggestedProducts;
    }

    get cartItems() {
      return this.$store.state.cart.cartProducts;
    }

    get quantity() {
      return this.$store.state.cart.quantity;
    }

    get sum() {
      return this.$store.state.cart.sum;
    }

    created() {
      cart.uploadCartItems()
      specialOffer.uploadSuggestedProducts()
    }

    selectAll() {
      cart.selectAll();
    }
  }
</script>

<style>
  .cart-view {
    background-color: white;
  }

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

  .cart-order btn {
    width: 150px;
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
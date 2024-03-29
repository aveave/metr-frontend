<template>
  <b-container class="width-limiter height-limiter cart-view" fluid>
    <div v-if="cartItems.length > 0">
      <h2>Корзина</h2>
      <b-row class="cart" align-h="around">
        <b-col cols="8" class="cart-content">
          <b-row class="cart-header" align-content="center">
            <b-col cols="2">
              <input
                id="selectAllItems"
                type="checkbox"
                @change="selectAll"
                :checked="allSelected"
              />

              <label for="selectAllItems">Выделить всё</label>
            </b-col>
            <b-col>
              <a href="#" @click="deleteSelected">Удалить выбранное</a>
            </b-col>
          </b-row>
          <CartItem
            v-for="(cartItem, index) in cartItems"
            :key="index"
            :value="cartItemIds[index]"
            @input="toggleOne(index)"
            :cartItem="cartItem"
          />
        </b-col>

        <b-col cols="3" class="cart-content" align-self="baseline">
          <button class="proceed-order" @click="checkout">
            Перейти к оформлению
          </button>
          <ProceedOrder />
        </b-col>
      </b-row>
    </div>
    <EmptyCart v-if="cartItems.length == 0" />
    <SuggestedList header="Рекомендуем" :suggestedList="suggestedList" />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CartItem from "@/components/CartItem.vue";
import Card from "@/components/Card.vue";
import SuggestedList from "@/components/SuggestedList.vue";
import ProceedOrder from "@/components/ProceedOrder.vue";
import EmptyCart from "@/components/EmptyCart.vue";

import specialOffer from "@/store/modules/offer/special-offer";
import cart from "@/store/modules/cart/cart";
import { mapGetters } from 'vuex';

@Component({
  components: {
    CartItem,
    Card,
    SuggestedList,
    ProceedOrder,
    EmptyCart
  },
  computed: {
    ...mapGetters('cart', {cartItems: 'getProducts'}), 
    ...mapGetters('cart', {quantity: 'getQuantity'}),
    ...mapGetters('cart', {sum: 'getSum'}),
    ...mapGetters('cart', {cartItemIds: 'getCartItemIds'}),
    ...mapGetters('specialOffer', {suggestedList: 'getSuggestedProducts'})              
  }
})
export default class Cart extends Vue {
  
  get allSelected() {
    return cart.allSelected;
  }

  created() {
    cart.uploadCartItems();
    specialOffer.uploadSuggestedProducts();
  }

  selectAll() {
    cart.selectAll();
  }

  toggleOne(index: number) {
    cart.toggleOneItem(index);
  }

  deleteSelected() {
    cart.deleteSelectedItems();
  }

  checkout() {
    this.$router.push({ name: "checkout" });
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

.cart-header {
  border-bottom: 2px solid #dedede;
  padding: 10px 0px;
}

.cart-header a {
  color: #eb5757;
}

.cart-content {
  background-color: #ffffff;
  margin: 20px 0;
}

.cart-result {
  font-weight: 700;
  font-size: 16px;
}

.cart-count-btn {
  float: right;
  color: black;
  background: #ffffff;
  border: 1.5px solid #dedede;
  box-sizing: border-box;
  border-radius: 5px;
}

.proceed-order {
  margin-top: 10px;
  width: 100%;
}

#selectAllItems {
  margin-right: 5px;
}
</style>

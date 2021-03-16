<template>
  <b-container fluid class="proceed-order-form">
    <hr />
    <b-row>
      <b-col>
        <p>Ваша корзина</p>
        <p>Общая стоимость</p>
      </b-col>
      <b-col>
        <p>{{ quantity }} товаров</p>
        <p>{{ sum }} <img src="../assets/cart/currency.svg" /></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters('cart', { sum: 'getSum', quantity: 'getQuantity'})
  }
})
export default class ProceedOrder extends Vue {

  // sum = 0;
  // quantity = '';
  // get quantity() {
  //   return this.productsSum;
  // }

  // get sum() {
  //   return this.productsQuantity;
  // }
}
</script>

<style>
.proceed-order-form {
  background-color: #ffffff;
}
</style>

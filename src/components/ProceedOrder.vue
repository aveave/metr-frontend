<template>
  <b-container fluid class="proceed-order-form">
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
  </b-container>
</template>

<script lang="ts">
import { Component, Vue} from "vue-property-decorator";

@Component
export default class ProceedOrder extends Vue {
  get quantity() {
    return this.$store.state.cart.quantity;
  }

  get sum() {
    return this.$store.state.cart.sum;
  }
}
</script>

<style>
.proceed-order-form {
  background-color: #ffffff;
}
</style>

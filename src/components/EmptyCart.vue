<template>
  <b-container fluid class="empty-cart">
    <b-row>
      <h2>Корзина пуста</h2>
      <h4>Воспользуйтесь поиском, чтобы найти всё что нужно</h4>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class EmptyCart extends Vue {}
</script>

<style>
.empty-cart {
  background-color: #f3f3f3;
}
</style>

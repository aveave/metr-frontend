<template>
  <b-container fluid class="order">
    <b-row class="order-row">
      <b-col cols="2" align-self="center">
        <div class="order-bold">Заказ от {{ order.date }}</div>
        <div class="order-id">{{ order.id }}</div>
        <div class="order-bold">{{ order.sum }}</div>
      </b-col>
      <b-col cols="10">
        <b-row align-h="end">
          <div v-for="(picture, index) in order.pictures" :key="index">
            <img :src="picture" style="width: 111px;" />
          </div>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { OrderEntity } from "@/store/models";

@Component
export default class Order extends Vue {
  @Prop() order?: OrderEntity;
}
</script>

<style>
.order {
  border: 2px solid #dedede;
}

.order-row {
  margin: 10px 0px;
}

.order-bold {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
}

.order-id {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #ef9a41;
}
</style>

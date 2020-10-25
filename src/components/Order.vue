<template>
  <b-container fluid class="order" @click="displayOrder">
    <b-row class="order-row">
      <b-col cols="2" class="order-info" align-self="center">
        <div class="order-bold">
          Заказ от {{ order.date }}
        </div>
        <div class="order-id">{{ order.id }}</div>
        <div class="order-bold">{{ order.sum }}</div>
      </b-col>
      <b-col cols="10">
        <b-row align-h="end">
          <div v-for="(picture, index) in pictures" :key="index">
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

  get pictures() {
    if (this.order.pictures?.length > 9) {
      return this.order.pictures.slice(0, 9);
    } else {
      return this.order.pictures;
    }
  }

  displayOrder() {
    this.$router.push({ name: "order", params: { orderId: this.order.id } });
  }
}
</script>

<style scoped>
.order {
  border: 2px solid #dedede;
  background-color: #ffffff;
}

.order-row {
  margin: 10px 0px;
}

.order-bold {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
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

.order-info div {
  margin: 4px 0;
}
</style>

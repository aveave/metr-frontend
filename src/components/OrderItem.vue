<template>
  <b-row class="order-item-content">
    <b-col align-self="center">
      <p style="font-weight: bold;">Товар {{ orderIndex }}</p>
      <img :src="orderItem.picture" style="width: 80px;" />
    </b-col>
    <b-col align-self="center">
      <p>{{ orderItem.name }}</p>
    </b-col>
    <b-col align-self="center">
      <p>{{ orderItem.quantity }} шт.</p>
    </b-col>
    <b-col align-self="center">
      <p>{{ orderItem.price }}</p>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { OrderItemEntity } from "@/store/models";

@Component
export default class OrderItem extends Vue {
  @Prop() orderItem?: OrderItemEntity;
  @Prop(Number) orderIndex: number | undefined;
}
</script>

<style>
.order-item {
  border-bottom: 2px solid #dedede;
  border-top: 2px solid #dedede;
}

.order-item-content {
  padding: 10px;
  border-bottom: 2px solid #dedede;
  border-top: 2px solid #dedede;
}
</style>

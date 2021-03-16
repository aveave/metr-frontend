<template>
  <b-container class="width-limiter height-limiter" fluid>
    <b-row class="order">
      <b-col cols="12">
        <h2>Заказ от {{ orderDate }}</h2>
        <h4>Заказ № {{ orderId }}</h4>
      </b-col>
    </b-row>
    <b-row class="order" align-h="around">
      <b-col cols="8" class="order-content">
        <OrderItem
          v-for="(orderItem, index) in orderItems"
          :key="index"
          :orderItem="orderItem"
          :orderIndex="++index"
        />
      </b-col>

      <b-col cols="3" class="order-content" align-self="baseline">
        <b-row class="order-row">
          <b-col>
            <h4>Получатель</h4>
            <p>Наталья Александровна</p>
          </b-col>
        </b-row>
        <b-row class="order-row">
          <b-col>
            <h4>Общая стоимость {{ orderSum }}</h4>
            <a href="">Скачать документы</a>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <SuggestedList header="Рекомендуем" :suggestedList="suggestedProducts" />
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import OrderItem from "@/components/OrderItem.vue";
import SuggestedList from "@/components/SuggestedList.vue";
import order from "@/store/modules/order/order";
import { mapGetters } from "vuex";

@Component({
  components: {
    OrderItem,
    SuggestedList
  },
  computed: {
    ...mapGetters('order', {orderItems: 'getOrderItems'}),
    ...mapGetters('order', {orderSum: 'getOrderSum'}),
    ...mapGetters('order', {orderDate: 'getOrderDate'}),
    ...mapGetters('order', {orderId: 'getOrderId'}),
    ...mapGetters('specialOffer', {suggestedProducts: 'getSuggestedProducts'}),
  }
})
export default class OrderItems extends Vue {

  async created() {
    await order.uploadOrderItems(this.$route.params.orderId);
  }
}
</script>

<style>
.order {
  background-color: #f3f3f3;
}

.order a {
  color: #ef9a41;
}

.order-content {
  background-color: #ffffff;
  margin: 20px 0;
}

.order-row {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

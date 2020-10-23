<template>
  <div class="width-limiter height-limiter order-list">
    <b-container class="order-list-form" fluid>
      <h1 class="order-header">Заказы</h1>
      <b-row class="order-form">
        <Order v-for="order in paginatedList" :key="order.id" :order="order" />
      </b-row>
      <b-pagination
        v-model="pageNumber"
        :total-rows="pageCount"
        :per-page="perPage"
        align="right"
      ></b-pagination>
      <SuggestedList header="Рекомендуем" :suggestedList="suggestedList" />
    </b-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import specialOffer from "@/store/modules/offer/special-offer";
import Order from "@/components/Order.vue";
import SuggestedList from "@/components/SuggestedList.vue";
import order from "@/store/modules/order/order";

@Component({
  components: {
    Order,
    SuggestedList
  }
})
export default class OrderList extends Vue {
  pageNumber = 1;
  displayedAmount = 3;
  perPage = 1;

  get pageCount() {
    const l = this.orderList.length,
      s = this.displayedAmount;
    return Math.ceil(l / s);
  }

  get paginatedList() {
    const start = (this.pageNumber - 1) * this.displayedAmount,
      end = start + this.displayedAmount;
    return this.orderList.slice(start, end);
  }

  suggestedList() {
    this.$store.state.specialOffer.suggestedProducts;
  }

  get orderList() {
    return this.$store.state.order.orderList;
  }

  async created() {
    specialOffer.uploadSuggestedProducts();
    await order.uploadOrders();
  }
}
</script>

<style>
.order-list {
  background-color: #f3f3f3;
}

.order-list-form {
  padding: 53px;
}

.order-header {
  margin-bottom: 20px;
}

.order-form {
  background-color: #ffffff;
  margin: auto;
}
</style>

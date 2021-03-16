<template>
  <b-container class="width-limiter height-limiter" fluid>
    <b-row class="order-list-form">
      <b-col>
        <b-row>
          <h1 class="order-header">Заказы</h1>
        </b-row>
        <b-row class="order-form">
          <Order
            v-for="order in paginatedList"
            :key="order.id"
            :order="order"
          />
        </b-row>
        <b-row align-h="end">
          <b-pagination
            class="list-pagination"
            v-if="pageCount > 1"
            v-model="pageNumber"
            :total-rows="pageCount"
            :per-page="perPage"
            hide-goto-end-buttons
            hide-ellipsis
            limit="3"
          ></b-pagination>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <SuggestedList header="Рекомендуем" :suggestedList="suggestedProducts" />
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import specialOffer from "@/store/modules/offer/special-offer";
import Order from "@/components/Order.vue";
import SuggestedList from "@/components/SuggestedList.vue";
import order from "@/store/modules/order/order";
import { mapGetters } from "vuex";

@Component({
  components: {
    Order,
    SuggestedList
  },
  computed: {
    ...mapGetters('order', {orderList: 'getOrderList'}),
    ...mapGetters('specialOffer', {suggestedProducts: 'getSuggestedProducts'})
  }
})
export default class Orders extends Vue {
  pageNumber = 1;
  displayedAmount = 3;
  perPage = 1;

  get pageCount() {
    const l = this.orderList?.length,
      s = this.displayedAmount;
    return Math.ceil(l / s);
  }

  get paginatedList() {
    const start = (this.pageNumber - 1) * this.displayedAmount,
      end = start + this.displayedAmount;
    return this.orderList?.slice(start, end);
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
  background-color: #f3f3f3;
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

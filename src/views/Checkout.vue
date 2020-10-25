<template>
  <b-container class="width-limiter height-limiter checkout-form" fluid>
    <h2>Оформление заказа</h2>
    <b-row align-h="around">
      <b-col cols="8" align-h="around">
        <b-row class="checkout-block">
          <b-col class="checkout-block-data">
            <label for="name">Имя</label>
            <input id="name" type="text" v-model="orderInfo.name" name="name" />
            <label for="surname">Фамилия</label>
            <input
              id="surname"
              type="text"
              v-model="orderInfo.surname"
              name="name"
            />
            <label for="phoneNumber">Телефон</label>
            <input
              id="phoneNumber"
              type="text"
              v-model="orderInfo.phoneNumber"
              name="name"
            />
          </b-col>
          <b-col class="checkout-block-data">
            <label for="address">Адрес</label>
            <input
              id="address"
              type="text"
              v-model="orderInfo.address"
              name="name"
            />
            <label for="city">Город</label>
            <input id="city" type="text" v-model="orderInfo.city" name="name" />
            <label for="inn">ИНН</label>
            <input id="inn" type="text" v-model="orderInfo.inn" name="name" />
          </b-col>
        </b-row>

        <b-row class="checkout-form">
          <b-col class="checkout-block-first checkout-block-select">
            <h5>Доставка</h5>
            <b-row align-v="baseline">
              <b-col>
                <label for="delivery">Доставка</label>
              </b-col>
              <b-col>
                <input
                  id="delivery"
                  type="radio"
                  value="1"
                  v-model="orderInfo.deliveryId"
                />
              </b-col>
            </b-row>
            <b-row align-v="baseline">
              <b-col>
                <label for="pickup">Самовывоз</label>
              </b-col>
              <b-col>
                <input
                  id="pickup"
                  type="radio"
                  value="2"
                  v-model="orderInfo.deliveryId"
                />
              </b-col>
            </b-row>
          </b-col>
          <b-col class="checkout-block checkout-block-select">
            <h5>Оплата</h5>
            <b-row align-v="baseline">
              <b-col>
                <label for="payByCard">Карта</label>
              </b-col>
              <b-col>
                <input
                  id="payByCard"
                  type="radio"
                  value="1"
                  v-model="orderInfo.paymentId"
                />
              </b-col>
            </b-row>
            <b-row align-v="baseline">
              <b-col>
                <label for="cash">Наличные</label>
              </b-col>
              <b-col>
                <input
                  id="cash"
                  type="radio"
                  value="2"
                  v-model="orderInfo.paymentId"
                />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="checkout-form">
          <b-col class="checkout-block-first">
            <p>Адрес электронной почты</p>
            <input
              id="email"
              type="text"
              v-model="orderInfo.email"
              name="email"
            />
          </b-col>
          <b-col class="checkout-block">
            <p>Комментарий к заказу</p>
            <input
              id="comment"
              type="text"
              v-model="orderInfo.comment"
              name="comment"
            />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="3" class="checkout-block" align-self="baseline">
        <button class="checkout-order" @click="checkout">
          Оформить заказ
        </button>
        <ProceedOrder />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProceedOrder from "@/components/ProceedOrder.vue";
import order from "@/store/modules/order/order";
import { OrderInfo } from "@/store/models";

@Component({
  components: {
    ProceedOrder
  }
})
export default class Checkout extends Vue {
  orderInfo: OrderInfo = {
    name: "",
    surname: "",
    phoneNumber: "",
    mobileNumber: "",
    address: "",
    city: "",
    email: "",
    inn: "",
    deliveryId: "",
    paymentId: "",
    comment: ""
  };

  checkout() {
    order.createOrder(this.orderInfo);
  }
}
</script>

<style scoped>
.checkout-form {
  background-color: #f3f3f3;
}

.checkout-block-first {
  background-color: #ffffff;
  margin-top: 20px;
  margin-right: 20px;
  padding: 20px;
}

.checkout-block {
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
}

.checkout-block-data {
  padding: 20px;
}

.checkout-block-data label,
input {
  display: block;
}

.checkout-block-select label,
input {
  display: block;
}

.checkout-order {
  width: 100%;
}
</style>

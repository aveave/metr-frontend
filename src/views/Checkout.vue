<template>
  <div class="width-limiter height-limiter">
    <b-container class="checkout-form" fluid>
      <h2>Оформление заказа</h2>
      <b-row>
        <b-col cols="8" class="checkout-col checkout-block">
          <h5>Адрес доставки</h5>
          <b-row class="checkout-info-form">
            <b-col>
              <div>
                <label for="name">Имя</label>
                <input
                  id="name"
                  type="text"
                  v-model="orderInfo.name"
                  name="name"
                />
              </div>
              <div>
                <label for="surname">Фамилия</label>
                <input
                  id="surname"
                  type="text"
                  v-model="orderInfo.surname"
                  name="name"
                />
              </div>
              <div>
                <label for="phoneNumber">Телефон</label>
                <input
                  id="phoneNumber"
                  type="text"
                  v-model="orderInfo.phoneNumber"
                  name="name"
                />
              </div>
            </b-col>

            <b-col>
              <div>
                <label for="address">Адрес</label>
                <input
                  id="address"
                  type="text"
                  v-model="orderInfo.address"
                  name="name"
                />
              </div>
              <div>
                <label for="city">Город</label>
                <input
                  id="city"
                  type="text"
                  v-model="orderInfo.city"
                  name="name"
                />
              </div>
              <div>
                <label for="inn">ИНН</label>
                <input
                  id="inn"
                  type="text"
                  v-model="orderInfo.inn"
                  name="name"
                />
              </div>
            </b-col>
          </b-row>
        </b-col>

        <b-col
          cols="3"
          class="checkout-col checkout-block"
          align-self="baseline"
        >
          <button class="checkout-order" @click="checkout">
            Оформить заказ
          </button>
          <ProceedOrder />
        </b-col>
      </b-row>

      <b-row class="checkout-options">
        <b-col cols="4" class="checkout-block first-block">
          <h5>Доставка</h5>
          <div>
            <label for="delivery">Доставка</label>
            <input
              id="delivery"
              type="radio"
              value="1"
              v-model="orderInfo.deliveryId"
            />
          </div>
          <div>
            <label for="pickup">Самовывоз</label>
            <input
              id="pickup"
              type="radio"
              value="2"
              v-model="orderInfo.deliveryId"
            />
          </div>
        </b-col>
        <b-col
          cols="4"
          class="checkout-block"
          style="background-color: #ffffff;"
        >
          <h5>Оплата</h5>
          <div>
            <label for="payByCard">Карта</label>
            <input
              id="payByCard"
              type="radio"
              value="1"
              v-model="orderInfo.paymentId"
            />
          </div>
          <div>
            <label for="cash">Наличные</label>
            <input
              id="cash"
              type="radio"
              value="2"
              v-model="orderInfo.paymentId"
            />
          </div>
        </b-col>
      </b-row>

      <b-row class="checkout-block mail-block">
        <b-col cols="4" align-self="stretch">
          <p>Адрес электронной почты</p>
          <input
            id="email"
            type="text"
            v-model="orderInfo.email"
            name="email"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
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

<style>
.checkout-form {
  background-color: #f3f3f3;
}

.checkout-block {
  background-color: #ffffff;
}

.first-block {
  margin: 0px 20px;
}

.mail-block {
  margin: 10px 5px;
}

.checkout-info-form input,
label {
  display: block;
}

.checkout-info-form div {
  margin: 5px 0px;
}

.checkout-options input,
label {
  display: inline;
}

.checkout-options label {
  margin-right: 20px;
}

.checkout-col {
  margin: 20px;
}

.checkout-block {
  display: block;
}

.checkout-order {
  margin-top: 10px;
  width: 100%;
}
</style>

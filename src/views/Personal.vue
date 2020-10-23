<template>
  <div class="width-limiter height-limiter">
    <b-container fluid>
      <h2>Личный кабинет</h2>
      <b-row>
        <b-col cols="3">
          <ul>
            <li>
              <router-link to="checkout">Профиль</router-link>
            </li>
            <li>
              <router-link to="checkout">Личный кабинет</router-link>
            </li>
            <li>
              <router-link to="checkout">Избранное</router-link>
            </li>
            <li>
              <router-link to="cart">Корзина</router-link>
            </li>
            <li>
              <router-link to="checkout">Заказы</router-link>
            </li>
          </ul>
        </b-col>
        <b-col cols="7">
          <h4>Профиль</h4>
          <b-row>
            <b-col class="personal-info">
              <div>
                <label for="name">Имя</label>
                <input
                  id="name"
                  type="text"
                  v-model="userInfo.name"
                  name="name"
                />
              </div>
              <div>
                <label for="surname">Фамилия</label>
                <input
                  id="surname"
                  type="text"
                  v-model="userInfo.surname"
                  name="surname"
                />
              </div>
              <div>
                <label for="phoneNumber">Телефон</label>
                <input
                  id="phoneNumber"
                  type="text"
                  v-model="userInfo.phoneNumber"
                  name="phoneNumber"
                />
              </div>
              <div>
                <label for="mobileNumber">Мобильный телефон</label>
                <input
                  id="mobileNumber"
                  type="text"
                  v-model="userInfo.mobileNumber"
                  name="mobileNumber"
                />
              </div>
              <div>
                <label for="company">Компания в которой работаете</label>
                <input
                  id="company"
                  type="text"
                  v-model="userInfo.company"
                  name="company"
                />
              </div>
              <button @click="savePersonalInfo">Сохранить</button>
            </b-col>
            <b-col class="personal-info">
              <div>
                <label for="country">Страна</label>
                <input
                  id="country"
                  type="text"
                  v-model="userInfo.country"
                  name="country"
                />
              </div>
              <div>
                <label for="city">Город</label>
                <input
                  id="city"
                  type="text"
                  v-model="userInfo.city"
                  name="city"
                />
              </div>
              <div>
                <label for="address">Адрес</label>
                <input
                  id="address"
                  type="text"
                  v-model="userInfo.address"
                  name="address"
                />
              </div>
              <div>
                <label for="inn">ИНН</label>
                <input id="inn" type="text" v-model="userInfo.inn" name="inn" />
              </div>
              <div>
                <label for="email">E MAIL</label>
                <input
                  id="email"
                  type="text"
                  v-model="userInfo.email"
                  name="email"
                />
              </div>
              <div class="change-password">
                <a href="">Сменить пароль</a>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { UserInfo } from "@/store/models";
import user from "@/store/modules/user/user";

@Component
export default class Personal extends Vue {
  userInfo: UserInfo = this.$store.state.user.userInfo;

  savePersonalInfo() {
    user.savePersonal(this.userInfo);
  }
}
</script>

<style>

.personal-info div {
  margin: 10px 0px;
}

.personal-info label,
input {
  display: block;
}

.personal-info a {
  color: #ef9a41;
}

.change-password {
  margin: 30px 0px !important;
}

.personal-info button {
  width: 150px;
  margin: 20px 0px;
}
</style>

<template>
  <b-container class="width-limiter height-limiter" fluid>
    <b-row>
      <b-col>
        <h2 id="personal-header">Личный кабинет</h2>
        <h6>Профиль</h6>
      </b-col>
    </b-row>
    <b-row class="personal-info">
      <b-col cols="3">
        <label for="name">Имя</label>
        <input id="name" type="text" v-model="userInfo.name" name="name" />
        <label for="surname">Фамилия</label>
        <input
          id="surname"
          type="text"
          v-model="userInfo.surname"
          name="surname"
        />
        <label for="phoneNumber">Телефон</label>
        <input
          id="phoneNumber"
          type="text"
          v-model="userInfo.phoneNumber"
          name="phoneNumber"
        />
        <label for="mobileNumber">Мобильный телефон</label>
        <input
          id="mobileNumber"
          type="text"
          v-model="userInfo.mobileNumber"
          name="mobileNumber"
        />
        <label for="company">Компания в которой работаете</label>
        <input
          id="company"
          type="text"
          v-model="userInfo.company"
          name="company"
        />
        <button @click="savePersonalInfo">Сохранить</button>
      </b-col>
      <b-col cols="3">
        <label for="country">Страна</label>
        <input
          id="country"
          type="text"
          v-model="userInfo.country"
          name="country"
        />

        <label for="city">Город</label>
        <input id="city" type="text" v-model="userInfo.city" name="city" />

        <label for="address">Адрес</label>
        <input
          id="address"
          type="text"
          v-model="userInfo.address"
          name="address"
        />
        <label for="inn">ИНН</label>
        <input id="inn" type="text" v-model="userInfo.inn" name="inn" />
        <label for="email">E MAIL</label>
        <input id="email" type="text" v-model="userInfo.email" name="email" />
        <div class="change-password">
          <a href="">Сменить пароль</a>
        </div>
      </b-col>
    </b-row>
  </b-container>
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

<style scoped>
.personal-info label,
input {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
}

.personal-info {
  margin-top: 20px;
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

.personal-info button,
input {
  width: 80%;
  margin: 20px 0px;
}

#personal-header {
  margin: 20px 0px;
}
</style>

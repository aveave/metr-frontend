<template>
  <header class="header-container width-limiter">
    <b-container fluid>
      <b-row class="header-top-line">
        <b-col cols="3">
          <b-row align-h="center">
            <b-col>
              <img src="../assets/header/logo.svg" @click="openHomePage" />
            </b-col>
            <b-col>
              <button class="header-catalog-button" v-b-modal.modal-catalog>
                <img
                  class="header-burger-icon"
                  src="../assets/header/catalog_burger.svg"
                />
                <span class="header-burger-text">Каталог</span>
              </button>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="6">
          <b-input-group class="header-search-panel">
            <b-form-input
              class="header-search-input"
              size="sm"
              placeholder="Я хотел бы найти...."
            >
            </b-form-input>
            <b-input-group-append>
              <b-button size="sm" class="btn-color header-search-button">
                <b-icon class="header-search-icon" icon="search"></b-icon>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>

        <b-col cols="3">
          <button class="header-menu-button" @click="openProfile">
            <img src="../assets/header/heart.svg" />
            <div>Избранное</div>
          </button>

          <button class="header-menu-button" @click="openProfile">
            <img src="../assets/header/user.svg" />
            <div>Мой Мэтр</div>
          </button>

          <button class="header-menu-button">
            <img src="../assets/header/group.svg" />
            <div>Заказы</div>
          </button>

          <button class="header-menu-button" @click="openCart">
            <img src="../assets/header/supermarket.svg" />
            <div>Корзина</div>
          </button>
        </b-col>
      </b-row>
      <b-row class="header-bottom-line">
        <b-col cols="10">
          <b-row>
            <ul class="nav">
              <li>
                <a class="nav-link active" href="#">Бренды</a>
              </li>
              <li>
                <router-link class="nav-link" to="">Акции</router-link>
              </li>
              <li>
                <router-link class="nav-link" to="">Новости</router-link>
              </li>
              <li>
                <router-link class="nav-link" to=""
                  >Доставка и оплата</router-link
                >
              </li>
              <li>
                <router-link class="nav-link" to="About"
                  >О компании</router-link
                >
              </li>
              <li>
                <router-link class="nav-link" to="">Отзывы</router-link>
              </li>
              <li>
                <router-link class="nav-link" to="">Поступления</router-link>
              </li>
              <li>
                <router-link class="nav-link" to=""
                  >Заказ по прайсу</router-link
                >
              </li>
              <li>
                <router-link class="nav-link" to="contacts"
                  >Контакты</router-link
                >
              </li>
            </ul>
          </b-row>
        </b-col>
        <b-col cols="2">
          <div class="header-phone-wrapper">
            <a class="bold-text" href="tel:+74732460707">+7(473) 246-07-07</a>
          </div>
        </b-col>
      </b-row>
      <Login />
      <Catalog />
    </b-container>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Login from "./Login.vue";
import Catalog from "@/components/Catalog.vue";

@Component({
  name: "Header",
  components: {
    Login,
    Catalog
  }
})
export default class Header extends Vue {

  get user() {
    return this.$store.state.user.userInfo;
  }

  openCart() {
    this.$router.push({ name: "cart" });
  }

  openHomePage() {
    this.$router.push({ name: "home" });
  }

  openProfile() {
    if(this.user) {
      this.$router.push({ name: "personal"});
    } else {
      this.$root.$emit("bv::show::modal", "modal-login");
    }
  }
}
</script>

<style>
.header-container {
  padding-top: 28px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #ffffff;
}

.header-top-line {
  margin-bottom: 20px;
}

.header-bottom-line {
  margin-bottom: 40px;
}

.header-icon {
  width: 16px;
  height: 16px;
}

.header-catalog-button {
  padding: 5px 16px;
}

.header-burger-icon {
  width: 18px;
  height: 28px;
  margin-right: 16px;
}

.header-burger-text {
  font-weight: 700;
  font-size: 14px;
}

.btn-color {
  background-color: #ef9a41;
  border-radius: 5px;
  color: white;
  border-color: #ef9a41;
}

.header-right-panel button {
  background-color: white;
  border: none;
  color: #000;
}

.header-search-panel input,
.header-search-panel button {
  border-color: #ef9a41;
}

.header-search-input {
  height: auto;
  padding: 8px 20px;
  font-size: 16px;
  line-height: 19px;
  border-width: 2px;
}

.header-search-input:placeholder {
  color: #9d9d9d;
}

.header-search-button {
  padding: 0 26px;
  margin: 0;
}

.header-search-icon {
  width: 20px;
  height: 20px;
}

.header-menu-button {
  background: transparent;
  border: none;
  border-radius: 5px;
  transition: background 0.2s ease;
  color: black;
}

.header-menu-button:hover {
  background-color: #eee;
  transition: background 0.2s ease;
}

.header-phone-wrapper {
  text-align: end;
}

.bold-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #231f20;
}

input::placeholder {
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #9d9d9d;
}
</style>

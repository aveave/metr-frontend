<template>
  <footer class="main-footer">
    <div class="width-limiter">
      <b-container fluid>
        <b-row>
          <b-col>
            <b-nav align="center">
              <ul>
                <p>Каталог</p>
                <li><a href="#">Каталог по брендам</a></li>
                <li><a href="#">Заказ по прайсу</a></li>
                <li><a href="#">Новинки</a></li>
                <li><a href="#">Акции</a></li>
              </ul>
            </b-nav>
          </b-col>
          <b-col>
            <b-nav align="center">
              <ul>
                <p>О компании</p>
                <li><a href="#">Документы</a></li>
                <li><a href="#">Реквизиты</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">О нас</a></li>
              </ul>
            </b-nav>
          </b-col>
          <b-col>
            <b-nav align="center">
              <ul>
                <p>Информация</p>
                <li><a href="#">Оплата и доставка</a></li>
                <li><a href="#">Вопросы и ответы</a></li>
                <li><a href="#">Новости</a></li>
                <li>
                  <a href="#">Политика защиты <br />персональных данных</a>
                </li>
              </ul>
            </b-nav>
          </b-col>
          <b-col align-self="center">
            <b-row>
              <p>+7(473) 246-07-07</p>
            </b-row>
            <b-row>
              <p id="address">
                г. Воронеж ул Еремеева 17 <br />
                © 2018 OOO “Мэтр”
              </p>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style>
.main-footer {
  height: 184px;
  background-color: #f3f3f3;
  color: #231f20;
  font-size: 16px;
}

.main-footer p {
  font-weight: bold;
}

.main-footer ul {
  padding: 0;
  margin: 0;
}

.main-footer a {
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #231f20;
}

#address {
  font-weight: normal;
}
</style>

<template>
  <div class="width-limiter">
    <b-container fluid>
      <Carousel />
      <SuggestedList header="Популярное" :suggestedList="suggestedList" />
      <SuggestedList header="Новинки" :suggestedList="suggestedList" />

      <b-row class="start-page-block" align-h="end">
        <b-col>
          <h2>Магазин канцтоваров Мэтр</h2>
          <p>
            Магазин канцтоваров Мэтр Мы рады предложить вам широчайший
            ассортимент канцелярских товаров по оптовым и розничным ценам, а
            также товары для творчества, товары для художников и множество
            товаров для офисной работы. Все предлагаемые товары есть в наличии
            на нашем складе. Вы делаете заказ в интернет-магазине, мы его
            согласуем, скомпонуем и доставим в удобное для вас время.
          </p>
          <p>
            Конкурентоспособные цены и широкий выбор — то, за что нас выбирают в
            Воронеже. На нашей оптовой базе множество товаров отечественного и
            импортного производства, поставки осуществляются по всем областям
            Центрального Черноземья и в другие регионы.Оцените и вы преимущества
            покупки канцелярских товаров у нас!
          </p>
        </b-col>

        <b-col offset-md="1">
          <img src="../assets/start-page/start-icon.svg" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Card from "@/components/Card.vue";
import Carousel from "@/components/Carousel.vue";
import SuggestedList from "@/components/SuggestedList.vue";

import specialOffer from "@/store/modules/offer/special-offer";

@Component({
  components: {
    Card,
    Carousel,
    SuggestedList
  }
})
export default class Home extends Vue {
  get suggestedList() {
    return this.$store.state.specialOffer.suggestedProducts;
  }

  created() {
    specialOffer.uploadSuggestedProducts();
  }
}
</script>

<style>
.start-page {
  margin: 10px;
}

.start-page-block {
  margin: 20px;
}
</style>

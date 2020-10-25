<template>
  <b-container fluid class="width-limiter height-limiter">
    <!-- <b-breadcrumb :items="navigation"></b-breadcrumb> -->

    <h1>{{ groupName }}</h1>
    <b-row align-content="start" class="catalog">
      <b-col cols="2">
        <ul>
          <li
            v-for="(group, index) in groups"
            :key="index"
            @click="displayGroup(group.id)"
          >
            <a href="#">{{ group.name }}</a>
          </li>
        </ul>

        <h5>Цена</h5>
        <div class="range-slider">
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            v-model.number="minPrice"
            @change="setRangeSlider"
          />
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            v-model.number="maxPrice"
            @change="setRangeSlider"
          />
          <!-- <div>
            <input type="text" v-model="minPrice" />
            <p>{{ minPrice }} Руб</p>
          </div>
          <div>
            <input type="text" v-model="maxPrice" />
            <p>{{ maxPrice }} Руб</p>
          </div> -->
        </div>

        <b-row class="catalog-price" no-gutters>
          <b-col cols="6">
            <input type="text" v-model="minPrice" />
            <p>{{ minPrice }} Руб</p>
          </b-col>
          <b-col>
            <input type="text" v-model="maxPrice" />
            <p>{{ maxPrice }} Руб</p>
          </b-col>
        </b-row>
        <h5>Бренды</h5>

        <h5>Тип</h5>

        <h5>Цвета</h5>

        <p>Товары со скидкой</p>
      </b-col>
      <b-col cols="10">
        <b-row>
          <b-col cols="auto" class="mr-auto">
            <select v-model="selectedCategory" @select="sortBySelectedCategory">
              <option
                v-for="(category, index) in categories"
                :key="index"
                :value="category"
                >{{ category }}</option
              >
            </select>
            <select v-model="selectedAmount">
              <option
                v-for="(amount, index) in displayAmount"
                :key="index"
                :value="amount"
                >{{ amount }}</option
              >
            </select>
          </b-col>
          <b-col cols="auto">
            <img src="../assets/catalog/menu-icon.svg" />
            <img src="../assets/catalog/list-icon.svg" />
          </b-col>
        </b-row>
        <b-row>
          <Card
            v-for="product in paginatedProducts"
            :key="product.id"
            :product="product"
          />
        </b-row>
        <b-row align-h="end">
          <b-pagination
            v-if="pageCount > 1"
            v-model="pageNumber"
            :total-rows="pageCount"
            :per-page="perPage"
            align="right"
            hide-goto-end-buttons
            class="list-pagination"
          ></b-pagination>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import catalog from "@/store/modules/catalog/catalog-items";
import { GroupedItem, Product } from "@/store/models";
import Card from "@/components/Card.vue";

@Component({
  components: {
    Card
  }
})
export default class CatalogView extends Vue {
  pageNumber = 1;
  perPage = 1;

  selectedCategory = "По названию";
  selectedAmount = 10;

  catalogItems = new Map();

  displayedProducts: Product[] = [];

  categories = ["По названию", "По цене"];
  displayAmount = [20, 40, 60, 80];

  minPrice = 0;
  maxPrice = 1000;

  navigation = [
    {
      text: "Главная",
      to: { name: "home" }
    },
    {
      text: "Каталог",
      to: { name: "home" }
    }
  ];

  get groupName() {
    return this.$route.params.groupName;
  }

  get groups() {
    return this.$route.params.groupInfo;
  }

  get pageCount() {
    return Math.ceil(this.displayedProducts.length / this.selectedAmount);
  }

  // get paginatedProducts() {
  //   const start = (this.pageNumber - 1) * this.selectedAmount,
  //     end = start + this.selectedAmount;

  //     return this.displayedProducts.slice(start,end);
  // }

  get paginatedProducts() {
    const start = (this.pageNumber - 1) * this.selectedAmount,
      end = start + this.selectedAmount;
    return this.displayedProducts
      .filter(
        product =>
          parseInt(product.price) >= this.minPrice &&
          parseInt(product.price) <= this.maxPrice
      )
      .slice(start, end);
  }

  async created() {
    const items = await catalog.uploadGroupedItems(
      this.$route.params.sectionId
    );
    this.spreadCatalogItems(items);
    this.displayedProducts = this.catalogItems.get(this.groups[0].id);
  }

  spreadCatalogItems(items: GroupedItem[]) {
    this.groups.forEach((element: { id: string; name: string }) => {
      const groupItems = items.filter(
        (item: GroupedItem) => item.category_id == element.id
      );
      this.catalogItems.set(element.id, groupItems);
    });
  }

  setRangeSlider() {
    if (this.minPrice > this.maxPrice) {
      const tmp = this.maxPrice;
      this.maxPrice = this.minPrice;
      this.minPrice = tmp;
    }
  }

  sortBySelectedCategory() {
    console.log("sort");
  }

  displayGroup(groupId: string) {
    this.displayedProducts = this.catalogItems.get(groupId);
  }
}
</script>

<style scoped>
.catalog ul > li {
  margin-bottom: 15px;
}

.range-slider {
  width: 200px;
  text-align: center;
  position: relative;
  margin-top: 20px;
  margin-bottom: 40px;
}

.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #9a905d;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
  background: #434343;
}

.catalog-price input {
  width: 96px;
  height: 33px;
  margin-bottom: 5px;
}
</style>

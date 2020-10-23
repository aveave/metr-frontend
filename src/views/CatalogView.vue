<template>
    <b-container fluid class="width-limiter height-limiter">
      <h1></h1>
      <b-row>
        <b-col cols="2">
          <b-row>
            <b-col>
              <ul>
                <li
                  v-for="(group, index) in groups"
                  :key="index"
                  @click="displayGroup(group.id)"
                >
                  <a href="#">{{ group.name }}</a>
                </li>
              </ul>
            </b-col>
          </b-row>
          <b-row>
            <h3>Цена</h3>
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
              <div>
                <input type="text" v-model="minPrice" />
                <p>{{ minPrice }} Руб</p>
              </div>
              <div>
                <input type="text" v-model="maxPrice" />
                <p>{{ maxPrice }} Руб</p>
              </div>
            </div>
          </b-row>
          <b-row>
            <h3>Бренды</h3>
          </b-row>
          <b-row>
            <h3>Тип</h3>
          </b-row>
          <b-row>
            <h3>Цвета</h3>
          </b-row>
          <b-row>
            <p>Товары со скидкой</p>
          </b-row>
        </b-col>
        <!-- <select :selected="selectedCategory" :options="categories" @select="sortBySelectedCategory"></select>
      <select :selected="selectedAmount" :options="displayAmount" @select="displaySelectedAmount"></select> -->
        <b-col cols="10">
          <b-row>
            <Card
              v-for="product in paginatedProducts"
              :key="product.id"
              :product="product"
            />
            <b-pagination
              v-model="pageNumber"
              :total-rows="pageCount"
              :per-page="perPage"
              align="right"
            ></b-pagination>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import catalog from "@/store/modules/catalog/catalog-items";
import { GroupedItem } from "@/store/models";
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

  displayedProducts = [];

  categories = ["По названию", "По цене"];
  displayAmount = [20, 40, 60, 80];

  minPrice = 0;
  maxPrice = 1000;

  get groups() {
    return this.$route.params.groupInfo;
  }

  get pageCount() {
    const l = this.displayedProducts.length,
      s = this.selectedAmount;
    return Math.ceil(l / s);
  }

  get paginatedProducts() {
    const start = (this.pageNumber - 1) * this.selectedAmount,
      end = start + this.selectedAmount;

    return this.displayedProducts.slice(start, end);
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

  displaySelectedAmount() {
    console.log("display");
  }

  displayGroup(groupId: string) {
    this.displayedProducts = this.catalogItems.get(groupId);
  }
}
</script>

<style lang="css" scoped>
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>

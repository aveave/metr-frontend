<template>
  <b-modal
    id="modal-catalog"
    hide-header
    hide-footer
    hide-backdrop
    content-class="shadow modal-catalog-content"
  >
    <b-tabs
      pills
      vertical
      nav-wrapper-class="w-30"
      active-nav-item-class="active-tab"
    >
      <b-tab
        active
        v-for="catalogItem in mainCatalogItems"
        :key="catalogItem.id"
        :title="catalogItem.name"
      >
        <b-row>
          <b-col
            cols="4"
            v-for="subCatalogItem in relatedCatalogItems.get(catalogItem.id)"
            :key="subCatalogItem.id"
          >
            <a
              href="#"
              class="subCatalog"
              @click="openCatalogView(subCatalogItem.id)"
              >{{ subCatalogItem.name }}</a
            >
            <div class="card-text">
              <p
                v-for="(subCatalogItemThirdLevel, index) in relatedNames(
                  subCatalogItem
                )"
                :key="index"
              >
                {{ subCatalogItemThirdLevel }}
              </p>
            </div>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </b-modal>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import catalog from "@/store/modules/catalog/catalog-items";
import { CatalogItem } from "@/store/models";

@Component({
  name: "Catalog"
})
export default class Catalog extends Vue {
  catalogItem: CatalogItem[] = [];
  mainCatalogItems: CatalogItem[] = [];

  relatedCatalogItems = new Map();
  relatedCatalogSubItems = new Map();

  created() {
    catalog.uploadCatalogItems().then(() => {
      this.catalogItem = catalog.itemsFromCatalog;
      this.mainCatalogItems = this.catalogItem.filter(p => p.parent_id == null);

      this.mainCatalogItems.forEach(mainCatalogItem => {
        const subCatalogItems: CatalogItem[] = this.catalogItem.filter(
          subCatalogItem => mainCatalogItem.id == subCatalogItem.parent_id
        );
        this.relatedCatalogItems.set(mainCatalogItem.id, subCatalogItems);

        subCatalogItems.forEach(subCatalogItem => {
          const subCatalogItemsThirdLevel: CatalogItem[] = this.catalogItem.filter(
            subCatalogItemThirdLevel =>
              subCatalogItem.id == subCatalogItemThirdLevel.parent_id
          );
          this.relatedCatalogSubItems.set(
            subCatalogItem.id,
            subCatalogItemsThirdLevel
          );
        });
      });
    });
  }

  relatedNames(subCatalogItem: CatalogItem): string[] {
    return this.relatedCatalogSubItems
      .get(subCatalogItem.id)
      .map((item: CatalogItem) => item.name);
  }

  openCatalogView(sectionId: string) {
    this.$root.$emit("bv::hide::modal", "modal-catalog");
    const catalogGroupInfo = this.relatedCatalogSubItems.get(sectionId);
    const groupInfo = catalogGroupInfo.map(({ id, name }) => ({ id, name }));
    this.$router.push({
      name: "catalogview",
      params: { sectionId, groupInfo }
    });
  }
}
</script>

<style>
.modal-catalog-content {
  width: 1000px;
  margin-top: 70px;
}

.modal-catalog-content a:hover {
  color: #ef9a41;
}

.active-tab {
  color: #ef9a41 !important;
  background-color: white !important;
}

.subCatalog {
  font-weight: bold;
}

.card-text {
  line-height: 1;
}
</style>

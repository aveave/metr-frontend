<template>
  <b-container fluid>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
    >
      <b-carousel-slide img-src="../assets/start-page/banner.png">
        <button type="button" class="btn-color btn-carousel">Смотреть</button>
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/start-page/banner.png">
        <button type="button" class="btn-color btn-carousel">Смотреть</button>
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/start-page/banner.png">
        <button type="button" class="btn-color btn-carousel">Смотреть</button>
      </b-carousel-slide>
    </b-carousel>
  </b-container>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  name: "Carousel"
});
</script>

<style>
.btn-color {
  background-color: #ef9a41;
  border-radius: 5px;
  color: white;
  border-color: #ef9a41;
}

.btn-carousel {
  width: 156px;
  height: 62px;
  float: left;
}
</style>

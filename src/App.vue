<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default Vue.extend({
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({})
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
.width-limiter {
  max-width: 1440px;
  margin: 0 auto;
}

.height-limiter {
  min-height: calc(100vh - 314px);
}
</style>

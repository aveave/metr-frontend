<template>
  <div>
    <Header/>
    <Home/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";
import Home from './views/Home.vue';

export default Vue.extend({
  name: "App",

  components: {
    Header,
    Home,
    Footer
  },

  data: () => ({
    
  })
});
</script>

<style>
  .width-limiter{
    max-width: 1440px;
    margin: 0 auto;
  }
</style>
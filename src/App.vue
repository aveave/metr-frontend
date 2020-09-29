<template>
  <div>
  <Header/>
  <router-view></router-view>
  <Footer/>
  </div>
</template>

<script lang="ts">

import Vue from "vue";
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    Header,
    Footer,
  },

  data: () => ({
    
  })

});
</script>

<style>
  @import './assets/styles/main.css';

  .width-limiter{
    max-width: 1440px;
    margin: 0 auto;
  }
</style>
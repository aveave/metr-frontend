<template>
<b-container fluid>
  <Header/>
  <Home/>
  <Footer/>
</b-container>
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

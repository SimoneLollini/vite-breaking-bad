<script>

import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
import { store } from "./store.js";
import axios from "axios";

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          console.log(response);
          // this.store.characters = response.data.results
          // console.log(response.data[0].name);
          // this.store.info = response.data.info
          // console.log(response.data[0].img);
          // console.log(response.data[0].status);
        })
        .catch(err => {
          console.error(err.message);
          this.store.error = err.message
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
    // console.log(this.store.characters)
  }
}



</script>

<template>
  <SiteHeader />
  <SiteMain />
  <SiteFooter />

</template>

<style lang="scss">

</style>

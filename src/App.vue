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
          // console.log(response);
          this.store.characters = response.data.name
          this.store.image = response.data.img
          this.store.status = response.data.status
        })
        .catch(err => {
          console.error(err.message);
          this.store.error = err.message
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
    console.log(this.store)
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

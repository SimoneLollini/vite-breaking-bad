<script>

import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
import { store } from "./store.js";
// import axios from "axios";

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
    loading: false,
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    // this.callApi(this.store.API_URL)

    store.callApi(store.API_URL)

  },
}




</script>

<template >
  <SiteHeader />
  <SiteMain />
  <SiteFooter />

</template>

<style lang="scss">

</style>

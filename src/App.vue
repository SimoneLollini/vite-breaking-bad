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
          this.store.characters = response.data  //in questo modo characters diventa un array di oggetti contenente tutto cio di cui ho bisogno
          // console.log(this.store.characters);
        })
        .catch(err => {
          console.error(err.message);
          this.store.error = err.message
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
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

<script>
import { store } from "../store.js"; //mi servirà successivamente per cambiare l'url di partenza
import SelectBox from "./SelectBox.vue";
import axios from 'axios';
export default {
    name: 'SiteHeader',
    components: {
        SelectBox,

    },
    data() {
        return {
            store,
        }
    }, methods: {
        SearchByCategory() {
            // console.log('hai cambiato categoria');
            // console.log(store.SelectedCategory);

            const url = `${this.store.API_URL}?category=${store.SelectedCategory}`
            // console.log(url);
            store.callApi(url)

        }
    }
}
</script>

<template>
    <header>
        <SelectBox @SearchBy="SearchByCategory" />

    </header>
</template>

<style lang="scss">
header {
    background-color: #2E3A46;

}
</style>
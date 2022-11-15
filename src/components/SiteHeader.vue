<script>
import { store } from "../store.js"; //mi servirà successivamente per cambiare l'url di partenza
import SelectBox from "./SelectBox.vue";
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
            console.log('hai cambiato categoria');
        }
    }
}
</script>

<template>
    <header>
        <SelectBox />

    </header>
</template>

<style lang="scss">
header {
    background-color: #2E3A46;

}
</style>
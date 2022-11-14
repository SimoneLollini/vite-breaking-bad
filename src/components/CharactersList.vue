<script>
import CharacterLi from "./CharacterLi.vue";
import { store } from "../store.js";
export default {
    name: 'CharactersList',
    components: {
        CharacterLi,
    },
    data() {
        return {
            store
        }

    }
}
</script>

<template>
    <div class="container">

        <div class="row row-cols-5">
            <CharacterLi :character="character" v-for="character in store.characters" />
        </div>
    </div>

</template>


<style lang="scss" scoped>
.row {
    padding-top: 3rem;

}
</style>
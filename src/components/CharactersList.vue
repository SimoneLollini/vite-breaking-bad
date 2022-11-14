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
    <div class="found">
        <div class="container py-4 px-4">
            <h3 class="text-white">Found {{ store.characters.length }} characters</h3>
        </div>


    </div>
    <div class="container">
        <div class="row row-cols-5 gy-4">
            <CharacterLi :character="character" v-for="character in store.characters" />
        </div>
    </div>

</template>


<style lang="scss" scoped>
.container {
    background-color: white;
}

.found {
    .container {
        background-color: #212529;

    }
}

.row {
    padding-top: 3rem;

}
</style>
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
            <h3 class="text-white" v-if="this.store.characters !== null">Found {{ this.store.characters.length }}
                characters</h3>
        </div>


    </div>
    <div class="container">

        <div class="row row-cols-5 gy-4" v-if="!this.store.loading">
            <CharacterLi :character="character" v-for="character in store.characters" />
        </div>
        <div v-else class="loading">
            LOADING....
        </div>
    </div>



</template>


<style lang="scss" scoped>
.container {
    background-color: white;

    .loading {
        color: #212529;
    }
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
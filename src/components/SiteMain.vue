<script>
import CharacterList from "./CharactersList.vue";
import SiteHeader from "./SiteHeader.vue";


export default {
    name: 'SiteMain',
    components: {
        CharacterList,
        SiteHeader
    }
}
</script>

<template>
    <main>
        <CharacterList />
    </main>
</template>

<style lang="scss">

</style>
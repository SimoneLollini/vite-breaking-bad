<script>
export default {
    name: 'CharacterLi',
    props: {
        character: Object
    }
}
</script>


<template>
    <div class="col">
        <div class="card">
            <div class="card-top">
                <img :src="character.img" :alt="character.name">
            </div>
            <div class="card-bottom"></div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>
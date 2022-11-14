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
            <div class="card-bottom">
                <div class="name">
                    <strong> {{ character.name }}</strong>
                </div>
                <div class="status">{{ character.status }}</div>

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.card {
    padding: 1rem;
    border-radius: 5px;
    height: 100%;
    background-color: #2E3A46;
    color: grey;

    img {
        aspect-ratio: 1/1;
        object-fit: cover;
        object-position: top;
        width: 100%;
    }
}
</style>
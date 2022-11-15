<script>
export default {
    name: 'SiteHeader'
}
</script>

<template>
    <header>
        <div class="container py-5">
            <h1 class="text-white py-3">Breaking Bad API</h1>
            <select v-model="CategorySelected" @change="$emit('SearchByCategory')">
                <option value="Select_category">Select category</option>
                <option value="Breaking_Bad">Breaking Bad</option>
                <option value="Better_Call_Saul">Better Call Saul</option>
            </select>
        </div>

    </header>
</template>

<style lang="scss">
header {
    background-color: #2E3A46;

}
</style>
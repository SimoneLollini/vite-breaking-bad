<script>
import { store } from '../store.js'
export default {
    name: 'SelectBox',
    emit: ['SearchBy'],
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <div class="container py-5">
        <h1 class="text-white py-3">Breaking Bad API</h1>
        <select v-model="store.SelectedCategory" @change="$emit('SearchBy')">
            <option disabled value="">Select a category</option>
            <option value="">All</option>
            <option value="Breaking+Bad">Breaking Bad</option>
            <option value="Better+Call+Saul">Better Call Saul</option>
        </select>
    </div>
</template>


<style lang="scss" scoped>

</style>
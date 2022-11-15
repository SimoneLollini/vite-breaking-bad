<script>
import { store } from '../store.js'
export default {
    name: 'SelectBox',
    emit: ['SearchByCategory'],
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
        <select v-model="store.SelectedCategory" @change="$emit('SearchByCategory')">
            <option disabled value="">Select a category</option>
            <option value="Breaking_Bad">Breaking Bad</option>
            <option value="Better_Call_Saul">Better Call Saul</option>
        </select>
    </div>
</template>


<style lang="scss" scoped>

</style>
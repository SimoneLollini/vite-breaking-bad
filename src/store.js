import { reactive } from "vue";

export const store = reactive({
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    characters: null,
    image: null,
    status: null,
    error: null
})


// la variabile STORE potrà essere poi richiamata in questo modo
// import { store } from './store.js'

// export default {
//   data() {
//     return {
//       store
//     }
//   }
// }
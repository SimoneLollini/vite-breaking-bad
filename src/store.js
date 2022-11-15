import { reactive } from "vue";

export const store = reactive({
    API_URL: `https://www.breakingbadapi.com/api/characters`,  //?category=Better+Call+Saul      ?category=Breaking+Bad 
    characters: null,
    loading: false,
    image: null,
    status: null,
    error: null,
    SelectedCategory: '',
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
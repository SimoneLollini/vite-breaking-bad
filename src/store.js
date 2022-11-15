import { reactive } from "vue";
import axios from 'axios';
export const store = reactive({
    API_URL: `https://www.breakingbadapi.com/api/characters`,  //?category=Better+Call+Saul      ?category=Breaking+Bad 
    characters: null,
    loading: false,
    image: null,
    status: null,
    error: null,
    SelectedCategory: '',
    callApi: (url) => {
        axios.get(url)
            .then(response => {
                // console.log(response);
                store.characters = response.data
                //in questo modo characters diventa un array di oggetti contenente tutto cio di cui ho bisogno
                store.loading = true;
                // console.log(store.characters);
            })
            .catch(err => {
                console.error(err.message);
                store.error = err.message
            })
    }
},
)


// la variabile STORE potrà essere poi richiamata in questo modo
// import { store } from './store.js'

// export default {
//   data() {
//     return {
//       store
//     }
//   }
// }
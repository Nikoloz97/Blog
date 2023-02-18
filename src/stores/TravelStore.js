import {defineStore} from 'pinia'
 
// Essentially one giant constructor
export const useTravelStore = defineStore('travel',{
    state: () => ({
        countriesVisited: ['France', 'Georgia', 'Mexico', 'Netherlands']
    }),
    getters: {
        getLatestCountry: (state) => state.countriesVisited[state.countriesVisited.length - 1]
    },
    // These are equivalent to mutations
    actions: {
        addCountry(country) {
            this.countriesVisited.push(country)
        }
    }
})
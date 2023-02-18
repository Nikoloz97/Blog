import {defineStore} from 'pinia'
 
// Essentially one giant constructor
export const useTravelStore = defineStore('travel',{
    state: () => ({
        countriesVisited: [],
        loading: false,
    }),
    getters: {
        getLatestCountry: (state) => state.countriesVisited[state.countriesVisited.length - 1].name,
        getHighestId: (state) => state.countriesVisited[state.countriesVisited.length - 1].id
    },
    // These are equivalent to mutations
    actions: {
        // Creating a local database in json: https://www.youtube.com/watch?v=ixxSKJi4QXI&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=8&ab_channel=TheNetNinja
        // GET request 
        async getCountriesVisited() {
            this.loading = true
            const res = await fetch('http://localhost:3000/countriesVisited')
            // This "invokes" the response
            const data = await res.json()
            this.countriesVisited = data
            this.loading = false
        },
        // POST request
        // Try not to do logic in here (does weird stuff...)
        async addCountry(country) {
 
            this.countriesVisited.push(country)

            const res = await fetch('http://localhost:3000/countriesVisited', {
                method: 'POST',
                // deserialize 
                body: JSON.stringify(country),
                headers: {'Content-Type' : 'application/json'}
            })

            // log error if app
            if  (res.error) {
                console.log(res.error)
            }
        },

        // DELETE request
        async deleteCountry(id) {
            this.countriesVisited = this.countriesVisited.filter(t => {
                return t.id !== id 
            })
            const res = await fetch('http://localhost:3000/countriesVisited/' + id, {
                method: 'DELETE',
            })
            if (res.error) {
                console.log(res.error)
            }
        },

        // PATCH request
        async renameCountry(id, newName) {
            const countryToRename = this.countriesVisited.find(c => c.id === id)
            countryToRename.name = newName

            const res = await fetch('http://localhost:3000/countriesVisited/' + id, {
                method: 'PATCH',
                // deserialize 
                body: JSON.stringify({name: newName}),
                headers: {'Content-Type' : 'application/json'}
            })

            // log error if app
            if  (res.error) {
                console.log(res.error)
            }

            
         }


        
    }
})
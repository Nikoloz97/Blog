<template>
    <div class="allPosts">

        <form @submit.prevent="handleSubmit">
        <input 
            type="text"
            placeholder="Add another country..."
            v-model="newCountry">

            <button>Add</button>
        </form>
        
        <!-- <form @submit.prevent="handleSubmit2">
        <input type="text"
                placeholder="Delete a country (be as accurate as possible please)..."
                v-model="deleteCountry">
            <button>Delete</button>
        </form> -->

        <div v-if="loading">Loading</div>

        <div v-else>
            <h2>List of Countries I've been to</h2>
            <ul v-for="country in countriesVisited">
                <li>
                    {{ country.name }}
                    <button @click="travelStore.deleteCountry(country.id)">Delete</button>

                    <form @submit.prevent="handleSubmit2">
                        <input type="text"
                                placeholder="Rename country..."
                                v-model="renamedCountry">
                                <button @click="country.id = renamedCountryIndex">Rename</button>
                    </form>
                </li>
            </ul>
            <p>Latest country I've been to is {{ getLatestCountry}}</p>
        </div>

       
        <button @click="travelStore.$reset">Reset</button>


    </div>

</template>

<!-- With setup keyword, don't need to export default, setup, and return statements -->
<script setup>
import {useTravelStore} from '../../stores/TravelStore'
import { ref } from 'vue';
import {storeToRefs} from 'pinia'

const travelStore = useTravelStore()

// Makes it so you dont have to write travelStore.loading, etc... 
const {countriesVisited, getLatestCountry, loading} = storeToRefs(travelStore)

// 'fetch' data from json datastore
travelStore.getCountriesVisited()


const newCountry = ref('')
const handleSubmit = () => {

    travelStore.addCountry({
        id: travelStore.getHighestId + 1,
        name: newCountry.value
    })
    // Once country added to list, reset the newCountry value 
    newCountry.value = ''

}

const renamedCountry = ref('')
let renamedCountryIndex = 0
const handleSubmit2 = () => {

    travelStore.renameCountry(renamedCountryIndex, renamedCountry.value)
    renamedCountry.value = ''
}

</script>


<style> 

</style>
<template>
    <div class="allPosts">

        <form @submit.prevent="handleSubmit">
        <input 
            type="text"
            placeholder="Add another country..."
            v-model="newCountry">

            <button>Add</button>
        </form>

        <h2>List of Countries I've been to</h2>
        <ul v-for="countries in travelStore.countriesVisited">
            <li>{{ countries }}</li>
        </ul>

        <p>Latest country I've been to is {{ travelStore.getLatestCountry}}</p>
        


    </div>

</template>

<!-- With setup keyword, don't need to export default, setup, and return statements -->
<script setup>
import {useTravelStore} from '../../stores/TravelStore'
import { ref } from 'vue';

const travelStore = useTravelStore()
const newCountry = ref('')
const handleSubmit = () => {
    travelStore.addCountry(newCountry.value)
    // Once country added to list, reset the newCountry value 
    newCountry.value = ''

}

</script>


<style> 

</style>
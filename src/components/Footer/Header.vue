<template>
    <!-- This is where the images will be displayed -->

    <div v-for="photo in FooterPhotos">
        <img :src="photo.URL" 
              alt="">
    </div>


</template>

<script setup>

import {useMasterStore} from '../../stores/MasterStore'
import {storeToRefs} from 'pinia'


const masterStore = useMasterStore()

const {FooterPhotos} = storeToRefs(masterStore)

</script>

<style scoped>

</style>
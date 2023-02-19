<template>

<h1 class="display-1">Health</h1>

<!-- Content -->
<div class="row row-cols-1 row-cols-md-2 g-4">

<div v-for="thumbnail in Thumbnails">
  <div class="col">
    <div class="card">
      <img :src="thumbnail.PhotoURL"
            class="card-img-top"
             alt="This photo isn't working for you">
      <div class="card-body">
        <h5 class="card-title">{{ thumbnail.Title }}</h5>
        <p class="card-text">{{ thumbnail.PostingDate }}</p>
      </div>
    </div>
  </div>
</div>
</div>


</template>

<script setup>
import {useHealthStore} from '../../stores/HealthStore'
import {storeToRefs} from 'pinia'

const HealthStore = useHealthStore()

const {Thumbnails} = storeToRefs(HealthStore)




</script>


<style> 

</style>
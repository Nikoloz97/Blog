<template>

<!-- Hero image -->
<div class="card bg-dark text-white">
  <img src="http://cdn.shopify.com/s/files/1/0269/3477/1811/articles/become_a_computer_programmer_1200x1200.jpg?v=1601404909" 
       class="card-img" 
       alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
</div>
</div>

<!-- Quote -->


<figure class="text-start">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>


<!-- Autobiography -->

<h1 class="display-2">Timeline</h1>

<div class="row row-cols-1 row-cols-md-2 g-4">

<div v-for="bio in BioCards">
  <div class="col">
    <div class="card">
      <img :src="bio.PhotoURL"
            class="card-img-top"
             alt="This photo isn't working for you">
      <div class="card-body">
        <h5 class="card-title">{{ bio.Title }}</h5>
        <p class="card-text">{{ bio.Description }}</p>
      </div>
    </div>
  </div>
</div>

</div>



</template>

<script setup>
import {useAboutStore} from '../../stores/AboutStore'
import {storeToRefs} from 'pinia'


const codingStore = useAboutStore()

const {BioCards} = storeToRefs(codingStore)

</script>

<style scoped>



</style>
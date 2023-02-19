<template>

    <!-- Header -->
    <h1 class="display-1">All Posts</h1>

    <!-- Content -->
<div class="row row-cols-1 row-cols-md-2 g-4">

  <div v-for="post in AllPosts">
      <div class="col">
        <div class="card">
          <img :src="post.PhotoURL"
                class="card-img-top"
                 alt="This photo isn't working for you">
          <div class="card-body">
            <h5 class="card-title">{{ post.Title }}</h5>
            <p class="card-text">{{ post.Description }}</p>
          </div>
        </div>
      </div>
  </div>


</div>



</template>

<script setup>
import {useMasterStore} from '../../../stores/MasterStore'
import {storeToRefs} from 'pinia'


const masterStore = useMasterStore()

const {AllPosts} = storeToRefs(masterStore)

</script>


<style> 

</style>
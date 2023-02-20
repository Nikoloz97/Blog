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


  <!-- Pagination -->
  <div class="container mt-4">
    <div class="row justify-content-md-center">
      <nav aria-label="Page navigation example">
      <ul class="pagination" style="margin-left: 30%;">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
      </nav>
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
<template>  

<slide-show/>




<div class="container">

    <div class="row">
        <div class="col-8">
            <all-posts/>
        </div>
        <div class="col">
            <side-bio/>
        </div>
    </div>

</div>


</template>

<script setup>
import AllPosts from '../components/Home/Posts/AllPosts.vue';
import SlideShow from '../components/Home/Slideshow.vue';
import SideBio from '../components/Home/Posts/SideBio.vue';

</script>


<style>
</style>
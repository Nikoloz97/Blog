<template>  

<router-link to="/Coding"><button>Coding</button></router-link>
<router-link to="/Health"><button>Health</button></router-link>
<router-link to="/Travel"><button>Travel</button></router-link>

<slide-show/>
<all-posts/>

</template>

<script setup>
import AllPosts from '../components/Home/AllPosts.vue';
import SlideShow from '../components/Home/Slideshow.vue';

</script>


<style>
</style>
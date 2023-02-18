<script setup>
import Navbar from './components/NavBar/Navbar.vue'
import Footer from './components/Footer/Footer.vue'
// 'bootstrap' import = imports popper as well
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

</script>

<template>

  <Navbar/>

  <router-view></router-view>

  <Footer/>


</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

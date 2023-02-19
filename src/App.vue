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

</style>

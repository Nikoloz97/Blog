<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>


  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <div class="container">
  <div class="row">
    <div class="col-2">
      Column
    </div>
    <div class="col-8">
      Column
    </div>
    <div class="col-2">
      Column
    </div>
  </div>
</div>

</template>

<style scoped>

</style>

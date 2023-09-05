<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
        <HelloWorld/>
      <div>
        <RouterLink to="/">Home</RouterLink>
      </div>
      <vs-button type="relief" :active="active == 0" @click="active = 0">
      Active
    </vs-button>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <div>
        <NavBar/>
    </div>
  </header>
  <main class="main-container">
    <RouterView />
  </main>
</template>

<style scoped>
/* .main-container {
  margin: 2rem 0rem 0rem 2rem !important;
  padding-top: 1rem;
} */
</style>

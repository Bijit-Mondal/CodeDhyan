<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar/NavBar.vue'
// import SideStickyNav from './components/SideStickyNav.vue';
import FooterComponent from './components/Footer/FooterComponent.vue';
</script>

<template>
  <header>
    <div>
      <NavBar :login="true"/>
    </div>
  </header>
  <main class="main-container">
    <!-- <SideStickyNav/> -->
    <RouterView />
  </main>
  <footer>
    <FooterComponent/>
  </footer>
</template>

<style scoped>
</style>

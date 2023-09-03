<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
      <vs-button :active="active == 0" @click="active = 0">
        <i class="bx bx-home-alt" /> Home
      </vs-button>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>

<template>
  <div class="center example-nav">
    <vs-navbar v-model="active" shadow shape="round" style="position:fixed;" center-collapsed>
      <template #left>
        <vs-button type="flat" icon @click="activeSidebar = !activeSidebar">
          <MenuIcon/>
        </vs-button>
      </template>
      <template #right>
        <vs-button color="danger" type="flat">Login</vs-button>
        <vs-button style="color:rgb(var(--vs-dark));" color="danger" type="gradient">Get Started</vs-button>
      </template>
    </vs-navbar>
    <vs-sidebar v-model="active" v-model:open="activeSidebar" absolute>
      <template #logo>
        CodeDhyan
      </template>
      <template #header />
      <vs-sidebar-item id="home">
        <span class="menu_items">Home</span>
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <span class="menu_items">Market Overview</span>
      </vs-sidebar-item>
      <vs-sidebar-item id="Music">
        <span class="menu_items">Music</span>
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <span class="menu_items">
                Social media
            </span>
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="Instagram">
          <span class="menu_items">Instagram</span>
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <span class="menu_items">Twitter</span>
        </vs-sidebar-item>
        <vs-sidebar-item id="Facebook">
            <span class="menu_items"> Facebook</span>
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <span class="menu_items">
              Coding
            </span>
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="github">
            <span class="menu_items">Github</span>
        </vs-sidebar-item>
        <vs-sidebar-item id="codepen">  
          <span class="menu_items">Github</span>
        </vs-sidebar-item>
        <vs-sidebar-item id="discord">
          <span class="menu_items">Github</span>
        </vs-sidebar-item>
        <vs-sidebar-item id="Javascript">
          <span class="menu_items">Github</span>
        </vs-sidebar-item>
        <vs-sidebar-item id="git">
          <span class="menu_items">Github</span>
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-item id="donate">
        <span class="menu_items">Github</span>
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
       <span class="menu_items">Github</span>
      </vs-sidebar-item>
      <vs-sidebar-item id="shopping">
        <span class="menu_items">Github</span>
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <span class="menu_items">Github</span>
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="" alt="img" />
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell" />

            <template #badge>28</template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>
<style scoped>
.vs-navbar{
  background: rgb(var(--vs-dark-primary)) !important;
}
.vs-sidebar{
  background: rgb(var(--vs-light-success)) !important;
  border-radius: 20px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
}
.vs-sidebar-item{
  background: rgb(var(--vs-light-success)) !important;
}
.menu_items{
  color: rgb(var(--vs-dark));
}
</style>
<script lang="ts" setup>
import MenuIcon from './icons/MenuIcon.vue'
import { ref } from 'vue'

const active = ref('home')
const activeSidebar = ref(false)
</script>



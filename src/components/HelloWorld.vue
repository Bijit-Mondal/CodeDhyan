<template>
  <div class="hidden">
    <vs-navbar v-model="active" shadow shape="square" center-collapsed>
      <template #left>
        <vs-button type="flat" icon @click="activeSidebar = !activeSidebar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5401 9.06014C15.7701 9.06014 14.3301 7.62014 14.3301 5.85014C14.3301 4.08014 15.7701 2.64014 17.5401 2.64014C19.3101 2.64014 20.7501 4.08014 20.7501 5.85014C20.7501 7.62014 19.3101 9.06014 17.5401 9.06014ZM17.5401 4.13014C16.6001 4.13014 15.8301 4.90014 15.8301 5.84014C15.8301 6.78014 16.6001 7.55014 17.5401 7.55014C18.4801 7.55014 19.2501 6.78014 19.2501 5.84014C19.2501 4.90014 18.4801 4.13014 17.5401 4.13014Z" fill="#292D32"/>
<path d="M6.46001 9.06014C4.69001 9.06014 3.25 7.62014 3.25 5.85014C3.25 4.08014 4.69001 2.64014 6.46001 2.64014C8.23001 2.64014 9.67 4.08014 9.67 5.85014C9.67 7.62014 8.23001 9.06014 6.46001 9.06014ZM6.46001 4.13014C5.52001 4.13014 4.75 4.90014 4.75 5.84014C4.75 6.78014 5.52001 7.55014 6.46001 7.55014C7.40001 7.55014 8.17 6.78014 8.17 5.84014C8.17 4.90014 7.41001 4.13014 6.46001 4.13014Z" fill="#292D32"/>
<path d="M17.5401 21.3702C15.7701 21.3702 14.3301 19.9302 14.3301 18.1602C14.3301 16.3902 15.7701 14.9502 17.5401 14.9502C19.3101 14.9502 20.7501 16.3902 20.7501 18.1602C20.7501 19.9302 19.3101 21.3702 17.5401 21.3702ZM17.5401 16.4402C16.6001 16.4402 15.8301 17.2102 15.8301 18.1502C15.8301 19.0902 16.6001 19.8602 17.5401 19.8602C18.4801 19.8602 19.2501 19.0902 19.2501 18.1502C19.2501 17.2102 18.4801 16.4402 17.5401 16.4402Z" fill="#292D32"/>
<path d="M6.46001 21.3702C4.69001 21.3702 3.25 19.9302 3.25 18.1602C3.25 16.3902 4.69001 14.9502 6.46001 14.9502C8.23001 14.9502 9.67 16.3902 9.67 18.1602C9.67 19.9302 8.23001 21.3702 6.46001 21.3702ZM6.46001 16.4402C5.52001 16.4402 4.75 17.2102 4.75 18.1502C4.75 19.0902 5.52001 19.8602 6.46001 19.8602C7.40001 19.8602 8.17 19.0902 8.17 18.1502C8.17 17.2102 7.41001 16.4402 6.46001 16.4402Z" fill="#292D32"/>
</svg>
        </vs-button>
      </template>
      <template #right>
        <vs-button type="flat">Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <vs-sidebar v-model="active" v-model:open="activeSidebar" absolute>
      <template #logo>
        <svg
          class="logo-nav"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 401.69 98.4"
        >
          <g id="Capa_2" data-name="Capa 2">
            <g id="Capa_1-2" data-name="Capa 1">
              <path
                d="M105.79,27.23h12.78l16.12,44.65L150.9,27.23h12.77L141.48,85.56h-13.4Z"
              />
              <path
                d="M168.29,82.12Q164,77.77,164,69.53V42.63h12.23V69.26q0,4.26,2,6.25c1.36,1.33,3.45,2,6.29,2a13.73,13.73,0,0,0,5.75-1.22A16,16,0,0,0,195,73.06V42.63h12.22V85.56H195.91l-.45-4.08a23.47,23.47,0,0,1-15.12,5Q172.54,86.47,168.29,82.12Z"
              />
              <path
                d="M222.22,80.8q-6.37-5.65-6.38-16.8,0-10.5,5.57-16.39t16.26-5.89q9.78,0,15.17,5.12t5.39,13.72v7.79H227.16c.6,3.32,2.13,5.65,4.57,7s6.06,2,10.83,2a39.59,39.59,0,0,0,7-.64,31.7,31.7,0,0,0,6.11-1.63v8.7q-6,2.72-15.67,2.72Q228.61,86.47,222.22,80.8Zm25.32-20V58.48q0-8-9.51-8c-4,0-6.79.8-8.42,2.4s-2.45,4.24-2.45,7.92Z"
              />
              <path
                d="M272.81,85.83a31.36,31.36,0,0,1-7.07-1.72V74a31.67,31.67,0,0,0,7,1.94,44,44,0,0,0,7.52.68,23.39,23.39,0,0,0,6.47-.59,2.33,2.33,0,0,0,1.77-2.4,2.8,2.8,0,0,0-1.63-2.53,39.68,39.68,0,0,0-6.25-2.36c-.91-.24-2.06-.6-3.44-1.08q-6.35-2.09-9.29-5c-2-1.93-2.94-4.64-2.94-8.15q0-6.24,4.57-9.51t14.36-3.26a47.58,47.58,0,0,1,7.29.55,34.85,34.85,0,0,1,6.2,1.45V53.77a24.42,24.42,0,0,0-5.52-1.72,30.87,30.87,0,0,0-6-.64,25.74,25.74,0,0,0-6.43.59c-1.39.4-2.08,1.17-2.08,2.31a2.47,2.47,0,0,0,1.49,2.31,38.75,38.75,0,0,0,5.75,2l3,.91A34.78,34.78,0,0,1,295.63,63a10.69,10.69,0,0,1,4,4.21,13.91,13.91,0,0,1,1.23,6.25q0,6.43-4.8,9.74t-14.22,3.31A63,63,0,0,1,272.81,85.83Z"
              />
              <path
                d="M312,83q-4.39-3.49-4.39-9.83A12.49,12.49,0,0,1,312.16,63q4.57-3.75,13.18-3.76H338V58a8.13,8.13,0,0,0-.95-4.26,5.63,5.63,0,0,0-3.35-2.26,24.6,24.6,0,0,0-6.84-.73A44.66,44.66,0,0,0,312.75,53v-8.6a36,36,0,0,1,7.47-2,55.67,55.67,0,0,1,9.19-.73q20.29,0,20.29,16.58V85.56H339.11l-.64-3.89q-5.25,4.8-15.58,4.8A17,17,0,0,1,312,83Zm21.19-5.89A12.69,12.69,0,0,0,338,73.6V66.81H325.61q-7.16,0-7.15,5.89,0,5.7,7.78,5.7A17.2,17.2,0,0,0,333.17,77.09Z"
              />
              <path
                d="M372,63.73l-15.85-21.1h13.23l9.24,12.5,9.23-12.5h13.23L385.3,63.73l16.39,21.83H388.38L378.6,72.43l-9.79,13.13H355.5Z"
              />
              <polygon
                points="92.25 8.05 75.25 8.05 46.14 53.12 17.04 8.05 0.04 8.05 46.15 79.45 92.25 8.05"
              />
              <polygon
                points="46.15 87.39 7.11 26.94 0 26.94 46.14 98.4 92.29 26.94 85.18 26.94 46.15 87.39"
              />
              <polygon
                points="70.34 1.37 46.14 38.17 21.95 1.37 39.75 5.87 39.75 0 52.54 0 52.54 5.87 70.34 1.37"
              />
            </g>
          </g>
        </svg>
      </template>
      <template #header />
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="bx bx-home" />
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <template #icon>
          <i class="bx bx-grid-alt" />
        </template>
        Market Overview
      </vs-sidebar-item>
      <vs-sidebar-item id="Music">
        <template #icon>
          <i class="bx bxs-music" />
        </template>
        Music
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-group" />
            </template>
            Social media
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="Instagram">
          <template #icon>
            <i class="bx bxl-instagram" />
          </template>
          Instagram
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <template #icon>
            <i class="bx bxl-twitter" />
          </template>
          Twitter
        </vs-sidebar-item>
        <vs-sidebar-item id="Facebook">
          <template #icon>
            <i class="bx bxl-facebook" />
          </template>
          Facebook
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-code-alt" />
            </template>
            Coding
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="github">
          <template #icon>
            <i class="bx bxl-github" />
          </template>
          Github
        </vs-sidebar-item>
        <vs-sidebar-item id="codepen">
          <template #icon>
            <i class="bx bxl-codepen" />
          </template>
          Codepen
        </vs-sidebar-item>
        <vs-sidebar-item id="discord">
          <template #icon>
            <i class="bx bxl-discord" />
          </template>
          Discord
        </vs-sidebar-item>
        <vs-sidebar-item id="Javascript">
          <template #icon>
            <i class="bx bxl-javascript" />
          </template>
          Javascript
        </vs-sidebar-item>
        <vs-sidebar-item id="git">
          <template #icon>
            <i class="bx bxl-git" />
          </template>
          Git
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-item id="donate">
        <template #icon>
          <i class="bx bxs-donate-heart" />
        </template>
        Donate
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
        <template #icon>
          <i class="bx bx-drink" />
        </template>
        Drink
      </vs-sidebar-item>
      <vs-sidebar-item id="shopping">
        <template #icon>
          <i class="bx bxs-shopping-bags" />
        </template>
        Shopping
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class="bx bx-chat" />
        </template>
        Chat
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="" />
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell" />

            <template #badge> 28 </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref('home')
const activeSidebar = ref(false)
</script>



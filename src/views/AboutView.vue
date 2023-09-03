<template>
  <div class="center">
    <vs-card type="3">
      <template #title>
        <h3>Live a life of madness</h3>
      </template>
      <template #img>
        <img src="/foto1.png" alt="" />
      </template>
      <template #text>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </template>
      <template #interactions>
        <vs-button color="danger" icon>
          <i class="bx bx-heart" />
        </vs-button>
        <vs-button class="btn-chat" type="shadow">
          <i class="bx bx-chat" />
          <span class="span"> 54 </span>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

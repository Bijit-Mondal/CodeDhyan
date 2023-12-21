<template>
  <div class="navbar">
    <CodeDhyanLogo svg="3rem" flex="column" fontSize="1.5rem" />
    <div class="links">
      <NavBarLinks title="About" link="#" fontSize="1rem"/>
      <NavBarLinks title="Members" link="#" fontSize="1rem" />
      <NavBarLinks title="Past Events" link="#" fontSize="1rem" />
      <NavBarLinks title="Forum" link="#" fontSize="1rem" />
      <NavBarLinks title="Announcement" link="#" fontSize="1rem" />
      <CustomButton v-if="login">
          <template #context>Log in</template>
      </CustomButton>
      <ThemeSlider />
    </div>
  </div>
</template>


<script>
import CodeDhyanLogo from '../icons/CodeDhyanLogo.vue';
import NavBarLinks from './NavBarLinks.vue';
import CustomButton from '../CustomWidgets/Button/CustomButton.vue';
import ThemeSlider from './ThemeSlider.vue';

export default {
  components: {
    CodeDhyanLogo,
    NavBarLinks,
    CustomButton,
    ThemeSlider
  },
  props : {
    login: Boolean,
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  background: rgb(var(--bg));
  padding: 1rem 4rem;
  border-bottom: 0.1rem solid rgb(var(--text));
}

.links {
  display: flex;
  align-items: center;
  gap: 4rem;
}
</style>
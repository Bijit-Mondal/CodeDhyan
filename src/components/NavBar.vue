<template>
  <div class="navbar">
    <logo svg="3rem" flex="column" fontSize="1.5rem"/>
    <div class="links">
    <links title="About" link="#" fontSize="1rem"/>
    <links title="Members" link="#" fontSize="1rem"/>
    <links title="Past Events" link="#" fontSize="1rem"/>
    <links title="Forum" link="#" fontSize="1rem"/>
    <links title="Announcement" link="#" fontSize="1rem"/>
    <customButton title="Log In"/>
    <ThemeSlider/>
  </div>
  </div>
</template>


<script>
import CodeDhyanLogo from './codeDhyanLogo.vue';
import navbarLinks from './navbarLinks.vue';
import customButton from './button.vue';
import ThemeSlider from './themeSlider.vue';

export default {
  components: {
    logo: CodeDhyanLogo,
    links: navbarLinks,
    customButton: customButton,
    ThemeSlider
}
}
</script>

<style scoped>
  .navbar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(var(--bg));
    padding: 0rem 4rem;
    padding-top: 2rem;
  }
  .links{
    display: flex;
    align-items: center;
    gap: 4rem;
  }
</style>
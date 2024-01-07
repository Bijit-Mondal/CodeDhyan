<template>
  <div style="display: flex;">
    <input type="checkbox" id="toggle" v-model="isChecked" @change="toggleTheme">
    <label for="toggle" class="slider">
    </label>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const isChecked = ref(false);
    const userTheme = ref('light-theme');

    const setTheme = (theme) => {
      localStorage.setItem('user-theme', theme);
      userTheme.value = theme;
      document.documentElement.className = theme;
    };

    const toggleTheme = () => {
      const activeTheme = localStorage.getItem('user-theme');
      if (activeTheme === 'light-theme') {
        setTheme('dark-theme');
      } else {
        setTheme('light-theme');
      }
    };

    const getMediaPreference = () => {
      const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return hasDarkPreference ? 'dark-theme' : 'light-theme';
    };

    const getTheme = () => {
      return localStorage.getItem('user-theme');
    };

    onMounted(() => {
      const initUserTheme = getTheme() || getMediaPreference();
      console.log(initUserTheme);
      isChecked.value = initUserTheme === 'dark-theme';
      setTheme(initUserTheme);
    });

    return { isChecked, toggleTheme };
  },
};
</script>

<style scoped>
.slider {
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0.3rem 0rem;
  height: 2.5rem;
  width: 1.2rem;
  background: rgb(var(--vs-primary));
  border-radius: 36px;
  cursor: pointer;
}

.slider::after {
  content: "";
  border-radius: 8rem;
  background: rgb(var(--text));
  width: 0.8rem;
  height: 0.8rem;
  transition: 0.3s;

}

input {
  display: none;
}

input:checked+.slider {
  background: #919191;
  --bg: 38, 42, 56;
}

input:checked+.slider::after {
  background: #000;
  transform: translateY(150%);
  transition: 0.3s;

}

@media screen and (max-width: 650px) {
  .slider {
    height: 2rem;
    width: 1rem;
  }

  .slider::after {
    height: 0.6rem;
    width: 0.6rem;
  }

}

@media screen and (max-width: 450px) {
  .slider {
    height: 2.5rem;
    width: 1.2rem;
    rotate: 90deg;
  }

  .slider::after {
    height: 0.8rem;
    width: 0.8rem;
  }

}
</style>
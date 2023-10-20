<template>
    <div style="display: flex;">
    <input type="checkbox" id="toggle" v-model="isChecked" @change="toggleTheme">
    <label for="toggle" class="slider" onclick="slide()">
    </label>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle("changeTheme", this.isChecked);
    },
  },
};
</script>

<style scoped>
.slider {
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 0.2rem 0rem;
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

input{
    visibility: hidden;
}

input:checked + .slider {
    background: #919191;
    align-items: end;
    --bg: 38, 42, 56;
}

input:checked + .slider::after {
    background: #000;
    transition: 0.3s;

}
</style>
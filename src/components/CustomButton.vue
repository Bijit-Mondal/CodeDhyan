<template>
    <button class="button">
        {{title}}
    </button>
</template>

<script>
export default {
    props: {
        title: String,
    }
}
</script>

<style scoped>
.button {
    padding: 0.5rem 2rem;
    border-radius: 77px;
    background: rgb(var(--vs-primary));
    box-shadow: 2px 4px 4px 0px rgba(var(--vs-primary), 0.15);
    border: 0;
    color: #fff;
    font-family: Josefin Sans;
    font-weight: 600;
}
</style>
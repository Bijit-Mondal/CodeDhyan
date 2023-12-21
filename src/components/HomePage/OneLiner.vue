<template>
    <div class="section">
        <slot name="image"></slot>
        <div class="text">
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OneLiner',
}
</script>

<style scoped>
.section {
    display: flex;
    flex-direction: column;
    width: 40%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.text{
    text-align: center;
    color: rgb(var(--vs-primary));
    font-family: Josefin Sans;
    font-weight: 700;
    font-size: 2.5rem;
}
</style>
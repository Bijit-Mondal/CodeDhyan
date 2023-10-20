<template>
    <div class="forum" :style="{'margin-bottom': margin}">
        <div></div>
    </div>
</template>

<script>
export default {
    props: {
        margin: String,
    }
}
</script>

<style scoped>

.forum{
    width: 100%;
    display: flex;
    justify-content: center;
}
.forum div {
    width: 900px;
    height: 485px;
    border-radius: 36px;
    border: 6px solid #433763;
    background: #A09C9C;
    box-shadow: 20px 20px 38px 0px rgba(0, 0, 0, 0.68);
}
</style>
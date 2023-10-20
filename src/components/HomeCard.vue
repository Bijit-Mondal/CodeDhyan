<template>
    <div class="card">
        <img :src="image" :alt="altTag" />
        <div class="title">
            {{ title }}
        </div>
        <div class="description">
            {{ description }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            image: String,
            altTag: String,
            title: String,
            description: String
        }
    }
</script>

<style scoped>
    .card{
        display: flex;
        flex-direction: column;
        width: max(31%,100px);
        height: 100%;
        padding: 20px;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    .title{
        color: rgb(var(--text));
        text-align: center;
        font-weight: 500;
        font-size: x-large;
        font-family: Josefin Sans;
    }
    .description{
        color: rgb(var(--text));
        text-align: center;
        font-weight: 300;
        font-size: medium;
        padding: 0px 40px;
        font-family: Josefin Sans;
    }
</style>
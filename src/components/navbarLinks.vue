<template>
        <a class="title" :style="{'font-size': fontSize}" v-if="!rotate" :href="link">{{ title }}</a>
        <a class="title rotate" :style="{'font-size': fontSize}" v-if="rotate" :href="link">{{ title }}</a>
</template>

<script>
    export default {
        props: {
            title: String,
            fontSize: String,
            link: String,
            rotate: Boolean
        }
    }
</script>

<style scoped>
    .title{
        color: rgb(var(--text));
        font-family: Josefin Sans;
    }

    .rotate{
        color: #fff;
        transform: rotate(90deg);
    }

    .title:hover{
        color: rgb(var(--vs-primary));
        text-underline-offset: 0.2rem;
    }

    .rotate:hover{
        color: #000;
        transform: rotate(90deg);
    }
</style>
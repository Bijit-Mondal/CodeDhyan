<template>
    <div class="title" :style="{'font-size': fontSize}">
        <a :href="link">{{ title }}</a>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            fontSize: String,
            link: String
        }
    }
</script>

<style scoped>
    .title{
        color: rgb(var(--text));
        font-family: Josefin Sans;
        
    }
</style>
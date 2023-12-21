<template>
    <div class="ImageText" :style="{'flex-direction': direction}">
        <slot name="svg"></slot>
        <div class="TitleDescription">
            <div class="title" :style="{'text-align': align}">
                <slot name="title"></slot>
            </div>
            <div class="description" :style="{'text-align': align}">
                <slot name="description"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            direction: String,
            align: String,
        }
    }

</script>

<style scoped>
    .ImageText{
        display: flex;
        width: 100%;
        padding: 1rem 4rem;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .TitleDescription{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 40rem;
        justify-content: left;
    }

    .title{
        font-family: Josefin Sans;
        font-weight: 700;
        color: rgb(var(--text));
        font-size: 5rem;
        line-height: 100%;
    }
    .description{
        font-family: Outfit-Light;
        color: rgb(var(--text));
        font-size: 2rem;
    }
</style>
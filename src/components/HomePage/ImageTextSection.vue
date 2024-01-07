<template>
    <div class="ImageText" :class="imageTextDirection">
        <img :src="svg"/>
        <div class="TitleDescription">
            <div class="title" >
                <slot name="title"></slot>
            </div>
            <div class="ImageTextdescription" >
                <slot name="description"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            imageTextDirection: String,
            align: String,
            svg: String
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
        font-size: 4rem;
        line-height: 100%;
    }
    .ImageTextdescription{
        font-family: Outfit-Light;
        color: rgb(var(--text));
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {

        .ImageText{
            padding: 1rem 8rem;
        }
        .ImageText > img {
            width: 12rem;
        }

        .TitleDescription {
            width: 25rem;
        }

        .title {
            font-size: 2.2rem;
        }

        .ImageTextdescription {
            font-size: 1rem;
        }
    }

    @media (max-width: 530px) {

        .ImageText{
            margin-bottom: 2rem;
        }
        .ImageText > img {
            width: min(70vw, 250px);
        }

        .TitleDescription {
            width: 80vw;
        }
    }
</style>
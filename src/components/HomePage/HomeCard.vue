<template>
    <div class="card">
        <img :src="image" :alt="altTag" />
        <div class="title">
            <slot name="title">title</slot>
        </div>
        <div class="description">
            <slot name="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi in incidunt
                nihil ullam deserunt asperiores cumque fuga dolor similique!</slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        altTag: String,
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    width: 31%;
    height: 100%;
    padding: 20px;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.title {
    color: rgb(var(--text));
    text-align: center;
    font-weight: 500;
    font-size: x-large;
    font-family: Josefin Sans;
}

.description {
    color: rgb(var(--text));
    text-align: center;
    font-weight: 300;
    font-size: medium;
    padding: 0px 40px;
    font-family: Josefin Sans;
}

@media (max-width: 1024px) {
    .card {
        width: 45%;
    }
}

@media (max-width: 768px) {
    .card {
        padding: 0px 0px 0px 0px;
        width: 45%;
    }

    .card>img {
        width: 10rem;
    }

    .description {
        padding: 0px;
    }
}

@media (max-width: 530px) {
    .card{
        width: 60%;
    }

    .card > img {
        width: max(50vw, 200px);
    }
}
</style>
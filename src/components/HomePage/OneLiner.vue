<template>
    <div class="section">
        <img :src="img"/>
        <div class="text">
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OneLiner',
    props: {
        img: String,
    }
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

.text {
    text-align: center;
    color: rgb(var(--vs-primary));
    font-family: Josefin Sans;
    font-weight: 700;
    font-size: 2.5rem;
}

@media (max-width: 768px) {
    .section{
        width: 30%;
    }

    .text{
        font-size: 1.5rem;
    }
}

@media (max-width: 530px) {

    .section { 
        width: 60vw;
    }
    .text{
        font-size: 8vw;
    }
}
</style>
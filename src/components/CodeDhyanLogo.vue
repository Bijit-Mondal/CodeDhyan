<template>
    <div class="logo" :style="{'flex-direction': flex}">
        <svg :style="{ 'width': svg, 'height': svg }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 41" fill="none">
            <path
                d="M2.06522 22.445C1.29665 21.3992 1.29665 19.9754 2.06522 18.9296L9.59545 8.68359C10.7815 7.06981 13.1926 7.06981 14.3786 8.68359L21.9088 18.9296C22.6774 19.9754 22.6774 21.3992 21.9088 22.445L14.3786 32.691C13.1926 34.3048 10.7815 34.3048 9.59545 32.691L2.06522 22.445Z"
                fill="#7A5BC7" />
            <path
                d="M24.5965 22.6484C23.8279 21.6026 23.8279 20.1788 24.5965 19.133L32.1267 8.88696C33.3127 7.27318 35.7238 7.27318 36.9099 8.88696L44.4401 19.133C45.2087 20.1788 45.2087 21.6026 44.4401 22.6484L36.9099 32.8944C35.7238 34.5082 33.3127 34.5082 32.1267 32.8944L24.5965 22.6484Z"
                fill="#7A5BC7" />
            <path
                d="M9.42609 22.1664C8.65392 21.1191 8.65392 19.691 9.42609 18.6437L20.7833 3.24003C21.9696 1.63113 24.3749 1.63113 25.5611 3.24002L36.9184 18.6437C37.6905 19.691 37.6905 21.1191 36.9184 22.1664L25.5611 37.5701C24.3749 39.179 21.9696 39.179 20.7833 37.5701L9.42609 22.1664Z"
                fill="#C5B4F0" />
        </svg>
        <div class="text" :style="{'font-size': fontSize}">
            Codedhyan
        </div>
    </div>
</template>

<script>
export default {
    props: {
        svg: String,
        flex: String,
        fontSize: String
    }
}
</script>

<style scoped>
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text{
        font-family: Jockey One;
        color: rgb(var(--text));
        font-weight: 400;
        text-align: center;
    }
</style>
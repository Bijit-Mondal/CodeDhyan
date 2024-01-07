<template>
    <div class="searchbar" :class="searchbarClass">
        <svg :class="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2 16.5291C2.00008 9.59807 6.89626 3.63238 13.6941 2.28047C20.492 0.928569 27.2983 4.56702 29.9501 10.9706C32.6021 17.3743 30.3611 24.7594 24.5978 28.6094C18.8346 32.4595 11.1541 31.7022 6.25376 26.8006C3.53004 24.0762 1.99995 20.3814 2 16.5291Z"
                stroke="#7A5BC7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M31.0531 31.0543L37.28 37.2812" stroke="#7A5BC7" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
        <input type="text">
    </div>
</template>

<script>
export default {
    props: {
        searchbarClass: String,
        svgClass: String,
    },

};
</script>

<style scoped>

.searchbar{
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0rem 1rem;
    border-radius: 15px;
    border: 3px solid rgb(var(--vs-dark-primary));
    background: rgb(var(--vs-light-success));
}

.searchbar input{
    width: 100%;
    background: rgba(0,0,0,0);
    border: none;
}
</style>
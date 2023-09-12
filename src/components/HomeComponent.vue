<template>
    <div class="landing-page">
        <div class="background-image"></div>
        <div class="content">
            <h1 class="centered-heading">CodeDhyan</h1>
            <p class="description">
                Be part of community, Be part of
                Coding culture.
                CodeDhyan is a hub for both beginners and experts, students and researchers at RKMVCC, Rahara.    
            </p>
            <vs-button class="action-button" size="large">Join Here</vs-button>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.landing-page {
    display: flex;
    justify-content: flex-start; /* Align content at the left */
    align-items: center; /* Vertically center content */
    min-height: 100vh;
    position: relative;
    overflow: hidden;
}

.background-image {
    position: absolute;
    width: 110%;
    height: 110%;
    background-image: url("../assets/img/bg.jpg");
    background-size: auto;
    background-position: center;
    filter: blur(2px);
    z-index: -1;
}

.content {
    z-index: 1;
    padding: 2rem 2rem 2rem 10%; /* Add left padding for spacing */
}

.centered-heading {
    font-size: 2.5rem;
    font-weight: bold;
    color: rgb(var(--vs-danger));
}

.description {
    font-size: 1.25rem;
    color: #fff;
    margin-top: 20px;
    width: 30%;
}

.action-button {
    font-size: 1rem;
    padding: 7px 7px;
    margin-top: 2em;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .content {
        padding: 2rem; /* Adjust padding for smaller screens */
    }
    .description {
        width: 100%;
    }
    .background-image{
        filter: blur(10px);
    }
}
</style>

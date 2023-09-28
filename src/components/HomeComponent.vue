<template>
    <div class="landing-page">
        <div class="background-image"></div>
        <div class="content">
            <h1 class="centered-heading">CODEDHYAN</h1>
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
    background-color: rgb(var(--vs-bg-success));
    background-size: auto;
    background-position: center;
    z-index: -1;
}

.content {
    z-index: 1;
    padding: 2rem 2rem 2rem 10%; /* Add left padding for spacing */
}

.centered-heading {
    font-family: Aware !important;
    font-size: 3.2rem;
    font-weight: bold;
    background:rgb(var(--vs-dark-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.description {
    font-size: 1.8rem;
    color: rgb(var(--vs-dark));
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
        padding: 1rem; /* Adjust padding for smaller screens */
    }
    .description {
        font-size: 1.5rem;
        width: 90%;
    }
    .centered-heading{
        font-size: 2.8rem;
    }
}
</style>

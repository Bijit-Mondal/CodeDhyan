<template>
    <div class="landing-page">
        <div class="background-image"></div>
        <div class="content">
            <div class="description">
                Be part of community, Be part of
                Coding culture.
                CodeDhyan is a hub for both beginners and experts, students and researchers at RKMVCC, Rahara.
            </div>
            <ForumPic margin="2rem" />
            <div class="search">
                <search w="600px" h="40px" svg="20px" />
            </div>
            <div class="cardview">
                <card title="Get like minded people"
                    description="CodeDhyan unlocks a vast repository of knowledge and support for tackling coding-related challenges and access to a vibrant community of like-minded enthusiasts."
                    image="src/assets/img/get_like_minded_people.svg" altTag="Get Like Minded People" />
                <card title="Know latest conding trends"
                    description="Get introduced to latest technological news which will help you stay notified on the latest coding trends. Don't get lost in 'what', 'why' and 'how', move on with expertise knowledge."
                    image="src/assets/img/know_latest_coding_trends.svg" altTag="Know latest conding trends" />
                <card title="Solve your doubts"
                    description="CodeDhyan is backed by both teachers and students, so never miss out on any doubt we are always ready to solve any coding challenge. Look out for solutions on similar doubts."
                    image="src/assets/img/Solve_your_doubts.svg" altTag="Solve your doubts" />
            </div>
        </div>
    </div>
</template>

<script>
import card from './HomeCard.vue';
import ForumPic from './forumPic.vue';
import search from './searchbar.vue';

export default {
    components: {
        card: card,
        search: search,
        ForumPic: ForumPic
    }
}
</script>

<style scoped>
.landing-page {
    display: flex;
    justify-content: flex-start;
    /* Align content at the left */
    align-items: center;
    /* Vertically center content */
    min-height: 100vh;
    position: relative;
    overflow: hidden;
}

.search {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
}

.cardview {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
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
    padding-top: 4rem;
    background-color: rgb(var(--bg));
    z-index: 1;
}

.description {
    display: flex;
    width: 100%;
    font-size: 2rem;
    color: rgb(var(--text));
    padding: 2rem 6rem;
    text-align: center;
    font-family: Josefin Sans;
    font-weight: 400;
}

.action-button {
    font-size: 1rem;
    padding: 7px 7px;
    margin-top: 2em;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .content {
        padding: 1rem;
        /* Adjust padding for smaller screens */
    }

    .description {
        font-size: 1.5rem;
        width: 90%;
    }

    .centered-heading {
        font-size: 2.8rem;
    }
}
</style>

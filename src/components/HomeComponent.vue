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
                <Search w="600px" h="40px" svg="20px" />
            </div>
            <div class="cardview">
                <HomeCard title="Get like minded people"
                    description="CodeDhyan unlocks a vast repository of knowledge and support for tackling coding-related challenges and access to a vibrant community of like-minded enthusiasts."
                    image="src/assets/img/get_like_minded_people.svg" altTag="Get Like Minded People" />
                <HomeCard title="Know latest conding trends"
                    description="Get introduced to latest technological news which will help you stay notified on the latest coding trends. Don't get lost in 'what', 'why' and 'how', move on with expertise knowledge."
                    image="src/assets/img/know_latest_coding_trends.svg" altTag="Know latest conding trends" />
                <HomeCard title="Solve your doubts"
                    description="CodeDhyan is backed by both teachers and students, so never miss out on any doubt we are always ready to solve any coding challenge. Look out for solutions on similar doubts."
                    image="src/assets/img/Solve_your_doubts.svg" altTag="Solve your doubts" />
            </div>
            <ImageTextSection direction="row" align="left">
                <template v-slot:svg><img src="src/assets/img/event_announcement.svg"></template>
                <template v-slot:title>Event Announcements</template>
                <template v-slot:description>Get notified on latest events at Ramakrishna Mission Vivekananda Centenary
                    College, Rahara at CodeDhyan</template>
            </ImageTextSection>
            <ImageTextSection direction="row-reverse" align="right">
                <template v-slot:svg><img src="src/assets/img/coding_related_blogs.svg"></template>
                <template v-slot:title>Coding related blogs</template>
                <template v-slot:description>Get extensive coding and technology related blog posts from top contributors
                    and teachers</template>
            </ImageTextSection>
            <div class="secret-section">
                <div class="secret-title">
                    Here’s a secret
                </div>
                <div class="secret-description">
                    CodeDhyan features a Stack Overflow like interface for communicating problems and answers. It is free
                    for all and will remain free forever
                </div>
            </div>
            <div class="one-liner">
                <Oneliner>
                    <template v-slot:image>
                        <img src="src\assets\img\got_question.svg">
                    </template>
                    <template v-slot:text>
                        Got Question?
                    </template>
                </Oneliner>
                <Oneliner>
                    <template v-slot:image>
                        <img src="src\assets\img\visit_codedhyan.svg">
                    </template>
                    <template v-slot:text>
                        Visit CodeDhyan
                    </template>
                </Oneliner>
            </div>
            <div class="one-liner">
                <Oneliner>
                    <template v-slot:image>
                        <img src="src\assets\img\learn_and_enjoy.svg">
                    </template>
                    <template v-slot:text>
                        Learn and Enjoy
                    </template>
                </Oneliner>
            </div>
        </div>
    </div>
</template>

<script>
import HomeCard from './HomeCard.vue';
import ForumPic from './ForumPic.vue';
import Search from './SearchBar.vue';
import ImageTextSection from './ImageTextSection.vue';
import Oneliner from './OneLiner.vue';

export default {
    components: {
    HomeCard,
    Search,
    ForumPic,
    ImageTextSection,
    Oneliner,
}
}
</script>

<style scoped>
.landing-page {
    padding-top: 4rem;
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

.secret-section {
    display: flex;
    width: 100%;
    padding: 0rem 20rem;
    margin: 2rem 0rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.secret-title {
    font-family: Josefin Sans;
    font-weight: 700;
    font-size: 2.5rem;
    color: rgb(var(--text));
}

.secret-description {
    text-align: center;
    font-family: Outfit-Light;
    line-height: 120%;
    font-size: 2.8rem;
    color: rgba(var(--vs-primary), 0.6);
}

.one-liner{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
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
}</style>

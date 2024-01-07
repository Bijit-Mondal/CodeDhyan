<template>
    <div class="landing-page">
        <div class="content">
            <div class="homedescription">
                Be part of community, Be part of
                Coding culture.
                CodeDhyan is a hub for both beginners and experts, students and researchers at RKMVCC, Rahara.
            </div>
            <ForumPic margin="2rem" />
            <div class="search">
                <Search w="600px" h="40px" svg="20px" svgClass="searchsvg" searchbarClass="searchbar" />
            </div>
            <div class="cardview">
                <HomeCard image="src/assets/img/get_like_minded_people.svg" altTag="Get Like Minded People">
                    <template v-slot:title>Get like minded people</template>
                    <template v-slot:description>CodeDhyan unlocks a vast repository of knowledge and support for tackling
                        coding-related challenges and access to a vibrant community of like-minded enthusiasts.</template>
                </HomeCard>
                <HomeCard image="src/assets/img/know_latest_coding_trends.svg" altTag="Know latest conding trends">
                    <template v-slot:title>Know latest conding trends</template>
                    <template v-slot:description>Get introduced to latest technological news which will help you stay
                        notified on the latest coding trends. Don't get lost in 'what', 'why' and 'how', move on with
                        expertise knowledge.</template>
                </HomeCard>
                <HomeCard image="src/assets/img/Solve_your_doubts.svg" altTag="Solve your doubts">
                    <template v-slot:title>Solve your doubts</template>
                    <template v-slot:description>CodeDhyan is backed by both teachers and students, so never miss out on any
                        doubt we are always ready to solve any coding challenge. Look out for solutions on similar
                        doubts.</template>
                </HomeCard>
            </div>
            <ImageTextSection imageTextDirection="imageTextDirection1" align="left"
                svg="src/assets/img/event_announcement.svg">
                <template v-slot:title>Event Announcements</template>
                <template v-slot:description>Get notified on latest events at Ramakrishna Mission Vivekananda Centenary
                    College, Rahara at CodeDhyan</template>
            </ImageTextSection>
            <ImageTextSection imageTextDirection="imageTextDirection2" align="right"
                svg="src/assets/img/coding_related_blogs.svg">
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
                <OneLiner img="src\assets\img\got_question.svg">
                    <template v-slot:text>
                        Got Question?
                    </template>
                </OneLiner>
                <OneLiner img="src\assets\img\visit_codedhyan.svg">
                    <template v-slot:text>
                        Visit CodeDhyan
                    </template>
                </OneLiner>
            
                <OneLiner img="src\assets\img\learn_and_enjoy.svg">
                    <template v-slot:text>
                        Learn and Enjoy
                    </template>
                </OneLiner>
            </div>
            <div class="welcome">
                <span>Welcome to the RKMVCC Code Club</span>
                <CustomButton>
                    <template #context>Log in</template>
                </CustomButton>
            </div>
        </div>
    </div>
</template>

<script>
import HomeCard from './HomePage/HomeCard.vue';
import ForumPic from './HomePage/ForumPic.vue';
import CustomButton from './CustomWidgets/Button/CustomButton.vue';
import Search from './icons/SearchBar.vue';
import ImageTextSection from './HomePage/ImageTextSection.vue';
import OneLiner from './HomePage/OneLiner.vue';

export default {
    components: {
        HomeCard,
        CustomButton,
        Search,
        ForumPic,
        ImageTextSection,
        OneLiner,
    }
}
</script>

<style>
.searchsvg {
    width: 20px;
    height: 20px;
}

.searchbar {
    width: min(60vw, 800px);
    height: max(2.5vw, 30px);
}

.landing-page {
    padding-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
    width: 100%;
    justify-content: space-around;
    align-items: center;
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

.one-liner {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    background-color: rgb(var(--bg));
    z-index: 1;
}

.homedescription {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: max(0.2rem, 3vw);
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

.welcome {
    margin-top: 5rem;
    padding: 0rem 10rem 0rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: rgb(var(--vs-primary));
}

.welcome>span {
    font-size: 2rem;
}

.imageTextDirection1 {
    flex-direction: row;
    text-align: start;
}

.imageTextDirection2 {
    flex-direction: row-reverse;
    text-align: end;
}

@media (max-width: 1200px) {
    .welcome {
        padding: 0rem 2rem 0rem 2rem;
    }
}

@media (max-width: 768px) {
    .landing-page {
        padding-top: 5.5rem;
    }

    .description {
        font-size: 1.5rem;
    }

    .centered-heading {
        font-size: 2.8rem;
    }

    .cardview {
        padding: 5rem;
    }

    .secret-section {
        padding: 0rem 5rem;
    }

    .secret-description {
        font-size: 2rem;
    }

    .one-liner {
        justify-content: space-around;
    }

    .welcome>span {
        font-size: 1.5rem;
    }
}

@media (max-width: 530px) {
    .homedescription {
        font-size: 1rem;
        width: 95vw;
        padding: 2rem 2rem;
    }

    .content {
        padding-top: 2.5rem;
    }

    .search {
        margin-bottom: 0rem;
    }

    .cardview {
        flex-direction: column;
        gap: 5rem;
    }

    .imageTextDirection1, .imageTextDirection2 {
        flex-direction: column;
        text-align: center;
    }

    .secret-title{
        font-size: max(1rem, 10vw);
    }

    .secret-description{
        font-size: max(1rem, 5vw);
        width: 90vw;
    }

    .one-liner{
        flex-direction: column;
    }

    .welcome {
        margin-top: 3rem;
        flex-direction: column;
        gap: 1rem;
    }

    .welcome > span {
        font-size: min(1.5rem, 5vw);
    }
}

@media (max-width: 450px) {
    .content {
        padding-top: 0.5rem;
    }
}
</style>

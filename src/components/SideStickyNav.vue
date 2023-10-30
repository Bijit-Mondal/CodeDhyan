
<template>
    <div class="fixedDiv">
        <table class="table">
            <tbody>
                <td>
                    <NavBarLinks title="About" link="#" fontSize="1rem" :rotate="true" />
                </td>
                <td>
                    <NavBarLinks title="Members" link="#" fontSize="1rem" :rotate="true" />
                </td>
                <td>
                    <NavBarLinks title="Past Events" link="#" fontSize="1rem" :rotate="true" />
                </td>
                <td>
                    <NavBarLinks title="Forum" link="#" fontSize="1rem" :rotate="true" />
                </td>
                <td>
                    <NavBarLinks title="Announcement" link="#" fontSize="1rem" :rotate="true" />
                </td>
                <td>
                </td>
            </tbody>
        </table>
    </div>
</template>


<script>
import NavBarLinks from './NavBarLinks.vue';

export default {
    components: {
        NavBarLinks,
    }
}

</script>


<style scoped>
.fixedDiv {
    display: flex;
    flex-direction: column;
    z-index: 10;
    height: 80%;
    width: auto;
    position: fixed;
    right: 0;
    background-color: rgb(var(--vs-primary));
    border-radius: 1rem 0rem 0rem 1rem;
    justify-content: space-around;
    align-items: center;
}

.table {
    text-align: center;
    height: 100%;
    writing-mode: vertical-rl;
    padding: 1rem;
}

</style>
<template>
    <div v-if="!load">
        <div class="grid-container">
            <div class="since">
                <h5>Since {{ dateStrForView(user.registerDate) }}</h5>
            </div>
            <div class="profil">
                <img :src="user.picture" alt="User profil picture">
            </div>
            <div class="name">
                <div class="d-flex flex-row">
                    <h1 class="mr-2">{{ user.title }} {{ user.firstName }} {{ user.lastName }}</h1>
                    <h4 class="gender">({{ user.gender === 'male' ? 'Man' : 'Woman' }})</h4>
                </div>
                <h5>{{ user.email }}</h5>
            </div>
            <div class="svg birthday-svg">
                <img src="/img/profil/birthday.svg" alt="Date of birthday">
            </div>
            <div class="svg phone-svg">
                <img src="/img/profil/smartphone.svg" alt="Phone number">
            </div>
            <div class="phone-txt">
                <h4 class="m-0">{{ user.phone }}</h4>
            </div>
            <div class="birthdat-txt pt-2">
                <h4 class="m-0">{{ dateStrForView(user.dateOfBirth) }}</h4>
            </div>
        </div>

        <h3>{{ user.location.country }}, {{ user.location.state }}</h3>
        <h3>{{ user.location.city }}, {{ user.location.street }}</h3>

        <div class="my-5" v-if="!loadPost">
            <div class="d-flex flex-row justify-content-center">
                <div class="mr-5">
                    <img class="total-count" src="/img/profil/post.svg" alt="Number of post">
                    <h2 class="total-user align-center">{{ totalPosts }}</h2>
                </div>
                <div class="ml-5">
                    <img class="total-count" src="/img/post/likes.svg" alt="Number of likes">
                    <h2 class="total-user align-center">{{ totalLikes }}</h2>
                </div>
            </div>
            <h1 class="mb-4">Last post</h1>
            <div class="d-flex flex-row flex-wrap justify-content-between">
                <div v-for="(post, index) in posts" :key="'Post ' + index"
                    :style="{ backgroundImage: 'url(' + post.image + ')' }"
                    @click="goToPost(post.id)"
                    class="hover-scale picture-post">
                </div>
            </div>
        </div>
        <spinner v-else></spinner>
    </div>
    <spinner v-else></spinner>
</template>

<script>
import Vue from 'vue';
import Spinner from './Spinner';

export default {
    components: {
        Spinner,
    },
    data() {
        return {
            id: this.$route.params.id,
            user: {},
            totalLikes: 0,
            totalPosts: 0,
            posts: [],
            load: true,
            loadPost: true,
        }
    },
    methods: {
        dateStrForView(dateStr) {
            const date = new Date(dateStr);
            return date.toLocaleDateString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
        },
        goToPost(id) {
            this.$router.push({ name: 'SinglePost', params: { id : id } });
        }
    },
    created() {
        this.load = true;
        this.loadPost = true;
        Vue.axios.get(`https://dummyapi.io/data/api/user/${this.id}`).then((response)=> {
            this.user = response.data;
            this.load = false;
        });
        Vue.axios.get(`https://dummyapi.io/data/api/user/${this.id}/post?limit=50`).then((response)=> {
            const postCount = response.data.data;
            let likes = 0;
            postCount.forEach(post => {
                likes += post.likes;
            });
            this.totalLikes = likes;
            this.totalPosts = postCount.length;
            this.posts = postCount.slice(0,10);
            this.loadPost = false;
        });
    }
}
</script>

<style scoped>
h1 {
    text-transform: capitalize;
    color: black;
    margin: 0;
    font-size: 2.3rem;
}

h3 {
    font-size: 1.3rem;
    font-weight: 300;
    text-align: center;
}

h4 {
    font-weight: 400;
}

h5 {
    font-weight: 700;
}

iframe {
    width: 100%;
    height: 20vh;
}

.svg {
    width: 3rem;
    margin-right: 1.3rem;
}

.total-user {
    font-family: 'Prompt', sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
}

.total-count {
    width: 4rem;
}

.picture-post {
    margin-bottom: 2rem;
    height: 15vw;
    width: 28vw;
    background-size: cover;
    background-position: center;
}

.profil img {
    border-radius: 50%;
    width: 10rem;
}

.gender {
    font-size: 1rem;
}

/* GRID */
.grid-container {
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . since"
    ". name name name profil"
    "birthday-svg birthdat-txt . . profil"
    "phone-svg phone-txt . . .";
}
.since {
    grid-area: since;
}
.profil {
    grid-area: profil;
}
.name {
    grid-area: name;
}
.birthday-svg {
    align-self: center;
    grid-area: birthday-svg;
}
.phone-svg {
    align-self: center;
    grid-area: phone-svg;
}
.phone-txt {
    align-self: center;
    grid-area: phone-txt;
}
.birthdat-txt {
    align-self: center;
    grid-area: birthdat-txt;
}
</style>
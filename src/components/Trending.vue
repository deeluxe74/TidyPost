<template>
    <div class="pt-5">
        <h2 class="title">Recent Burn</h2>
        <div v-if="!load" class="px-1 mt-3 w100 d-flex flex-row justify-content-between align-items-center">
            <div
                v-for="(post, index) in posts" :key="'trending ' + index"
                class="hover picture-post"
                @click="openPostSingle(post.id)"
                :style="{ backgroundImage: 'url(' + post.image + ')' }">
            </div>
        </div>
        <spinner v-else></spinner>
        <hr>
    </div>
</template>

<script>
import Vue from 'vue';
import Spinner from '../views/Spinner';

export default {
  components: {
        Spinner
    },
    data() {
        return {
            posts: [],
            load: true,
        }
    },
    methods: {
        openPostSingle(id){
            this.$router.push({ name: 'SinglePost', params: {id: id}});
        }
    },
    created(){
        this.load = true;
        Vue.axios.get(`https://dummyapi.io/data/api/post?page=0&limit=50`).then((response)=> {
            const posts = response.data.data;
            posts.sort((a ,b) => (b.likes > a.likes) ? 1 : -1);
            this.posts = posts.slice(0, 4);
            this.load = false;
        });
    }
}
</script>

<style scoped>
img {
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
}

hr {
    margin-top: 5vh;
    border: 1px solid #ffc6d3;
}

.picture-post {
    width: 13vw;
    height: 13vw;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin: auto;
}
</style>
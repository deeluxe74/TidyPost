<template>
    <transition-group v-if="!load" name="slide" mode="out-in">
        <div key="1" v-if="!selectTag">
            <div class="tag-display">
                <h1 class="mb-3 title">Available Tag :</h1>
                <div class="d-flex flex-row justify-content-start flex-wrap">
                    <div v-for="(tag, index) in tags" :key="index"
                        @click="selectTag = tag"
                        class="tag-badge hover">
                            <h2 :key="index" class="m-0">#{{ tag }}</h2>
                    </div>
                </div>
            </div>
        </div>
        <div key="2" v-else>
            <img v-if="!this.$route.query.tag" @click="selectTag = false" class="hover" src="/img/global/left-arrow.svg" alt="Return to tag select">
            <router-back v-else></router-back>
            <transition-group style="color:initial;" name="appear" mode="out-in">
                <post v-for="(post, index) in postsDisplay"
                    :key="'post ' + index"
                    :post="post"
                    class="my-2"
                    >
                </post>
            </transition-group>
        </div>
    </transition-group>
    <spinner v-else></spinner>
</template>

<script>
import Vue from 'vue';
import Spinner from './Spinner.vue';
import Post from '../components/Post';
import RouterBack from '../components/RouterBack.vue';
import { shareHandleSroll } from '../mixins/shareHandleSroll';

export default {
    mixins: [shareHandleSroll],
    components: {
        Spinner,
        Post,
        RouterBack,
    },
    data() {
        return {
            load: true,
            tags: [],
            posts: [],
            postsDisplay: [],
            selectTag: this.$route.query.tag,
        }
    },
    methods: {
        getPotsByTag(tag) {
            Vue.axios.get(`https://dummyapi.io/data/api/tag/${tag}/post`).then((response)=> {
                this.posts = response.data.data;
                this.postsDisplay = this.posts.slice(0, 5);
                this.load = false;
            });
        }
    },
    watch: {
        selectTag(value){
            this.load = true;
            this.getPotsByTag(value);
        }
    },
    created() {
        this.load = true;
        if(this.selectTag){
            this.getPotsByTag(this.selectTag);
        }
        Vue.axios.get(`https://dummyapi.io/data/api/tag`).then((response)=> {
            this.tags = response.data.data;
            this.load = false;
        });
    }
}
</script>

<style scoped>
img {
    width: 3.5vw;
}

.hover:hover {
    opacity: 0.7;
}

.title {
    font-weight: 500;
    color: black;
}

.tag-display {
    height: 100px;
}

.tag-badge {
    margin-bottom: 2rem;
    margin-right: 1rem;
    border-radius: 6px;
    background-color: #ff004c;
    color: white;
    padding: 0.5rem 1.5rem;
}
</style>
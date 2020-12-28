<template>
  <div v-if="!load">
    <trending></trending>
    <transition-group style="color:inherit;" name="appear" mode="out-in">
      <post v-for="(post, index) in postsDisplay"
        :key="'post ' + index"
        :post="post"
        class="my-2"
        >
      </post>
    </transition-group>
  </div>
  <spinner v-else></spinner>
</template>

<script>
import Vue from 'vue';
import Post from '../components/Post';
import Spinner from './Spinner';
import Trending from '../components/Trending';
import { shareHandleSroll } from '../mixins/shareHandleSroll';

export default {
  mixins: [shareHandleSroll],
  components: {
    Trending,
    Post,
    Spinner,
  },
  data() {
    return {
      load: true,
      posts: [],
      postsDisplay: [],
      order: this.$route.query.order,
      page: 1,
    }
  },
  watch: {
    $route(to, from) {
      if((to.name === 'Home') && (from.name === 'Home')){
        location.reload();
      }
    },
    postsDisplay(){
      if(this.postsDisplay.length === (50 * this.page)) {
        Vue.axios.get(`https://dummyapi.io/data/api/post?page=${this.page}&limit=50`).then((response)=> {
          const array = response.data.data;
          array.forEach(post => {
            this.posts.push(post);
          });
          this.page += 1;
        });
      }
    }
  },
  methods: {
    orderByLike() {
      this.posts.sort((a ,b) =>(b.likes > a.likes) ? 1 : -1);
    }
  },
  created() {
    this.load = true;
    Vue.axios.get(`https://dummyapi.io/data/api/post?page=0&limit=50`).then((response)=> {
      this.posts = response.data.data;
      if(this.order === 'Likes'){
        this.orderByLike();
      }
      this.postsDisplay = this.posts.slice(0,5);
      this.load = false;
    });
  },
};
</script>

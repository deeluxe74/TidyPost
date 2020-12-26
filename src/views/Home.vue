<template>
  <div v-if="!load">
    <trending></trending>
    <post v-for="(post, index) in posts"
      :key="'post ' + index"
      :post="post"
      class="my-2"
      >
      </post>
  </div>
  <spinner v-else></spinner>
</template>

<script>
import Vue from 'vue';
import Post from '../components/Post';
import Spinner from './Spinner';
import Trending from '../components/Trending';

export default {
  components: {
    Trending,
    Post,
    Spinner,
  },
  data() {
    return {
      load: true,
      posts: [],
      order: this.$route.params.order,
    }
  },
  watch: {
    $route(to, from) {
      if((to.name === 'Home') && (from.name === 'Home')){
        location.reload();
      }
    }
  },
  created() {
    this.load = true;

    Vue.axios.get(`https://dummyapi.io/data/api/post?limit=5`).then((response)=> {
      this.posts = response.data.data;
      this.load = false;
    });
  }
};
</script>

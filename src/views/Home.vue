<template>
  <div>
    <trending></trending>
    <post v-for="(post, index) in posts"
      :key="'post ' + index"
      :post="post"
      >
      </post>
  </div>
</template>

<script>
import Vue from 'vue';
import Post from '../components/Post';
import Trending from '../components/Trending';

export default {
  components: {
    Trending,
    Post,
  },
  data() {
    return {
      posts: [
        {
          id: "UWdcOFTc7DfzOhI6LpI4",
          image: "https://img.dummyapi.io/photo-1500879747858-bb1845b61beb.jpg",
          likes: 43,
          link: "https://www.instagram.com/teddyosterblomphoto/",
          owner: {id: "uQrnqsqyh8FjSXAPc7oA", email: "emilie.lambert@example.com", title: "mrs", picture: "https://randomuser.me/api/portraits/women/93.jpg", firstName: "Emilie"},
          publishDate: "2020-12-20T10:05:17.598Z",
          tags: ["animal", "dog", "golden retriever"],
          text: "adult Labrador retriever",
        }
      ],
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
    /*Vue.axios.get(`https://dummyapi.io/data/api/post?limit=5`, { headers: { 'app-id': process.env.VUE_APP_API_KEY } }).then((response)=> {
      console.log(response)
    });*/
  }
};
</script>

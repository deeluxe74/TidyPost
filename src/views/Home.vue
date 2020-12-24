<template>
  <div>
    <trending></trending>
    <post></post>
  </div>
</template>

<script>
import Post from '../components/Post';
import Trending from '../components/Trending';

export default {
  components: {
    Trending,
    Post,
  },
  data() {
    return {
      posts: [],
      order: this.$route.params.order,
    }
  },
  watch: {
    order() {
      console.log(this.order);
    }
  }
};
</script>

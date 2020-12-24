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
  }
};
</script>

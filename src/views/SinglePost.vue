<template>
    <div v-if="!load">
        <router-back></router-back>
        <post :post="post"></post>
    </div>
    <spinner v-else></spinner>
</template>

<script>
import Vue from 'vue';
import Post from "../components/Post";
import Spinner from './Spinner';
import RouterBack from '../components/RouterBack';

export default {
    components: {
        Post,
        Spinner,
        RouterBack,
    },
    data() {
        return {
            load: true,
            post: {},
            id: this.$route.params.id,
        }
    },
    created() {
        this.load = true;
        Vue.axios.get(`https://dummyapi.io/data/api/post/${this.id}`).then((response)=> {
            this.post = response.data;
            this.load = false;
        });
    }

}
</script>

<style>

</style>
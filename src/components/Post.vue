<template>
    <div class="my-3">
        <router-link :to="{ name: 'Profil', params: { id: post.owner.id }}">
            <div class="select-user p-2 w-100 grid-container">
                <img class="profil" :src="post.owner.picture" alt="User profil">
                <div class="name pl-3 mt-2">
                    <h3 class="m-0">{{ post.owner.firstName }} {{ post.owner.lastName }}</h3>
                    <h5>{{ post.owner.email }}</h5>
                </div>
                <h5 class="date">Posted {{ convertTimeAgo() }} ago</h5>
            </div>
        </router-link>

        <p class="my-3">
            {{ post.text }}
        </p>

        <div class="hover picture-post" @click="openUrl" :style="{ backgroundImage: 'url(' + post.image + ')' }"></div>

        <div class="tags d-flex flex-row flex-wrap">
            <h4 v-for="(tag, index) in post.tags"
                :key="'tag ' + index"
                @click="postByTags(tag)"
                class="hover">
                <span>#</span>{{ tag }}
            </h4>
        </div>

        <div class="social d-flex flex-row">
            <div class="d-flex flex-row mr-4">
                <img src="/img/post/likes.svg" alt="Count of total likes">
                <h4 class="ml-3 mb-0 align-self-center">{{ post.likes }}</h4>
            </div>
            <!--LIMITED CALL <div class="d-flex flex-row">
                <img src="/img/post/comment.svg" alt="Count of total comment">
                <h4 class="ml-3 mb-0 align-self-center">125</h4>
            </div>-->
        </div>

        <hr>
        <br>
    </div>
</template>

<script>
export default {
    props: ['post'],
    methods: {
        convertTimeAgo(){
            const datePost = new Date(this.post.publishDate);
            const date = new Date();
            date.setHours(0,0,0,0);

            let resetDatePost = new Date(datePost.getTime());
            resetDatePost.setHours(0,0,0,0);

            if(date.getTime() === resetDatePost.getTime()){
                if(date.getHours() === datePost.getHours()){
                    return new Date().getMinutes() - datePost.getMinutes() + ' Minutes';
                }
                return ((new Date().getHours() - datePost.getHours()) + 1) + ' Hours';
            }else {
                return ((new Date().getDate() - datePost.getDate())) + ' Days';
            }
        },
        openUrl() {
            window.open(this.post.image, "_blank");
        },
        postByTags(tag) {
            this.$router.push({name: 'Tags', query: { tag: tag }});
        }
    },
}
</script>

<style scoped>
.picture-post {
    height: 50vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 53px;
    margin: auto;
}

.tags h4 {
    margin: 1rem 20px;
}

.social img {
    width: 3rem;
}

.select-user {
    transition: all 320ms linear;
    cursor: pointer;
}

.select-user:hover {
    background-color: rgb(243, 243, 243);
}

/* GRID */
.grid-container {
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "profil name . date"
}
.profil {
    grid-area: profil;
    border-radius: 50%;
    width: 9vw;
    height: 9vw;
}
.name {
    grid-area: name;
}
.date {
    grid-area: date;
    text-align: end;
}

</style>
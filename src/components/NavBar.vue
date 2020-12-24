<template>
    <div class="px-5 py-3 nav-bar d-flex flex-column">
        <router-link to="/"><h1 class="mb-4">TIDYPOST</h1></router-link>
        <router-link to=""><h2 class="my-4">Likes</h2></router-link>
        <router-link to=""><h2 class="my-4">New</h2></router-link>
        <router-link to=""><h2 class="my-4">Tags</h2></router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-bar {
    width: max-content;
    height: 100%;
    box-shadow: 3px 0px 8px 0px rgba(0, 0, 0, 0.233);
}
</style>
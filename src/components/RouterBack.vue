<template>
    <img class="hover" @click="$router.go(-1)" src="/img/global/left-arrow.svg" alt="Return on time back">
</template>

<script>
export default {

}
</script>

<style scoped>
img {
    width: 3.5vw;
}

.hover:hover {
    opacity: 0.7;
}
</style>
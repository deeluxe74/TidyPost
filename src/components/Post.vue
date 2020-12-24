<template>
    <div class="my-5">
        <div class="w-100 grid-container">
            <img class="profil" src="https://randomuser.me/api/portraits/men/81.jpg" alt="User profil">
            <div class="name pl-3 mt-2">
                <h3 class="m-0">Pierre Kin</h3>
                <h5>pierre.kin@gmail.com</h5>
            </div>
            <h5 class="date">Posted 6 Hour ago</h5>
        </div>
        <p class="my-3">
            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
        </p>

        <div class="picture-post"></div>

        <div class="tags d-flex flex-row flex-wrap">
            <h4><span>#</span>Chien</h4>
            <h4><span>#</span>Vivre</h4>
            <h4><span>#</span>Promenade</h4>
            <h4><span>#</span>Balade en Forêt</h4>
        </div>

        <div class="social d-flex flex-row">
            <div class="d-flex flex-row mr-4">
                <img src="/img/post/likes.svg" alt="Count of total likes">
                <h4 class="ml-3 mb-0 align-self-center">2503</h4>
            </div>
            <div class="d-flex flex-row">
                <img src="/img/post/comment.svg" alt="Count of total comment">
                <h4 class="ml-3 mb-0 align-self-center">125</h4>
            </div>
        </div>

        <hr>
        <br>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.picture-post {
    height: 50vh;
    width: 100%;
    background-image: url('https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg');
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
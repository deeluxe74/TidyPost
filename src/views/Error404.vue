<template>
    <div>
        <div class="px-2 d-flex flex-column justify-content-center align-items-center">
            <h2 class="error mt-3 cl-pink">Erreur !</h2>
            <img class="mb-4" src="/img/global/penguin.svg" alt="Cette page n'existe pas.">
            <h3>Cette page n'existe pas !</h3>
            <br>
            <router-link :to="{name: 'Home'}">
                <button class="btn btn-danger">Accueil</button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
h3 {
    font-weight: 500;
    font-size: 1rem;
}

img {
    align-self: center;
    width: 50vw;
}

.error {
    color: #f6a6af;
    font-size: 2.1rem;
    font-weight: 200;
}

.btn {
    width: 80vw;
}

.bg-white {
    height: 90vh;
}

.important {
    font-weight: 800;
    font-size: 1.1rem;
}
</style>
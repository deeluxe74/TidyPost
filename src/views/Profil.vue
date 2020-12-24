<template>
    <div>
        <div class="grid-container">
            <div class="since">
                <h5>Since Feb 08 2020</h5>
            </div>
            <div class="profil">
                <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="User profil picture">
            </div>
            <div class="name">
                <h1>Melanie Pilz (women)</h1>
                <h5>melanie.pilz@example.com</h5>
            </div>
            <div class="svg birthday-svg">
                <img src="/img/profil/birthday.svg" alt="Date of birthday">
            </div>
            <div class="svg phone-svg">
                <img src="/img/profil/smartphone.svg" alt="Phone number">
            </div>
            <div class="phone-txt">
                <h4 class="m-0">0704-9599710</h4>
            </div>
            <div class="birthdat-txt pt-2">
                <h4 class="m-0">Janvier 26 1951</h4>
            </div>
        </div>
        <iframe class="my-3" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1391.764047614569!2d6.0655255!3d45.7606058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b986ade9d87cd%3A0xe7e13f29823d85cd!2scour%20de%20patisserie%20a%20domicile!5e0!3m2!1sfr!2sfr!4v1608833504317!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

        <h3>Germany, Bremen, Angermünde 3115, Am Bahnhof</h3>

        <div class="my-5">
            <h1 class="mb-4">Last post</h1>
            <div class="d-flex flex-row flex-wrap justify-content-between">
                <div class="picture-post"></div>
                <div class="picture-post"></div>
                <div class="picture-post"></div>
                <div class="picture-post"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
    color: black;
    margin: 0;
    font-size: 2.3rem;
}

h3 {
    font-size: 1.3rem;
    font-weight: 300;
    text-align: center;
}

h4 {
    font-weight: 400;
}

h5 {
    font-weight: 700;
}

iframe {
    width: 100%;
    height: 20vh;
}

.svg {
    width: 3rem;
    margin-right: 1.3rem;
}

.picture-post {
    margin-bottom: 2rem;
    height: 15vw;
    width: 28vw;
    background-image: url('https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg');
    background-size: cover;
    background-position: center;
}

.profil img {
    border-radius: 50%;
    width: 10rem;
}

/* GRID */
.grid-container {
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . since"
    ". name name name profil"
    "birthday-svg birthdat-txt . . profil"
    "phone-svg phone-txt . . .";
}
.since {
    grid-area: since;
}
.profil {
    grid-area: profil;
}
.name {
    grid-area: name;
}
.birthday-svg {
    align-self: center;
    grid-area: birthday-svg;
}
.phone-svg {
    align-self: center;
    grid-area: phone-svg;
}
.phone-txt {
    align-self: center;
    grid-area: phone-txt;
}
.birthdat-txt {
    align-self: center;
    grid-area: birthdat-txt;
}
</style>
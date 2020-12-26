<template>
  <div id="app" class="d-flex flex-row justify-content-start">
    <nav-bar></nav-bar>
    <router-view class="conteneur pt-3 w-100"></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 17px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  height: 100%;
  word-spacing: -0.05rem;
  /*overflow-y: hidden;
  overflow-x: hidden;*/
}

#app {
  min-height: 100%;
}

h1 {
  font-weight: 600;
  font-family: 'Prompt', sans-serif;
  color: #ff004c;
}

h2 {
  font-weight: 300;
  font-size: 2.1rem;
}

h3 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1.3rem;
  font-weight: 800;
}

h5 {
  font-size: 1rem;
  color: #949494;
}

p {
  font-size: 0.95rem;
  text-align: justify;
  font-weight: 500;
}

a {
  color: inherit;
}
a:hover {
  color: inherit;
  text-decoration: none;
}

span {
  font-weight: inherit;
  color: #ff004c;
}

hr {
  border-top: 2px solid #E0DFDF;;
}

.conteneur {
  padding: 0 8vw;
}

.title {
  font-weight: 400;
  font-size: 2.4rem;
}

.hover {
  transition: all 200ms linear;
  cursor: pointer;
}

.hover:hover {
  opacity: 0.9;
}

.hover-scale {
  cursor: pointer;
  transition: all 200ms linear;
}

.hover-scale:hover {
  opacity: 0.9;
  transform: scale(1.1);
}

/* TRANSITION & ANIMATION */
.slide-enter-active, .slide-leave-active {
  transition: all 150ms ease-in;
}
.slide-enter {
  transform: translateY(-100vh);
  filter: blur(4px);
}
.slide-leave-to {
  transform: translateY(-100vh);
  filter: blur(4px);
}
</style>

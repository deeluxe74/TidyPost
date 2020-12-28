<template>
  <div id="app" class="displayChange">
    <nav-bar></nav-bar>
    <transition name="appear" mode="out-in">
      <router-view class="conteneur pt-3 w-100"></router-view>
    </transition>
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
}

#app {
  min-height: 100%;
}

h1 {
  font-weight: 800;
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
  font-family: 'Prompt', sans-serif;
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

.displayChange {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.conteneur {
  padding: 0 8vw;
}

.title {
  font-weight: 400;
  font-size: 2.4rem;
}

.align-center {
  text-align: center;
}

.hover {
  transition: all 200ms linear;
  cursor: pointer;
}

.hover:hover {
  opacity: 0.8;
}

.hover-scale {
  cursor: pointer;
  transition: all 200ms linear;
}

.hover-scale:hover {
  opacity: 0.9;
  transform: scale(1.1);
}

.cl-blue {
  color: #00a2ff;
}

.cl-pink {
  color: #ff004c;
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

.appear-enter-active, .appear-leave-active {
  transition: all 800ms ease-out;
}
.appear-enter {
  opacity: 0;
  filter: blur(4px);
}
.appear-leave-to {
  opacity: 0;
  filter: blur(4px);
}

@media screen and (max-width: 500px){
  body, html {
    font-size: 15px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.4rem;

  }

  .tags h4 {
    font-size: 1.2rem;
  }

  .title {
    font-size: 1.8rem;
  }

  .displayChange {
    flex-direction: column;
  }
}
</style>

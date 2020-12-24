<template>
  <div id="app" class="d-flex flex-row justify-content-start">
    <nav-bar></nav-bar>
    <router-view class="pt-3 px-5 w-100"></router-view>
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
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  height: 100%;
  word-spacing: -0.05rem;
  /*overflow-y: hidden;
  overflow-x: hidden;*/
}

#app {
  height: 100%;
}

h1 {
  font-weight: 600;
  font-family: 'Prompt', sans-serif;
  color: #FF003D;
}

h2 {
  font-weight: 300;
}

h3 {
  
}

h5 {
  color: #858585;
}

p {

}

a {
  color: inherit;
}
a:hover {
  color: inherit;
  text-decoration: none;
}

.title {
  font-weight: 400;
  font-size: 2.4rem;
}
</style>

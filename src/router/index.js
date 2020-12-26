import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Profil from '../views/Profil';
import SinglePost from '../views/SinglePost';
import Tags from '../views/Tags';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'SinglePost',
    component: SinglePost
  },
  {
    path: '/profil/:id',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/tags',
    name: 'Tags',
    component: Tags
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

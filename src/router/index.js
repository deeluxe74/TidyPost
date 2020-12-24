import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Profil from '../views/Profil';
import Tags from '../views/Tags';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:order?',
    name: 'Home',
    component: Home
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

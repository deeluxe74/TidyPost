import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Profil from '../views/Profil';
import SinglePost from '../views/SinglePost';
import Tags from '../views/Tags';
import Error404 from '../views/Error404';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      guest: true,
    }
  },
  {
    path: '/post/:id',
    name: 'SinglePost',
    component: SinglePost,
    meta: {
      guest: true,
    }
  },
  {
    path: '/profil/:id',
    name: 'Profil',
    component: Profil,
    meta: {
      guest: true,
    }
  },
  {
    path: '/tags',
    name: 'Tags',
    component: Tags,
    meta: {
      guest: true,
    }
  },
  {
    path: '/error',
    name: 'Error404',
    component: Error404,
    meta: {
      guest: true,
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let guest = to.matched.some(record => record.meta.guest);
  if(guest) {
    next();
  }else {
    next({path: 'error'});
  }
});

export default router;

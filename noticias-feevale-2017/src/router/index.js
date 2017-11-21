import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Notice from '../pages/Notice';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/notice/:id',
      name: 'Notice',
      props: true,
      component: Notice,
    }
  ],
  mode: 'history',
  linkActiveClass: 'active-page',
  linkExactActiveClass: 'current-page',
});

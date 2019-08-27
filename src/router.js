import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//base stuff

import Profile from './views/Profile.vue'
import Post from './views/Post.vue'
//dynamic routing

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { path: '/user/:id',
      name: 'user',
      component: Profile
    },
    { path: '/post/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: "about" */ './views/Users.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/BlogLanding.vue')
    }
  ]
})

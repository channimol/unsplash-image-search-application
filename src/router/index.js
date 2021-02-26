import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue')
  },
  {
    path: '/',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

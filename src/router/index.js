import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '../views/Create.vue'
// import List from '../views/List.vue'
// import Task from '../views/Task.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: () => import('../views/Task.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

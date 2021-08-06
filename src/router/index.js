import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/foodpage',
    name: '新頁面',
    component: () => import('../views/FoodPage')
  },
  {
    path: '/foodproduct',
    name: '產品頁面',
    component: () => import('../views/FoodProduct')
  },
  {
    path: '/signin',
    name: '登入頁面',
    component: () => import('../views/SignIn')
  },
  {
    path: '/shoppingcart',
    name: '購物車頁面',
    component: () => import('../views/ShoopingCart')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

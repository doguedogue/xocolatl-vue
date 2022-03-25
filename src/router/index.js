import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "CakeryLayout" */ '../modules/cakery/layout/CakeryLayout')
  },
  {
    path: '/baker',
    name: 'baker',
    component: () => import(/* webpackChunkName: "BakerLayout" */ '../modules/baker/layout/BakerLayout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

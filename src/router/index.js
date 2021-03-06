import { createRouter, createWebHashHistory } from 'vue-router'
import cakeryRouter from '../modules/cakery/router/'
import bakerRouter from '../modules/baker/router/'

const routes = [
  {
    path: '/',
    ...cakeryRouter
  },
  {
    path: '/baker',
    ...bakerRouter
  },  
  { 
      path: '/:pathMatch(.*)*', 
      redirect: { name: 'cakery' }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

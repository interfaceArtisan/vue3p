import { createWebHistory, createRouter } from "vue-router"

import ChinaMap from '../views/ChinaMap.vue'
import TestCrossOrigin from '../views/TestCrossOrigin.vue'
import LargeScreen from '../views/largeScreen/index.vue'

const routes = [{
  path: '/',
  redirect: '/chinamap'
},{
  path: '/chinamap',
  component: ChinaMap
}, {
  path: '/testcrossorigin',
  component: TestCrossOrigin
}, {
  path: '/testbem',
  component: () => import('../views/TestBem.vue')
}, {
  path: '/largescreen',
  component: LargeScreen,
  meta: {
    showNavBar: false
  }
}]

export const router = createRouter({
  history: createWebHistory('/vue3p/'),
  routes
})
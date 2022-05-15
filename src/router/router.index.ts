import { createRouter, createWebHistory } from 'vue-router'

import beforeEachFunc from '../beforeEach'

import Login from '@/views/login.vue'

import home from './modules/home.router'
import store from './modules/store.router'
import enterprise from './modules/enterprise.router'
import personal from './modules/personal.router'

import studio from './modules/studio.router'
import robot from './modules/robot.router'
import feedback from './modules/feedback.router'
import system from './modules/system.router'
import application from './modules/application.router'

export const permissionRoutes = [
  home,
  store,
  enterprise,
  personal,
  studio,
  robot,
  feedback,
  system,
  application
]

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: Login
    },

    ...permissionRoutes
  ]
})

router.beforeEach(beforeEachFunc)

export default router

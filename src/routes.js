import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

import Home from './pages/Home'
import Modals from './pages/Modals'
import AuthModals from './pages/AuthModals'
import NotFound from './pages/404'

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/modals',
      name: 'modals',
      component: Modals
    },
    {
      path: '/auth',
      name: 'authModals',
      component: AuthModals
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
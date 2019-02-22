import Vue from 'vue'
import Router from 'vue-router'
import ind from '@/pages/ind'
import ine from '@/pages/ine'
import tabbar from '@/pages/tabbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tabbar',
      name: 'ind',
      component: tabbar
    },
    {
      path: '/ind',
      name: 'ind',
      component: ind
    },
    {
      path: '/ine',
      name: 'ine',
      component: ine
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pages',
      name: 'pages',
      component: require('@/pages').default
    },
    {
      path: '/pages/sigin',
      name: 'sigin',
      component: require('@/pages/sigin').default
    },
    {
      path: '/pages/improtDoc',
      name: 'improtDoc',
      component: require('@/pages/improtDoc').default
    },
    {
      path: '/pages/enterinfo',
      name: 'enterinfo',
      component: require('@/pages/enterinfo').default
    },
    {
      path: '*',
      redirect: '/pages'
    }
  ]
})

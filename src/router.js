import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Index/Index.vue'),
      children: [
        {
          path: 'category',
          component: () => import('./views/Index/Category.vue')
        },
        {
          path: 'discovery',
          component: () => import('./views/Index/Discovery.vue')
        },
        {
          path: 'Store',
          component: () => import('./views/Index/Store.vue')
        },
        {
          path: 'Login',
          component: () => import('./views/Index/Login.vue')
        }
      ]
    },
    {
      path: '/city',
      component: () => import('./views/City/index.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

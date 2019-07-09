import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Login'),
      meta: {
        isRequired: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/Home'),
      meta: {
        isRequired: true
      }
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../pages/Error/Error404'),
      meta: {
        isRequired: true
      }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isRequired) {
    // 不需要验证的路由
    next()
  } else {
    // 需要验证的路由
    next()
  }
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/test',
    name: 'Splash',
    component: () => import(/* webpackChunkName: "Splash" */ '../views/Splash.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/Forgot',
    name: 'Forgot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Forgot" */ '@/views/Forgot.vue')
  }, {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
    children: [
      {
        path: 'Dashboard',
        name: 'Dash',
        component: () => import(/* webpackChunkName: "Dash" */ '@/components/Dashboard/DashboardComp.vue')
      },
      {
        path: 'Settings',
        name: 'Settings'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import Splash from '@/views/Splash.vue'

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: Splash
  },
  {
    path: '/Login',
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
    meta: {
      requiresAuth: true
    },
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
      },
      {
        path: 'NewTasks',
        name: 'New',
        component: () => import(/* webpackChunkName: "New" */ '@/views/New.vue')
      },
      {
        path: 'AddressRequest',
        name: 'Address',
        component: () => import(/* webpackChunkName: "Address" */ '@/views/AddressForm.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

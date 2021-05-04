import { createRouter, createWebHashHistory } from 'vue-router'
import Splash from '@/Pages/Splash.vue'

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: Splash
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../Pages/Login.vue')
  },
  {
    path: '/Forgot',
    name: 'Forgot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Forgot" */ '@/Pages/Forgot.vue')
  }, {
    path: '/Home',
    name: 'Home',
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "Home" */ '@/Pages/Home.vue'),
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
        component: () => import(/* webpackChunkName: "New" */ '@/Pages/New.vue')
      },
      {
        path: 'ListTasks',
        name: 'General',
        component: () => import(/* webpackChunkName: "General" */ '@/components/Tasks/View/TableView.vue')
      },
      {
        path: 'AddressRequest',
        name: 'Address',
        component: () => import(/* webpackChunkName: "Address" */ '@/Pages/AddressForm.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

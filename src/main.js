import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

const app = createApp(App)
app.directive('uppercase', {
  beforeUpdate (el) {
    el.value = el.value.toUpperCase()
  },
  updated (el) {
    el.value = el.value.toUpperCase()
  }
})
// app.use(new VueSocketIO({ debug: true, connection: 'http://localhost:3000' }))
app.use(store).use(router).component('font-awesome-icon', FontAwesomeIcon)

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    var userID = localStorage.getItem('user_id')
    if (userID) {
      const response = await store.dispatch('getUserInfo', userID)
      if (response && store.getters.loggedIn) {
        console.log('LOGG IN')
        next()
        return
      }
    } else if (store.getters.loggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

app.mount('#app')

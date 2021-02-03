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
  updated (el) {
    el.value = el.value.toUpperCase()
  }
})

app.use(store).use(router).component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

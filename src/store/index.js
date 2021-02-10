import { createStore } from 'vuex'
import AccountModule from '@/modules/AccountModule'
import SpartansModule from '@/modules/SpartansModule'
import SocketModule from '@/modules/SocketModule'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    account: AccountModule,
    spartant: SpartansModule,
    socket: SocketModule
  }
})

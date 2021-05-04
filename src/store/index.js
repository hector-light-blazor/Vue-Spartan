import { createStore } from 'vuex'
import AccountModule from '@/modules/AccountModule'
import SpartansModule from '@/modules/SpartansModule'
import SocketModule from '@/modules/SocketModule'
import TicketModule from '@/modules/TicketModule'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    account: AccountModule,
    spartan: SpartansModule,
    socket: SocketModule,
    address: TicketModule
  }
})

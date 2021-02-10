export default {
  state: {
    socket: {}
  },
  getters: {
    socket: state => state.socket
  },
  mutations: {
    setupSocket (state, payload) {
      state.socket = payload
    }
  },
  actions: {
    updateSocket ({ commit }, payload) {
      commit('setupSocket', payload)
    }
  }
}

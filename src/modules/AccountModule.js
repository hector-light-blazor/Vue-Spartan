import axios from 'axios'
import * as api from '@/api/Login'
const state = {
  user: {}
}

const getters = {
  userInfo: state => state.user
}

const actions = {
  async authUser ({ commit }, data) {
    const response = await axios.post(api.url + api.req.auth, data)
    const dt = response.data
    console.log(dt)
    commit('setUser', dt.data[0])
    return dt.success
  }
}

const mutations = {
  setUser: (state, user) => {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

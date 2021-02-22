import axios from 'axios'
import * as endpoint from '@/api/Global'
import { req } from '@/api/Req'
import * as user from './account/computes'

const state = {
  user: {},
  socketid: 0,
  online: 0
}

const getters = {
  USER_ID: state => state.user.user_id,
  SOCK_ID: state => state.socketid,
  loggedIn: state => user.isOnline(state.user),
  userInfo: state => state.user,
  SPARTAN_INFO: state => state.user,
  fullName: state => user.fullName(state.user),
  accIcon: state => (state.user.icon) ? `${endpoint.second}${req.Users.getImage}${state.user.icon}` : endpoint.image,
  workCenter: state => user.workCenter(state.user.work_center)
}

const actions = {
  async authUser ({ commit }, options) {
    if (options.length === 0) { return }
    const user = options[0]
    const rem = options[1]
    const response = await axios.post(endpoint.first + req.Login.auth, user)
    const dt = response.data
    if (dt.success && rem) {
      localStorage.setItem('user_id', dt.user.user_id)
    }
    commit('setUser', dt.user)
    return dt.success
  },

  async checkAuth ({ dispatch }) {
    var userID = localStorage.getItem('user_id')
    if (userID) {
      const response = await dispatch('getUserInfo', userID)
      return response
    }
  },
  async getUserInfo ({ commit }, data) {
    const response = await axios.get(endpoint.first + req.Login.getUser, {
      params: {
        id: data
      }
    })
    const user = response.data.user
    commit('setUser', user)
    return response.data.success
  },
  saveID ({ commit }, data) {
    commit('setSocket', data)
  }
}

const mutations = {
  setUser: (state, user) => {
    state.user = user
  },
  setSocket: (state, id) => {
    state.socketid = id
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

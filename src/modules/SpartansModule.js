import axios from 'axios'
import * as endpoint from '@/api/Global'
import { req } from '@/api/Req'
import * as user from './account/computes'

export default {
  state: {
    users: [],
    myself: 0
  },
  getters: {
    listOfUsers: state => state.users,
    listOfOnline: state => state.users.filter(spartan => Boolean(spartan.online) && spartan.user_id !== state.myself),
    totalUsers: state => state.users.length,
    spartanFullName: state => (id) => {
      const spartan = state.users.find(user => user.user_id === id)
      return `${spartan.first_name} ${spartan.last_name}`
    },
    getTeam: state => (team) => {
      return `${user.workCenter(team)}`
    },
    getIcon: state => (icon) => {
      return (icon) ? `${endpoint.second}${req.Users.getImage}${icon}` : endpoint.image
    }
  },
  mutations: {
    updateUsers (state, payload) {
      state.users = (payload) || []
    },
    UPDATE_ONLINE (state, payload) {
      if (payload) {
        const index = state.users.findIndex(spartan => spartan.user_id === payload.user_id)
        if (index === -1) return
        state.users[index].online = (payload?.online) || 0
      }
    },
    UPDATE_MYSELF (state, user) {
      state.myself = (user) || 0
    }
  },
  actions: {
    async getUsers ({ commit }) {
      const response = await axios.get(endpoint.first + req.Users.getAll)
      commit('updateUsers', response.data.users)
      return response.data.success
    }
  }
}

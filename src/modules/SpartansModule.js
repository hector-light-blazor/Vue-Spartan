import axios from 'axios'
import * as endpoint from '@/api/Global'
import { req } from '@/api/Req'
import * as user from './account/computes'

export default {
  state: {
    users: []
  },
  getters: {
    listOfUsers: state => state.users,
    totalUsers: state => state.users.length,
    spartanFullName: state => (id) => {
      const spartan = state.users.find(user => user.user_id === id)
      return `${spartan.first_name} ${spartan.last_name}`
    },
    getTeam: state => (team) => {
      console.log(team)
      return `${user.workCenter(team)}`
    },
    getIcon: state => (icon) => {
      return (icon) ? `${endpoint.second}${req.Users.getImage}${icon}` : endpoint.image
    }
  },
  mutations: {
    updateUsers (state, payload) {
      state.users = payload
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

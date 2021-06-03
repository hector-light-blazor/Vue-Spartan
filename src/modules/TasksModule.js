import axios from 'axios'
import * as endpoint from '@/api/Global'
import { req } from '@/api/Req'

const state = {
  general: {},
  critical: {},
  assigned: {},
  archived: {}
}

const getters = {
  GENERAL: state => state.general,
  CRITICAL: state => state.critical,
  ASSIGNED: state => state.assigned,
  ARCHIVED: state => state.archived
}

const actions = {
  async getOpenTasks ({ commit }, param) {
    console.log('get open tasks')
    console.log(param)
    const response = await axios.get(`${endpoint.first}${req.Tickets.openByOrga}`, {
      params: {
        ID: param
      }
    })
    const data = response.data
    console.log(data)
    if (data.success) {

    } else {
      // alert(data.msg)
    }
    return data.success
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

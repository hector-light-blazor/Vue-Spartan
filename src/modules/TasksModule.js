import axios from 'axios'
import * as endpoint from '@/api/Global'
import { req } from '@/api/Req'

const state = {
  general: [],
  critical: [],
  assign: [],
  archived: []
}

const getters = {
  GENERAL: state => state.general,
  GEN_TOTAL: state => state.general?.length,
  CRITICAL: state => state.critical,
  ASSIGN_TOTAL: state => state.assign?.length,
  ARCHIVED: state => state.archived
}

const actions = {
  async getOpenTasks ({ commit }, param) {
    const server = await axios.get(`${endpoint.first}${req.Tickets.openByOrga}`, {
      params: {
        ID: param
      }
    })
    const response = server.data
    if (response.success) {
      commit('setGeneral', response.data)
    } else {
      alert(response.msg)
    }
  },

  async getAssignTasks ({ commit }, param) {
    const server = await axios.get(`${endpoint.first}${req.Tickets.assign}`, {
      params: {
        user: param
      }
    })

    const response = server.data
    if (response.success) {
      commit('setAssign', response.data)
    } else {
      alert(response.msg)
    }
  }
}

const mutations = {
  setGeneral: (state, data) => {
    state.general = data
  },
  setAssign: (state, data) => {
    state.assign = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}


const state = {
  Dashboard: { visible: false }
}

const getters = {
  DASH_VISIBLE: state => state.Dashboard.visible
}

const actions = {
  changeVisibility ({ commit }, value) {
    commit('setDashVisibility', value)
  }
}

const mutations = {
  setDashVisibility: (state, value) => {
    state.Dashboard.visible = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

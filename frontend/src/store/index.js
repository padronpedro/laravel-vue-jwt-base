import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: null
  },
  mutations: {
    SET_USER_DATA (state, data) {
      state.userData = data
    }
  },
  actions: {
    setUserData ({ commit }, data) {
      localStorage.setItem('userData', JSON.stringify(data))
      commit('SET_USER_DATA', data)
    },
    deleteUserData ({ commit }) {
      localStorage.removeItem('userData')
      commit('SET_USER_DATA', null)
    }
  },
  modules: {
  },
  getters: {
    getUserData (state) {
      if (!state.userData) {
        let temp = localStorage.getItem('userData')
        if (temp) {
          state.userData = JSON.parse(temp)
        }
      }
      return state.userData
    }
  }
})

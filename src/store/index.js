import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    addresses: []
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer
    },
    addAddress ( state, address) {
      state.addresses.push(address)
    },
    setLoginUser(state, user){
      state.login_user = user
    },
    deleteLoginUser(state) {
      state.drawer = !state.drawer
    }
  },
  actions: {
    login () {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    toggleSideMenu({commit}) {
      commit('toggleSideMenu')
    },
    addAddress ({ commit }, address) {
      commit('addAddress', address)
    },
    setLoginUser({commit}, user){
      commit('setLoginUser', user)
    },
    logout(){
      firebase.auth().signOut()
    },
    deleteLoginUser({ commit }){
      commit( 'deleteLoginUser ')
    }
  }
})

import {HTTP} from './api/http-common'

const state = {
authUser: null,
isloggedin: false,
user: ''

};
const mutations = {
  'SET_AUTH_USER' (state,  payload ){
    state.authUser = payload.token
    state.isloggedin = true
    state.user =  payload.user
  },
  'CLEAR_AUTH_USER' (state){
    state.authUser = null
    state.isloggedin = false
    state.user =  ''
  }

};

const actions = {
  setUserObjects: ({commit}, payload) => {
    commit('SET_AUTH_USER',  payload )
  },

  clearAuthUser: ({commit}) => {
    commit('CLEAR_AUTH_USER')
  }

};


const getters = {
  isloggedin: state => {
    return state.isloggedin
  },

  user: state => {
    return state.user
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}

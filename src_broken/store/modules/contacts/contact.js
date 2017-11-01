import {HTTP} from '../api/http-common'
import * as settings from './settings'
import contact from './test_data/contact'
import * as types from '../../types';

const state = {
contact: [],
columns: settings.GRID_COLUMNS,
buttons: settings.ADD_BUTTONS
};
const mutations = {
  'LOAD_CONTACT' (state, payload) {
    state.contact = payload;
  },
};


const actions = {
  load_contact: ({commit}) => {
      HTTP.get('contact/')
      .then(response => {
        commit('LOAD_CONTACT', response.data);
      })
      .catch(e => {
        this.errors.push(e);
      })
   }
};


const getters = {
  getContactData: state => {
    return state.contact;
  },
  getContactButtons: state => {
    return state.buttons;
  },
  getContactAlwaysVisibleButtons: state => {
    return state.always_visible_buttons;
  },
  getContactColumns: state => {
  return state.columns;
 }
};


export default {
  state,
  mutations,
  actions,
  getters
}

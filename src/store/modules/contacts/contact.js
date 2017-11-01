import {HTTP} from '../api/http-common'
import * as settings from './settings'
import contact from './test_data/contact'
import * as types from '../../types';

const state = {
newContact: false,
contact: [],
columns: settings.GRID_COLUMNS
};
const mutations = {
  'LOAD_CONTACT' (state, payload) {
    state.datContact = payload;
  },
  'openContact' (state) {
    state.newContact = true;
  },
  'closeContact' (state) {
    state.newContact = false;
  }
};

const actions = {
  load_Contact: ({commit}) => {
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
    return state.datContact;
  },
  getContactColumns: state => {
  return state.columns;
  },
  contact_modal_state: state => {
  return state.newContact
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}

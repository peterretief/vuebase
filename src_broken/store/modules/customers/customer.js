import {HTTP} from '../api/http-common'
import * as settings from './settings'
import customer from './test_data/customer'
import * as types from '../../types';

const state = {
customer: [],
columns: settings.GRID_COLUMNS,
buttons: settings.ADD_BUTTONS,
always_visible_buttons: settings.ALWAYS_VISIBLE_BUTTONS
};
const mutations = {
  'LOAD_CUSTOMER' (state, payload) {
    state.customer = payload;
  },
};


const actions = {
  load_customer: ({commit}) => {
      HTTP.get('customer/')
      .then(response => {
        commit('LOAD_CUSTOMER', response.data);
      })
      .catch(e => {
        this.errors.push(e);
      })
   }
};


const getters = {
  getCustomerData: state => {
    return state.customer;
  },
  getCustomerButtons: state => {
    return state.buttons;
  },
  getCustomerAlwaysVisibleButtons: state => {
    return state.always_visible_buttons;
  },
  getCustomerColumns: state => {
  return state.columns;
 }
};

export default {
  state,
  mutations,
  actions,
  getters
}

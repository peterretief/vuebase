import {HTTP} from '../api/http-common'
import * as settings from './settings'
import customer from './test_data/customer'
import * as types from '../../types';

const state = {
newCustomer: false,
customer: [],
columns: settings.GRID_COLUMNS
};
const mutations = {
  'LOAD_CUSTOMER' (state, payload) {
    state.datCustomer = payload;
  },
  'openCustomer' (state) {
    state.newCustomer = true;
  },
  'closeCustomer' (state) {
    state.newCustomer = false;
  }
};

const actions = {
  load_Customer: ({commit}) => {
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
    return state.datCustomer;
  },
  getCustomerColumns: state => {
  return state.columns;
  },
  customer_modal_state: state => {
  return state.newCustomer
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}

import {HTTP} from '../api/http-common'
import * as settings from './settings'

const state = {
customers: [],
columns: settings.GRID_COLUMNS
};
const mutations = {
  'SET_CUSTOMERS' (state, customers) {
    state.customers = customers;
  },
  'SET_COLUMNS_CUSTOMERS' (state, columns){
    state.columns = columns;
  }
};

const actions = {
  initCustomers: ({commit}) => {
      commit('SET_CUSTOMERS', customers);
  },

  columnCustomer: ({commit}) => {
      commit('SET_COLUMNS_CUSTOMERS', columns);
  }

};

const getters = {

  customers: state => {
    HTTP.get('customer/')
    .then(response => {
      state.customers = response.data;
    })
    .catch(e => {
      this.errors.push(e);
    })
      return state.customers;
  },

  getCustomerColumns: state => {
  return state.columns; // = ['id', 'AccountCode', 'CompanyName', 'VATNumber'];
  //return state.columns;
 }
};


export default {
  state,
  mutations,
  actions,
  getters
}

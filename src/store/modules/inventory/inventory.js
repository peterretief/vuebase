import {HTTP} from '../api/http-common'
import * as settings from './settings'
import inventory from './test_data/inventory'
import * as types from '../../types';

const state = {
newInventory: false,
inventory: [],
columns: settings.GRID_COLUMNS
};
const mutations = {
  'LOAD_INVENTORY' (state, payload) {
    state.datInventory = payload;
  },
  'openInventory' (state) {
    state.newInventory = true;
  },
  'closeInventory' (state) {
    state.newInventory = false;
  }
};

const actions = {
  load_inventory: ({commit}) => {
      HTTP.get('inventory/')
      .then(response => {
        commit('LOAD_INVENTORY', response.data);
      })
      .catch(e => {
        this.errors.push(e);
      })
   }
};

const getters = {
  getInventoryData: state => {
    return state.datInventory;
  },
  getInventoryColumns: state => {
  return state.columns;
  },
  inventory_modal_state: state => {
  return state.newInventory
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}

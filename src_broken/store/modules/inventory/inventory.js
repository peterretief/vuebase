import {HTTP} from '../api/http-common'
import * as settings from './settings'
import inventory from './test_data/inventory'
import * as types from '../../types';
///home/peter/DEVELOPMENT/INVENTORY/frontend/rentware/src/store/types.js


const state = {
inventory: [],
columns: settings.GRID_COLUMNS,
buttons: settings.ADD_BUTTONS,
always_visible_buttons: settings.ALWAYS_VISIBLE_BUTTONS
};
const mutations = {
  'LOAD_INVENTORY' (state, payload) {
    state.inventory = payload;
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
    return state.inventory;
  },
  getInventoryAlwaysVisibleButtons: state => {
    return state.always_visible_buttons;
  },
  getInventoryButtons: state => {
    return state.buttons;
  },
  getInventoryColumns: state => {
  return state.columns;
 }
};


export default {
  state,
  mutations,
  actions,
  getters
}

import {HTTP} from '../api/http-common'
import * as settings from './settings'
import rental from './test_data/rental'
import * as types from '../../types';

const state = {
rental: [],
columns: settings.GRID_COLUMNS,
buttons: settings.ADD_BUTTONS
};
const mutations = {
  'LOAD_RENTAL' (state, payload) {
    state.rental = payload;
  },
};

const actions = {
  load_rental: ({commit}) => {
      HTTP.get('rental/')
      .then(response => {
        commit('LOAD_RENTAL', response.data);
      })
      .catch(e => {
        this.errors.push(e);
      })
   }
};

const getters = {
  getRentalData: state => {
    return state.rental;
  },
  getRentalButtons: state => {
    return state.buttons;
  },
  getRentalAlwaysVisibleButtons: state => {
    return state.always_visible_buttons;
  },
  getRentalColumns: state => {
  return state.columns;
 }
};

export default {
  state,
  mutations,
  actions,
  getters
}

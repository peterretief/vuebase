import {HTTP} from '../api/http-common'
import * as settings from './settings'
import rental from './test_data/rental'
import * as types from '../../types';

const state = {
rental_save_errors: [],
rental_id_for_new_event: '',
newRental: false,
newEvent: false,
rental: [],
columns: settings.GRID_COLUMNS
};
const mutations = {
  'LOAD_RENTAL' (state, payload) {
    state.datRental = payload;
  },
  'openRental' (state) {
    state.newRental = true;
  },
  'closeRental' (state) {
    state.newRental = false;
  },
  'openEvent' (state) {
    state.newEvent = true;
  },
  'closeEvent' (state) {
    state.newEvent = false;
  },
  'set_rental_id_for_new_event'(state, payload){
//    state.rental_id_for_new_event = [];
    state.rental_id_for_new_event = payload;
  }
};

const actions = {
  load_rental: ({commit, state}) => {
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
    return state.datRental;
  },
  getRentalColumns: state => {
  return state.columns;
  },
  rental_modal_state: state => {
  return state.newRental
},
  event_modal_state: state => {
  return state.newEvent
},
  get_rental_id_for_new_event: state => {
    return state.rental_id_for_new_event
},
  get_rental_save_errors: state => {
    return state.errors
}
};

export default {
  state,
  mutations,
  actions,
  getters
}

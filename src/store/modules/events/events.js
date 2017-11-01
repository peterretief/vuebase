import {HTTP} from '../api/http-common'
import * as settings from './settings'
import event from './test_data/event'
import * as types from '../../types';

const state = {
//newEvent: false,
event: [],
columns: settings.GRID_COLUMNS
};
const mutations = {
  'LOAD_EVENT' (state, payload) {
    state.datEvent = payload;
  },
/*
  'openEvent' (state) {
    state.newEvent = true;
  },
  'closeEvent' (state) {
    state.newEvent = false;
  }
*/
};

const actions = {
  load_Event: ({commit}) => {
      HTTP.get('event/')
      .then(response => {
        commit('LOAD_EVENT', response.data);
      })
      .catch(e => {
        this.errors.push(e);
      })
   }
};

const getters = {
  getEventData: state => {
    return state.datEvent;
  },
  getEventColumns: state => {
  return state.columns;
  }
//  event_modal_state: state => {
//  return state.newEvent
//  }
};

export default {
  state,
  mutations,
  actions,
  getters
}

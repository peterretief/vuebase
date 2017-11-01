import {HTTP} from '../api/http-common'
import * as settings from './settings'
import asset from './test_data/asset'
import * as types from '../../types';

const state = {
asset: [],
columns: settings.GRID_COLUMNS,
buttons: settings.ADD_BUTTONS
};
const mutations = {
  'LOAD_ASSET' (state, payload) {
    state.asset = payload;
  },
  'UPDATE_ASSET' (state, payload) {
    state.asset = payload;
  }
};

const actions = {
  load_asset: ({commit}) => {
      HTTP.get('asset/')
      .then(response => {
        commit('LOAD_ASSET', response.data);
      })
      .catch(e => {
        this.errors.push(e);
      })
   },

   update_asset: ({commit}) => {
       HTTP.put('asset/')
       .then(response => {
         commit('UPDATE_ASSET', response.data);
       })
       .catch(e => {
         this.errors.push(e);
       })
    }
};

const getters = {

  getAssetData: state => {
    return state.asset;
  },
  getAssetButtons: state => {
    return state.buttons;
  },
  getAssetAlwaysVisibleButtons: state => {
    return state.always_visible_buttons;
  },
  getAssetColumns: state => {
  return state.columns;
 }
};


export default {
  state,
  mutations,
  actions,
  getters
}

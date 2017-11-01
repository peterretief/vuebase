import {HTTP} from '../api/http-common'
import * as settings from './settings'
import asset from './test_data/asset'
import * as types from '../../types';

const state = {
newAsset: false,
asset: [],
columns: settings.GRID_COLUMNS
};
const mutations = {
  'LOAD_ASSET' (state, payload) {
    state.datAsset = payload;
  },
  'openAsset' (state) {
    state.newAsset = true;
  },
  'closeAsset' (state) {
    state.newAsset = false;
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
   }
};

const getters = {
  getAssetData: state => {
    return state.datAsset;
  },
  getAssetColumns: state => {
  return state.columns;
  },
  asset_modal_state: state => {
  return state.newAsset
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}

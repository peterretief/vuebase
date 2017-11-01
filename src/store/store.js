import {HTTP} from './modules/api/http-common'

import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';

//import modal_templates from './modules/modals/modal';

import inventory from './modules/inventory/inventory';
import rentals from './modules/rentals/rental';
import assets from './modules/assets/asset';
import customers from './modules/customers/customer';
import contacts from './modules/contacts/contact';
import events from './modules/events/events';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import * as rental_settings from './modules/rentals/settings'
import * as contact_settings from './modules/contacts/settings'
import * as customer_settings from './modules/customers/settings'
import * as inventory_settings from './modules/inventory/settings'
import * as asset_settings from './modules/assets/settings'
import * as event_settings from './modules/events/settings'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      selected: "",

      rental_column: [rental_settings.GRID_COLUMNS],
      contact_column: [contact_settings.GRID_COLUMNS],
      customer_column: [customer_settings.GRID_COLUMNS],
      inventory_column: [inventory_settings.GRID_COLUMNS],
      asset_column: [asset_settings.GRID_COLUMNS],
      event_column: [event_settings.GRID_COLUMNS],

      row: [],
      is_row_selected: false,
      datRentals: [],
      //keep from here
      datCustomers: [],
      datContacts: [],
      datInventories: [],
      datAssets: [],
      datEvents: [],
      errors: [],
      error_request: [],
      error_message: [],
      error_config: [],
      record_saved: [],
      http_status_code: [],
      http_status_text: [],

      rental_selected_row: [],
      customer_selected_row: [],

  },
  getters,
  actions,
  mutations,
  modules: {
        login,
        contacts,
        inventory,
        rentals,
        assets,
        contacts,
        customers,
        events
    }

});

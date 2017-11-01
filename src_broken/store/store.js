import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import modal_templates from './modules/modals/modal';
import inventory from './modules/inventory/inventory';
import rentals from './modules/rentals/rental';
import assets from './modules/assets/asset';
import customers from './modules/customers/customer';
import contacts from './modules/contacts/contact';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      selected: "",
      columns: [],
      new_row: [],
      row: [],
      all_columns: [],
      errors: [],
      is_row_selected: false,
      buttons: [],
      global_data: [],
      global_rental: [],
      global_customer: [],
      global_contact: [],
      global_inventory: [],
      global_asset: [],
      always_visible_buttons: []
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
        modal_templates
    }

});

import * as types from './types';
import * as assets from './modules/assets/settings'
import * as inventory from './modules/inventory/settings'


export default {
    [types.MUTATE_SELECTED]: (state, payload) => {
        state.selected = payload;
    },
    [types.MUTATE_SELECT_ROW]: (state, payload) => {
        state.is_row_selected = true
        state.row = payload;
    },
    [types.MUTATE_COLUMNS]: (state, payload) => {
        state.columns = payload;
    },
    [types.MUTATE_ALL_COLUMNS]: (state, payload) => {
        state.all_columns = payload;
    },
    [types.MUTATE_RELEASE_ROW]: (state) => {
        state.is_row_selected = false
        state.row = [];
    },
    [types.MUTATE_UPDATE_ROW]: (state, payload) => {
        state.row = payload;
    },
    [types.MUTATE_NEW_ROW]: (state, payload) => {
        state.new_row = payload;
    },
    /*
    [types.MUTATE_BUTTONS]: (state, payload) => {
        state.buttons = payload;
    },

    [types.MUTATE_ALWAYS_VISIBLE_BUTTONS]: (state, payload) => {
        state.always_visible_buttons = payload;
    },
    */

    [types.MUTATE_IS_ROW_SELECTED]: (state) => {
        state.is_row_selected = false
    },
    [types.MUTATE_DATA]: (state, payload) => {
        state.datCustomer = payload;
    },

    [types.MUTATE_CLEAR_DATA]: (state) => {
        state.global_data = [];
    },

    [types.MUTATE_UPDATE_RENTAL]: (state, payload) => {
        state.datRental = payload;
    },

    [types.MUTATE_UPDATE_EVENT]: (state, payload) => {
        state.datEvent = payload;
    },
  //  [types.MUTATE_UPDATE_CUSTOMER]: (state, payload) => {
  //      state.datCustomer = payload;
  //  },



/*
    [types.GLOBAL_MUTATE_RENTAL]: (state, payload) => {
        state.global_rental = payload;
    },
    [types.GLOBAL_MUTATE_CUSTOMER]: (state, payload) => {
        state.global_rental = payload;
    },
    [types.GLOBAL_MUTATE_CONTACT]: (state, payload) => {
        state.global_rental = payload;
    },
    [types.GLOBAL_MUTATE_INVENTORY]: (state, payload) => {
        state.global_rental = payload;
    },
    [types.GLOBAL_MUTATE_ASSET]: (state, payload) => {
        state.global_rental = payload;
    },
*/

//INVENTORY ASSETS

/*
    [types.MUTATE_GET_SUB_COLUMN]: (state, payload) => {
      if (payload=='assets'){
        state.sub_columns = [assets.GRID_COLUMNS];
      }else {
        state.sub_columns = ['other'];
      }

    },

*/
    /*
    [types.MUTATE_SET_ASSET]: (state, payload) => {
        state.asset_data = payload;
    },
    */

/*
    [types.MUTATE_SET_ASSET]: (state, payload) => {
        state.asset_data = payload;
    },
*/
//remove one when cleaning up

/*
    [types.MUTATE_UPDATE_ASSET]: (state, payload) => {
        state.asset_data = payload;
    },
    [types.MUTATE_UPDATE_RENTAL]: (state, payload) => {
        state.rental_data = payload;
    },
    [types.MUTATE_COMPANY_NAME]: (state, payload) => {
        state.company_name = payload;
    },
    [types.MUTATE_ASSET_BY_ID]: (state, payload) => {
        state.asset_by_id = payload;
    },
    [types.MUTATE_ASSET_ROW_BY_ID]: (state, payload) => {
        state.asset_id = payload;
    },

*/

    //from here good keep TODO
    [types.MUTATE_ALL_RENTAL_DATA]: (state, payload) => {
        state.datRentals = payload;
    },
    [types.MUTATE_ALL_EVENT_DATA]: (state, payload) => {
        state.datEvents = payload;
    },
    [types.MUTATE_ALL_CUSTOMER_DATA]: (state, payload) => {
        state.datCustomers = payload;
    },
    [types.MUTATE_ALL_CONTACT_DATA]: (state, payload) => {
        state.datContacts = payload;
    },
    [types.MUTATE_ALL_INVENTORY_DATA]: (state, payload) => {
        state.datInventories = payload;
    },
    [types.MUTATE_ALL_ASSET_DATA]: (state, payload) => {
        state.datAssets = payload;
    },

    [types.MUTATE_INSERT_NEW_RENTAL]: (state, payload) => {
        state.datRentals = payload;
    },
    [types.MUTATE_INSERT_NEW_EVENT]: (state, payload) => {
        state.datEvents = payload;
    }


};

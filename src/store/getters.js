import {HTTP} from './modules/api/http-common'
import * as types from './types';

export default {
//static getters
  //  [types.RENTAL_EDIT_FIELDS]: state => {
  //    return state.rental_edit_fields;
  //  },


/*
    [types.RENTAL_BUTTONS_ALWAYS_VISIBLE]: state => {
        return state.rental_buttons_always_visible;
    },
    [types.CUSTOMER_BUTTONS_ALWAYS_VISIBLE]: state => {
        return state.customer_buttons_always_visible;
    },
    [types.CONTACT_BUTTONS_ALWAYS_VISIBLE]: state => {
        return state.contact_buttons_always_visible;
    },
    [types.INVENTORY_BUTTONS_ALWAYS_VISIBLE]: state => {
        return state.inventory_buttons_always_visible;
    },
    [types.ASSET_BUTTONS_ALWAYS_VISIBLE]: state => {
        return state.asset_buttons_always_visible;
    },
*/

/*
    [types.RENTAL_BUTTONS]: state => {
        return state.rental_buttons;
    },
    [types.CUSTOMER_BUTTONS]: state => {
        return state.customer_buttons;
    },
    [types.CONTACT_BUTTONS]: state => {
        return state.contact_buttons;
    },
    [types.INVENTORY_BUTTONS]: state => {
        return state.inventory_buttons;
    },
    [types.ASSET_BUTTONS]: state => {
        return state.asset_buttons;
    },

*/

    [types.RENTAL_COLUMNS]: state => {
        return state.rental_column;
    },
    [types.EVENT_COLUMNS]: state => {
        return state.event_column;
    },
    [types.CUSTOMER_COLUMNS]: state => {
        return state.customer_column;
    },
    [types.CONTACT_COLUMNS]: state => {
        return state.contact_column;
    },
    [types.INVENTORY_COLUMNS]: state => {
        return state.inventory_column;
    },
    [types.ASSET_COLUMNS]: state => {
        return state.asset_column;
    },


    [types.GET_SELECTED]: state => {
        return state.selected;
    },
/*
    [types.GET_COLUMNS]: state => {
        return state.columns;
    },
    [types.GET_ALL_COLUMNS]: state => {
        return state.all_columns;
    },
*/
    [types.GET_SELECT_ROW]: state => {
      state.errors=[];
      state.error_request=[];
      state.error_message=[];
      state.error_config=[];
        return state.row;
    },
/*
    [types.GET_NEW_ROW]: state => {
        return state.new_row;
    },
    [types.GET_ERRORS]: state => {
        return state.errors;
    },
*/
    [types.GET_IS_ROW_SELECTED]: state => {
      state.errors=[];
      state.error_request=[];
      state.error_message=[];
      state.error_config=[];
        return state.is_row_selected;
    },
/*
    [types.GET_BUTTONS]: state => {
        return state.buttons;
    },
    [types.GET_ALWAYS_VISIBLE_BUTTONS]: state => {
        return state.always_visible_buttons;
    },

    [types.GET_DATA]: state => {
        return state.global_data;
    },

    [types.GLOBAL_GET_RENTAL]: state => {
        return state.global_rental;
    },
    [types.GLOBAL_GET_CUSTOMER]: state => {
        return state.global_customer;
    },
    [types.GLOBAL_GET_CONTACT]: state => {
        return state.global_contact;
    },
    [types.GLOBAL_GET_INVENTORY]: state => {
        return state.global_inventory;
    },
    [types.GLOBAL_GET_ASSET]: state => {
        return state.global_asset;
    },
    [types.GET_SUB_COLUMN]: state => {
        return state.sub_columns;
    },
    [types.GET_ASSET_DATA]: state => {
        return state.asset_data;
    },
    [types.GET_COMPANY_NAME]: state => {
        return state.company_name;
    },
    [types.GET_ASSET_BY_ID]: state => {
        return state.asset_by_id;
    },
*/

  /**
    [types.GET_ASSET_ROW_BY_ID]: (state) => {
      HTTP.get('asset/'+state.asset_id+'/')
      .then(response => {
        return response.data
      })
      .catch(e => {
        return this.errors.push(e);
      })
    },
    [types.GET_ASSET_ID]: state => {
        return state.asset_id;
    }
**/

//getEventById: (state, getters) => (id) => {
    [types.GET_ASSET_ROW_BY_ID]: (state) => (id) => {
      state.errors=[];
      state.error_request=[];
      state.error_message=[];
      state.error_config=[];
      //console.log(payload);
  //    console.log('findid'+id);
//      return state.all_asset_data.find([types.GET_ASSET_ROW_BY_ID] => [types.GET_ASSET_ROW_BY_ID].id == id)
      return state.all_asset_data
      //return id// state.all_asset_data.find(state.all_asset_data.id == id)
    },
/**
    GETASSETROW: (state) => (id) => {
      //console.log(payload);
      console.log('findid'+id);
      return state.all_asset_data.find(GETASSETROW => GETASSETROW.id == id)
//      return state.all_asset_data
      //return id// state.all_asset_data.find(state.all_asset_data.id == id)
    },

**/

//    asset: (id) => {
//      return state.assets.find(asset => asset.id == id)
//    },

//    itemsById({ items }, getters) {
//        return items.reduce(
//            (memo, item) => Object.assign(memo, { [item.id]: item })
//            , {}
//        )
//    },

//keep from here

    rentalsById({ datRentals }, getters) {
        return datRentals.reduce(
            (memo, datRental) => Object.assign(memo, { [datRental.id]: datRental })
            , {}
        )
    },
    customersById({ datCustomers }, getters) {
        return datCustomers.reduce(
            (memo, datCustomer) => Object.assign(memo, { [datCustomer.id]: datCustomer })
            , {}
        )
    },
    contactsById({ datContacts }, getters) {
        return datContacts.reduce(
            (memo, datContact) => Object.assign(memo, { [datContact.id]: datContact })
            , {}
        )
    },
    inventoriesById({ datInventories }, getters) {
        return datInventories.reduce(
            (memo, datInventory) => Object.assign(memo, { [datInventory.id]: datInventory })
            , {}
        )
    },
    assetsById({ datAssets }, getters) {
        return datAssets.reduce(
            (memo, datAsset) => Object.assign(memo, { [datAsset.id]: datAsset })
            , {}
        )
    },

    eventsById({ datEvents }, getters) {
        return datEvents.reduce(
            (memo, datEvent) => Object.assign(memo, { [datEvent.id]: datEvent })
            , {}
        )
    },

    eventsByRentalId({ datEvents }, getters) {
        return datEvents.reduce(
            (memo, datEvent) => Object.assign(memo, { [datEvent.rental_id]: datEvent })
            , {}
        )
    },



  [types.GET_ALL_RENTAL_DATA]: state => {
    state.errors=[];
    state.error_request=[];
    state.error_message=[];
    state.error_config=[];
          return state.datRentals;
  },
  [types.GET_ALL_CUSTOMER_DATA]: state => {
    state.errors=[];
    state.error_request=[];
    state.error_message=[];
    state.error_config=[];
          return state.datCustomers;
  },
  [types.GET_ALL_CONTACT_DATA]: state => {
    state.errors=[];
    state.error_request=[];
    state.error_message=[];
    state.error_config=[];
          return state.datContacts;
  },
  [types.GET_ALL_INVENTORY_DATA]: state => {
    state.errors=[];
    state.error_request=[];
    state.error_message=[];
    state.error_config=[];
          return state.datInventories;
  },
  [types.GET_ALL_ASSET_DATA]: state => {
    state.errors=[];
    state.error_request=[];
    state.error_message=[];
    state.error_config=[];
          return state.datAssets;
  },
  [types.GET_ALL_EVENT_DATA]: state => {
    state.errors=[];
    state.error_request=[];
    state.error_message=[];
    state.error_config=[];
          return state.datEvents;
  }


};

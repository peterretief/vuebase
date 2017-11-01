import * as types from './types';

export default {
    [types.GET_SELECTED]: state => {
        return state.selected;
    },
    [types.GET_COLUMNS]: state => {
        return state.columns;
    },
    [types.GET_ALL_COLUMNS]: state => {
        return state.all_columns;
    },
    [types.GET_SELECT_ROW]: state => {
        return state.row;
    },
    [types.GET_NEW_ROW]: state => {
        return state.new_row;
    },
    [types.GET_ERRORS]: state => {
        return state.errors;
    },
    [types.GET_IS_ROW_SELECTED]: state => {
        return state.is_row_selected;
    },
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
    }
};

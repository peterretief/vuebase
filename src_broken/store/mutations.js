import * as types from './types';

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
    [types.MUTATE_BUTTONS]: (state, payload) => {
        state.buttons = payload;
    },

    [types.MUTATE_ALWAYS_VISIBLE_BUTTONS]: (state, payload) => {
        state.always_visible_buttons = payload;
    },
    
    [types.MUTATE_IS_ROW_SELECTED]: (state) => {
        state.is_row_selected = false
    },
    [types.MUTATE_DATA]: (state, payload) => {
        state.global_data = payload;
    },

    [types.MUTATE_CLEAR_DATA]: (state) => {
        state.global_data = [];
    },

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
    }

};

const state = {
customer_: false,
customer_contact: false,
customer_address: false,
customer_file: false
};

const mutations = {
  //custome form
  'CUSTOMER_OPEN' (state) {
    state.customer_ = true;
  },
  'CUSTOMER_CLOSE' (state) {
    state.customer_ = false;
  },
  //contact form
  'CUSTOMER_CONTACT_OPEN'(state) {
    state.customer_contact = true;
  },
  'CUSTOMER_CONTACT_CLOSE'(state) {
    state.customer_contact = false;
  },
  //address form
  'CUSTOMER_ADDRESS_OPEN'(state) {
    state.customer_address = true;
  },
  'CUSTOMER_ADDRESS_CLOSE'(state) {
    state.customer_adress = false;
  },
  //file form
  'CUSTOMER_FILE_OPEN'(state) {
    state.customer_file = true;
  },
  'CUSTOMER_FILE_CLOSE'(state) {
    state.customer_file = false;
  },
};

const actions = {

};

const getters = {
  customer_modal_state: state => {
    return state.customer_
  },
  customer_contact_modal_state: state => {
    return state.customer_contact
  },
  customer_address_modal_state: state => {
    return state.customer_address
  },
  customer_file_modal_state: state => {
    return state.customer_file
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}

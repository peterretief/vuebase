const state = {
modal1: false,
modal2: false,
modal3: false,
modal4: false,
modal5: false,
modal6: false,
modal7: false,
modal8: false,
modal9: false
};

const mutations = {
  'MODAL_1_OPEN' (state) {
    state.modal1 = true;
  },
  'MODAL_2_OPEN' (state) {
    state.modal2 = true;
  },
  'MODAL_3_OPEN'(state) {
    state.modal3 = true;
  },
  'MODAL_4_OPEN'(state) {
    state.modal4 = true;
  },
  'MODAL_5_OPEN'(state) {
    state.modal5 = true;
  },

  'MODAL_6_OPEN'(state) {
    state.modal6 = true;
  },
  'MODAL_7_OPEN'(state) {
    state.modal7 = true;
  },
  'MODAL_8_OPEN'(state) {
    state.modal8 = true;
  },
  'MODAL_9_OPEN'(state) {
    state.modal9 = true;
  },

  'MODAL_1_CLOSE' (state) {
    state.modal1 = false;
  },
  'MODAL_2_CLOSE' (state) {
    state.modal2 = false;
  },
  'MODAL_3_CLOSE'(state) {
    state.modal3 = false;
  },
  'MODAL_4_CLOSE'(state) {
    state.modal4 = false;
  },
  'MODAL_5_CLOSE'(state) {
    state.modal5 = false;
  },

'MODAL_6_CLOSE'(state) {
  state.modal6 = false;
},

'MODAL_7_CLOSE'(state) {
  state.modal7 = false;
},

'MODAL_8_CLOSE'(state) {
  state.modal8 = false;
},

'MODAL_9_CLOSE'(state) {
  state.modal9 = false;
}
};


const getters = {
  modal_1_state: state => {
    return state.modal1
  },
  modal_2_state: state => {
    return state.modal2
  },
  modal_3_state: state => {
    return state.modal3
  },
  modal_4_state: state => {
    return state.modal4
  },
  modal_5_state: state => {
    return state.modal5
  },
  modal_6_state: state => {
    return state.modal6
  },
  modal_7_state: state => {
    return state.modal7
  },
  modal_8_state: state => {
    return state.modal8
  },
  modal_9_state: state => {
    return state.modal9
  }
};

export default {
  state,
  mutations,
  getters
}

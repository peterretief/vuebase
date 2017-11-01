import * as types from './types';
import {HTTP} from './modules/api/http-common'

export default {
 [types.ACTION_RELEASE_ROW]: ({commit}) => {
     commit(types.MUTATE_RELEASE_ROW);
},
[types.ACTION_SELECT_ROW]: ({commit}, payload) => {
     commit(types.MUTATE_SELECT_ROW, payload);
 },
[types.ACTION_COLUMNS]: ({commit}, payload) => {
    commit(types.MUTATE_COLUMNS, payload);
},
[types.ACTION_ALL_COLUMNS]: ({commit}, payload) => {
    commit(types.MUTATE_ALL_COLUMNS, payload);
},

[types.ACTION_BUTTONS]: ({commit}, payload) => {
    commit(types.MUTATE_BUTTONS, payload);
},

[types.ACTION_DATA]: ({commit}, payload) => {
    commit(types.MUTATE_DATA, payload);
},

[types.GLOBAL_ACTION_RENTAL]: ({commit, state}) => {
  HTTP.get('rental/')
  .then(response => {
    commit(types.GLOBAL_MUTATE_RENTAL, response.data);
    state.global_data = response.data
  })
  .catch(e => {
    this.errors.push(e);
  })

},

[types.GLOBAL_ACTION_CUSTOMER]: ({commit, state}) => {
  HTTP.get('customer/')
  .then(response => {
    commit(types.GLOBAL_MUTATE_CUSTOMER, response.data);
    state.global_data = response.data
  })
  .catch(e => {
    this.errors.push(e);
  })

},
[types.GLOBAL_ACTION_CONTACT]: ({commit, state}) => {
  HTTP.get('contact/')
  .then(response => {
    commit(types.GLOBAL_MUTATE_CONTACT, response.data);
    state.global_data = response.data
  })
  .catch(e => {
    this.errors.push(e);
  })

},
[types.GLOBAL_ACTION_INVENTORY]: ({commit, state}) => {
  HTTP.get('inventory/')
  .then(response => {
    commit(types.GLOBAL_MUTATE_INVENTORY, response.data);
    state.global_data = response.data
  })
  .catch(e => {
    this.errors.push(e);
  })

},
[types.GLOBAL_ACTION_ASSET]: ({commit, state}) => {
  HTTP.get('asset/')
  .then(response => {
    commit(types.GLOBAL_MUTATE_ASSET, response.data);
    state.global_data = response.data
  })
  .catch(e => {
    this.errors.push(e);
  })

},


[types.ACTION_UPDATE_ROW]: ({commit, state}, payload) => {
var newArr = state.columns.slice(1);
var arrayLength = newArr.length;
var anothervar = {}
var astring = ''
for (var i = 0; i < arrayLength; i++) {
  astring = new String(newArr[i].trim());
  anothervar[astring] = payload[newArr[i]];
}
 var str_put = state.selected.trim().toLowerCase()+'/'+state.row.id+'/'
   //var payload = {'name': payload.name}
   HTTP.put(str_put, anothervar)
   .then(response => {
     commit(types.MUTATE_UPDATE_ROW, payload);
   })
   .catch(e => {
     state.errors.push(e);
   })
 },
 [types.ACTION_NEW_ROW]: ({commit, state}, payload) => {
   console.log(payload);
 var newArr = state.columns.slice(1);
 var arrayLength = newArr.length;
 var anothervar = {}
 var astring = ''
 for (var i = 0; i < arrayLength; i++) {
   astring = new String(newArr[i].trim());
   anothervar[astring] = payload[newArr[i]];
 }
  var str_put = state.selected.trim().toLowerCase()+'/'
    //var payload = {'name': payload.name}
    HTTP.post(str_put, anothervar)
    .then(response => {
      commit(types.MUTATE_NEW_ROW, payload);
    })
    .catch(e => {
      state.errors.push(e);
    })
   }

};

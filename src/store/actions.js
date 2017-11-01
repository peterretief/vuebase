import * as types from './types';
import {HTTP} from './modules/api/http-common'

export default {

 [types.ACTION_RELEASE_ROW]: ({commit, state}) => {
   state.errors=[];
   state.error_request=[];
   state.error_message=[];
   state.error_config=[];
   state.http_status_code=[];
   commit(types.MUTATE_RELEASE_ROW);
},

[types.ACTION_SELECT_ROW]: ({commit, state}, payload) => {
  state.errors=[];
  state.error_request=[];
  state.error_message=[];
  state.error_config=[];
  state.http_status_code=[];
   commit(types.MUTATE_SELECT_ROW, payload);
 },


[types.ACTION_UPDATE_RENTAL]: ({commit, state}, payload) => {
  state.errors=[];
  state.error_request=[];
  state.error_message=[];
  state.error_config=[];
  state.http_status_code=[];
  // var newvar = JSON.parse(JSON.stringify(payload));
  // delete newvar["event"]

   HTTP.put('rental/'+payload.id+'/', payload)
 .then(response => {
//     commit(types.MUTATE_UPDATE_RENTAL, payload);
       state.datRentals[payload.id] = response.data
       state.http_status_code = response.status
   })
   .catch(e => {
     state.errors.push(e);
   })
 },

/*

 [types.ACTION_UPDATE_EVENT]: ({commit, state}, payload) => {
   state.errors=[];
   state.error_request=[];
   state.error_message=[];
   state.error_config=[];
   state.http_status_code=[];
    var newvar = JSON.parse(JSON.stringify(payload));
//    delete newvar["event"]

//    console.log(payload);
    HTTP.put('event/'+state.row.id+'/', newvar)
  .then(response => {
    //  commit(types.MUTATE_UPDATE_EVENT, payload);
      state.datEvent.push(response.data)
    })
    .catch(e => {
      state.errors.push(e);
    })
  },
*/

/*
  [types.ACTION_UPDATE_RENTAL]: ({commit, state}, payload) => {
    state.errors=[];
    state.error_request=[];
    state.error_message=[];
    state.error_config=[];
    state.http_status_code=[];
//     var newvar = JSON.parse(JSON.stringify(payload));
//     delete newvar["event"]

     HTTP.put('rental/'+payload.id+'/', payload)
   .then(response => {
       //commit(types.MUTATE_UPDATE_CUSTOMER, payload);
        state.datRental['payload.id'] = response.data
        state.http_status_code = response.status
     })
     .catch(e => {
       state.errors.push(e);
     })
   },

*/

   [types.ACTION_UPDATE_CUSTOMER]: ({commit, state}, payload) => {
     state.errors=[];
     state.error_request=[];
     state.error_message=[];
     state.error_config=[];
     state.http_status_code=[];


      HTTP.put('customer/'+payload.id+'/', payload)
    .then(response => {
        //commit(types.MUTATE_UPDATE_CUSTOMER, payload);
         state.datCustomers['payload.id'] = response.data
         state.http_status_code.push(response.status)
      })
      .catch(e => {
        state.errors.push(e);
      })
    },



[types.ACTION_UPDATE_ROW]: ({commit, state}, payload) => {
  state.errors=[];
  state.error_request=[];
  state.error_message=[];
  state.error_config=[];
  state.http_status_code=[];
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
   state.errors=[];
   state.error_request=[];
   state.error_message=[];
   state.error_config=[];
   state.http_status_code=[];
//   console.log(payload);
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
  },

//good from here
   [types.ACTION_ALL_RENTAL_DATA]: ({commit, state}) => {
     state.errors=[];
     state.error_request=[];
     state.error_message=[];
     state.error_config=[];
     state.http_status_code=[];
      HTTP.get('rental/')
      .then(response => {
        commit(types.MUTATE_ALL_RENTAL_DATA, response.data);
      })
      .catch(e => {
        state.errors.push(e);
      })
    },

    [types.ACTION_ALL_EVENT_DATA]: ({commit, state}) => {
      state.errors=[];
      state.error_request=[];
      state.error_message=[];
      state.error_config=[];
      state.http_status_code=[];
       HTTP.get('event/')
       .then(response => {
         commit(types.MUTATE_ALL_EVENT_DATA, response.data);
       })
       .catch(e => {
         state.errors.push(e);
       })
     },

    [types.ACTION_ALL_CUSTOMER_DATA]: ({commit, state}) => {
      state.errors=[];
      state.error_request=[];
      state.error_message=[];
      state.error_config=[];
      state.http_status_code=[];
       HTTP.get('customer/')
       .then(response => {
         commit(types.MUTATE_ALL_CUSTOMER_DATA, response.data);
       })
       .catch(e => {
         state.errors.push(e);
       })
     },
     [types.ACTION_ALL_CONTACT_DATA]: ({commit, state}) => {
       state.errors=[];
       state.error_request=[];
       state.error_message=[];
       state.error_config=[];
       state.http_status_code=[];
        HTTP.get('contact/')
        .then(response => {
          commit(types.MUTATE_ALL_CONTACT_DATA, response.data);
        })
          .catch(e => {
          state.errors.push(e);
        })
      },
      [types.ACTION_ALL_INVENTORY_DATA]: ({commit, state}) => {
        state.errors=[];
        state.error_request=[];
        state.error_message=[];
        state.http_status_code=[];
        state.error_config=[];
         HTTP.get('inventory/')
         .then(response => {
           commit(types.MUTATE_ALL_INVENTORY_DATA, response.data);
         })
         .catch(e => {
           state.errors.push(e);
         })
       },
       [types.ACTION_ALL_ASSET_DATA]: ({commit, state}) => {
         state.errors=[];
         state.error_request=[];
         state.error_message=[];
         state.error_config=[];
         state.http_status_code=[];
          HTTP.get('asset/')
          .then(response => {
            commit(types.MUTATE_ALL_ASSET_DATA, response.data);
          })
          .catch(e => {
            state.errors.push(e);
          })
        },

        [types.ACTION_INSERT_NEW_RENTAL]: ({commit, state}, payload) => {
          state.errors=[];
          state.error_request=[];
          state.error_message=[];
          state.error_config=[];
          state.http_status_code=[];
           HTTP.post('rental/', payload)
           .then(response => {
             state.datRentals.push(response.data)
// need to update local record not rebuild the whole mutation
//             commit(types.MUTATE_INSERT_NEW_RENTAL, response.data);
           })
           .catch(e => {
             state.errors.push(e);
           })
         },


         [types.ACTION_INSERT_NEW_CUSTOMER]: ({commit, state}, payload) => {
           state.errors=[];
           state.error_request=[];
           state.error_message=[];
           state.error_config=[];
           state.http_status_code=[];
            HTTP.post('customer/', payload)
            .then(response => {
              state.datCustomers.push(response.data)
 // need to update local record not rebuild the whole mutation
 //             commit(types.MUTATE_INSERT_NEW_RENTAL, response.data);
            })
            .catch(e => {
              state.errors.push(e);
            })
          },


         [types.ACTION_INSERT_NEW_EVENT]: ({commit, state}, payload) => {
            state.errors=[];
            state.error_request=[];
            state.error_message=[];
            state.error_config=[];
            state.http_status_code=[];
            state.http_status_text=[];

            HTTP.post('event/', payload)
            .then(function(response) {
//              console.log(response.data);
              state.http_status_code.push(response.status)
//              console.log('status'+response.status);
              state.http_status_text.push(response.statusText)
//              console.log('status text'+response.statusText);
//              console.log(response.headers);
//              console.log(response.config);
              state.record_saved.push(response.statusText)
              //commit(types.MUTATE_INSERT_NEW_EVENT, response.data);
              state.datEvents.push(response.data)

             })
             .catch(function (error) {
                 if (error.response) {
                   state.http_status_code.push(error.response.status)
                   state.errors.push(error.response.data)
                 } else if (error.request) {
                   state.error_request.push(error.request)
                   state.http_status_code.push(error.response.status)
                 } else {
                   state.error_message.push(error.message)
                   state.http_status_code.push(error.response.status)

                 }
                 state.error_config.push(error.config)
//                 state.http_status_code.push(error.response.status)
               });

          }


};

<template>
    <div class="modal" :class="{'is-active': ShowForm }">
      <div class="modal-background"></div>
      <div class="modal-content">


        <Errors style='background: white'>
        </Errors>

        <br>


        <div class="field">
          <p class="control has-icons-left">
            <span class="select">
              <select v-model="rental.customer_id">
                <option selected>Select customer</option>
                <option v-for="customer in getNames" v-bind:value=" customer.id" >
                  {{ customer.CompanyName }}
                </option>
              </select>
            </span>
          </p>
        </div>


        <div class="field">
          <label class="label">Tracking code</label>
          <div class="control">
            <input class="input" type="text" placeholder="Unique tracking code for rental" v-model="rental.name">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click='submitNew(rental)'>Submit</button>
          </div>
          <div class="control">
            <button class="button is-text" @click='closeModal'>Cancel</button>
          </div>
        </div>

      </div>
      <button class="modal-close is-large" aria-label="close" @click='closeModal'></button>
    </div>

</template>


<script>

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import * as types from '../../store/types';
import Errors from './Errors.vue';

export default {
  components: {
    Errors: Errors
  },

  computed: {
    ShowForm: function () {
      return this.$store.getters.rental_modal_state
    },
    ...mapGetters({
       GET_ALL_CUSTOMER_DATA: types.GET_ALL_CUSTOMER_DATA
      }),
    getNames: function(){
      return this.GET_ALL_CUSTOMER_DATA;
    }
  },

  name: "modal",
  methods: {
    ...mapActions({
       ACTION_INSERT_NEW_RENTAL: types.ACTION_INSERT_NEW_RENTAL
//       ACTION_INSERT_NEW_EVENT: types.ACTION_INSERT_NEW_EVENT
    }),

     closeModal: function(){
          this.$store.commit('closeRental')

     },
     submitNew: function(rental) {
       this.ACTION_INSERT_NEW_RENTAL(rental)
       this.$store.getters.newRental = false;
     }
 },

 data: function () {
   return {
     rental: {
       name: '',
       customer_id: ''
     }
    }
  }
}



</script>
<style lang="scss" scoped>
</style>

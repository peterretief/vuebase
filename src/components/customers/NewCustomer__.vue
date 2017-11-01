
<template>
    <div class="modal" :class="{'is-active': ShowForm }">
      <div class="modal-background"></div>
      <div class="modal-content">


        <Errors style='background: white'>
        </Errors>

        <br>


        <div class="field">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Tracking name"  v-model="customer.name">
          </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="AccountCode"  v-model="customer.AccountCode">
        </div>
    </div>


        <div class="field">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="CompanyName"  v-model="customer.CompanyName">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="VAT number"  v-model="customer.VATNumber">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Quick name"  v-model="customer.QuickName">
          </div>
        </div>

          <div class="field">
            <div class="control">
              <input class="input is-primary" type="text" placeholder="Quick contact"  v-model="customer.QuickContact">
            </div>
          </div>


          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <label class="radio">
                  <input type="radio" value=1  name="member" v-model='customer.status'>
                  Active
                </label>
                <label class="radio">
                  <input type="radio" value=0 name="member" v-model='customer.status'>
                  Inactive
                </label>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Comments</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea class="textarea" placeholder="Any other information" v-model='customer.comments'></textarea>
                </div>
              </div>
            </div>
          </div>

  </div>


        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click='submitNew()'>Submit</button>
          </div>
          <div class="control">
            <button class="button is-text" @click='closeModal'>Cancel</button>
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
      return this.$store.state.newCustomer
    }
  },
  name: "modal",
  methods: {
    ...mapActions({
       ACTION_INSERT_NEW_RENTAL: types.ACTION_INSERT_NEW_RENTAL
//       ACTION_INSERT_NEW_EVENT: types.ACTION_INSERT_NEW_EVENT
    }),

     closeModal: function(){
        this.$store.state.newCustomer = false;

     },
     submitNew: function(rental) {
       this.ACTION_INSERT_NEW_CUSTOMER(rental)
       this.$store.state.newCustomer = false;
     }
 },

/*
 var payload = {'name': this.getRowData.name, 'id': this.getRowData.id,
 'CompanyName': this.getRowData.CompanyName,'AccountCode': this.getRowData.AccountCode,
 'VATNumber': this.getRowData.VATNumber,'QuickName': this.getRowData.QuickName,
 'QuickContact': this.getRowData.QuickContact,'status': this.getRowData.status,
 'comments': this.getRowData.comments}
*/

 data: function () {
   return {
     customer: {
       name: '',
       CompanyName: '',
       AccountCode: '',
       VATNumber: '',
       QuickName: '',
       QuickContact: '',
       status: '',
       comments: ''
     }
    }
  }
}



</script>
<style lang="scss" scoped>
</style>

<template>
    <div class="modal" :class="{'is-active': ShowForm }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <Errors style='background: white'>
        </Errors>


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
            <input class="input is-primary" type="text" placeholder="CompanyName"  v-model="customer.CompanyName" required >
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

            <div class="field-label is-normal">
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea class="textarea" placeholder="Any other information" v-model='customer.comments'></textarea>
                </div>
              </div>
            </div>

<br>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click='submitNew()'>Submit</button>
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
import Errors from './Errors.vue';
import { mapActions } from 'vuex';
import * as types from '../../store/types';

export default {
  components: {
    Errors: Errors
  },
  computed: {
    ShowForm: function () {
      return this.$store.getters.customer_modal_state
    }
  },

  name: "modal",
  methods: {
    ...mapActions({
       ACTION_INSERT_NEW_CUSTOMER: types.ACTION_INSERT_NEW_CUSTOMER
    }),
     closeModal: function(){
          this.$store.commit('closeCustomer')
     },
     submitNew: function() {
       this.ACTION_INSERT_NEW_CUSTOMER(this.customer)
       this.$store.state.newCustomer = false;
     }
  },
  data: function () {
    return {
      customer: {
        name: '',
        CompanyName: '',
        AccountCode: '',
        VATNumber: '',
        QuickName: '',
        QuickContact: '',
        status: 1,
        comments: ''
      }
     }
   }
 }

</script>
<style lang="scss" scoped>
</style>

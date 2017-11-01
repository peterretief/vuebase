<template>
  <div id="fragment">

    <div id="fragment">

      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="Tracking name"  v-model="getRowData.name">
        </div>
    </div>

    <div class="field">
      <div class="control">
        <input class="input is-primary" type="text" placeholder="AccountCode"  v-model="getRowData.AccountCode">
      </div>
  </div>


      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="CompanyName"  v-model="getRowData.CompanyName">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="VAT number"  v-model="getRowData.VATNumber">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="Quick name"  v-model="getRowData.QuickName">
        </div>
      </div>

        <div class="field">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Quick contact"  v-model="getRowData.QuickContact">
          </div>
        </div>


        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <label class="radio">
                <input type="radio" value=1  name="member" v-model='getRowData.status'>
                Active
              </label>
              <label class="radio">
                <input type="radio" value=0 name="member" v-model='getRowData.status'>
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
                <textarea class="textarea" placeholder="Any other information" v-model='getRowData.comments'></textarea>
              </div>
            </div>
          </div>
        </div>

</div>

    <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary"@click="updateCustomer();">Update</button>
        </div>

        <div class="control">
  <transition v-if="$store.state.http_status_code == 200" class="animated fadeOutUp" style='-webkit-animation-delay: 2s;'>
  <p style='color: green'>
    Success
  </p>
  </transition>
        </div>
      </div>

</div>

</template>

<script>
//import NewContact from './NewContact.vue';
import * as types from '../../store/types';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: "fragment",

  methods: {
    ...mapActions({
      ACTION_UPDATE_CUSTOMER: types.ACTION_UPDATE_CUSTOMER
    }),
    openForm: function(){
//         console.log(this.local_data.id);
//          set_rental_id_for_new_event
//      console.log(this.$store.getters.event_modal_state+'found');
         this.$store.commit('set_rental_id_for_new_contact', this.getRowData.id)
//         console.log(this.$store.getters.get_rental_id_for_new_event);
         this.$store.state.newCustomer = true
//         this.$store.commit('openContact')

    },
    updateCustomer: function(){

      var payload = {'name': this.getRowData.name, 'id': this.getRowData.id,
      'CompanyName': this.getRowData.CompanyName,'AccountCode': this.getRowData.AccountCode,
      'VATNumber': this.getRowData.VATNumber,'QuickName': this.getRowData.QuickName,
      'QuickContact': this.getRowData.QuickContact,'status': this.getRowData.status,
      'comments': this.getRowData.comments}
      this.ACTION_UPDATE_CUSTOMER(payload)
    }
  },
  props: ['local_data'],
  computed: {
    getRowData(){
      return this.$store.state.customer_selected_row;
    },
    getmodals() {
      return this.$store.getters.contact_modal_state
    }
  }
}

</script>
<style lang="scss" scoped>
</style>

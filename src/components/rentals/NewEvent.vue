<template>
    <div class="modal" :class="{'is-active': ShowForm }">
      <div class="modal-background"></div>
      <div class="modal-content">


        <Errors v-if="show">
        </Errors>

        <div class="field">
          <label class="label">Tracking code</label>
          <div class="control">
            <input class="input" type="text" placeholder="Unique tracking code for event" v-model="event.name" required>
          </div>
        </div>


        <div class="field">
          <p class="control has-icons-left">
            <span class="select">
              <select v-model="event.asset_id">
                <option v-for="asset in getAssets" v-bind:value=" asset.id" >
                  {{ asset.bar_code }}
                </option>
              </select>
            </span>
          </p>
        </div>


<button type="button" name="button" @click='submitNew();'>Submit</button>


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
    getRentalID: function () {
      return this.$store.getters.get_rental_id_for_new_event
    },
    ShowForm: function () {
      return this.$store.getters.event_modal_state
    },
    ...mapGetters({
       GET_ALL_ASSET_DATA: types.GET_ALL_ASSET_DATA
    }),
    getAssets: function() {
      return this.GET_ALL_ASSET_DATA;
    }
  },

  name: "modal",

 data: function () {
   return {
     show: false,
     event: {
       name: '',
       rental_id: '',
       asset_id: ''
     }
    }
  },
  methods: {
    ...mapActions({
       ACTION_INSERT_NEW_EVENT: types.ACTION_INSERT_NEW_EVENT
    }),
     closeModal: function(){
          this.$store.commit('closeEvent')
          this.event = []

     },
     submitNew: function(event) {
       this.show=true
       var payload = {'name': this.event.name, 'asset': this.event.asset_id, 'rental': this.getRentalID }
       this.ACTION_INSERT_NEW_EVENT(payload)
    //   this.$store.dispatch(types.ACTION_ALL_EVENT_DATA);
       this.event = []

     }
   }
}

</script>
<style lang="scss" scoped>

</style>

<template>
  <div id="fragment">

    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" @click='openForm'>
          New asset rental
        </a>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Code</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" placeholder="Name" v-model='getRowData.name'>
            <span class="icon is-small is-left">
              <i class="fa fa-arrow"></i>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">Active</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <label class="radio">
              <input type="radio" value=1  name="member" v-model='getRowData.status'>
              Yes
            </label>
            <label class="radio">
              <input type="radio" value=0 name="member" v-model='getRowData.status'>
              No
            </label>
          </div>
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

    <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary"@click="updateRental();">Update</button>
        </div>

<div class="control">

<transition v-if="$store.state.http_status_code == 200" class="animated fadeOutUp" style='-webkit-animation-delay: 2s;'>
<p style='color: green'>
  Success
</p>
</transition>
        </div>
      </div>

<newEvent>
</newEvent>

</div>

</template>

<script>
import NewEvent from './NewEvent.vue';
import * as types from '../../store/types';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: "fragment",
  components: {
    NewEvent: NewEvent
  },

  methods: {
    ...mapActions({
      ACTION_UPDATE_RENTAL: types.ACTION_UPDATE_RENTAL
    }),

    updateRental: function(){
      var payload = {'name': this.getRowData.name,
      'comments': this.getRowData.comments,
      'id': this.getRowData.id,
      'status': this.getRowData.status }
      this.ACTION_UPDATE_RENTAL(payload)
    },
    openForm: function(){
//         console.log(this.local_data.id);
//          set_rental_id_for_new_event
//      console.log(this.$store.getters.event_modal_state+'found');
         this.$store.commit('set_rental_id_for_new_event', this.getRowData.id)
//         console.log(this.$store.getters.get_rental_id_for_new_event);
         this.$store.commit('openEvent')

    }
  },
  computed: {
    getRowData(){
      return this.$store.state.rental_selected_row;
    },
    getmodals() {
      return this.$store.getters.event_modal_state
    }
  }
}

</script>
<style lang="scss" scoped>
</style>

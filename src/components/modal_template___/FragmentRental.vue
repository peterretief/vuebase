<template>
  <div id="fragment">

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Code</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" placeholder="Name" v-model='local_data.name'>
            <span class="icon is-small is-left">
              <i class="fa fa-arrow"></i>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Status</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Quoted</option>
                <option>Invoiced</option>
                <option>Paid in full</option>
                <option>Ready for delivery</option>
                <option>Ready for collection</option>
                <option>Dispatched/Collected</option>
                <option>Returned complete</option>
              </select>
            </div>
          </div>
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
              <input type="radio" value=1  name="member" v-model='local_data.status'>
              Yes
            </label>
            <label class="radio">
              <input type="radio" value=0 name="member" v-model='local_data.status'>
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
            <textarea class="textarea" placeholder="Any other information" v-model='local_data.comments'></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary"@click="ACTION_UPDATE_RENTAL(local_data)">Update</button>
        </div>
        <div class="control">
          <button class="button is-link" @click="ClearData">Cancel</button>
        </div>
      </div>


</div>
</template>
<script>
import * as types from '../../store/types';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {



  methods: {
    ClearData() {
      //this.getSelectRow = []
    },
    ...mapActions({
      ACTION_UPDATE_RENTAL: types.ACTION_UPDATE_RENTAL
    })
  },

  props: ['local_data'],

  name: "fragment",

  data: function () {
        return {
//            getSelectRow: 'local_data'
       }
   }
 }
</script>
<style lang="scss" scoped>
</style>

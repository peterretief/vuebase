<template>
  <div id="fragment">


    <template v-if="getSelected == 'Rentals'">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Code</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" placeholder="Name" v-model='getSelectRow.name'>
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
              <input type="radio" value=1  name="member" v-model='getSelectRow.status'>
              Yes
            </label>
            <label class="radio">
              <input type="radio" value=0 name="member" v-model='getSelectRow.status'>
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
            <textarea class="textarea" placeholder="Any other information" v-model='getSelectRow.comments'></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary" @click="ACTION_UPDATE_RENTAL(getSelectRow)">Update</button>
        </div>
        <div class="control">
          <button class="button is-link" @click='actionReleaseRow'>Cancel</button>
        </div>
      </div>


  </template>

<!--
    <template v-if="getSelected == 'Rentals'">

      <div class="form" v-for="elem in RENTAL_EDIT_FIELDS[0]" :key="elem.key">
      <div class="field">
        <label class="label">{{elem}}</label>
        <div class="control">
          <input class="input" type="text" v-model='getSelectRow[elem]'>
        </div>
      </div>
    </div>
    <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary" @click="actionUpdateRow(getSelectRow)">Update</button>
        </div>
        <div class="control">
          <button class="button is-link" @click='actionReleaseRow'>Cancel</button>
        </div>
      </div>

  </template>
-->

<!--

    <div class="form" v-for="elem in getColumns.slice(1)" :key="elem.key">
    <div class="field">
      <label class="label">{{elem}}</label>
      <div class="control">
        <input class="input" type="text" v-model='getSelectRow[elem]'>
      </div>
    </div>
  </div>

  <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" @click="actionUpdateRow(getSelectRow)">Update</button>
      </div>
      <div class="control">
        <button class="button is-link" @click='actionReleaseRow'>Cancel</button>
      </div>
    </div>
-->


</div>
</template>
<script>
import * as types from '../../store/types';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: "fragment",
  computed: {
    test_visibility: function(){
      if (this.getIsSelected==false) {
        this.actionReleaseRow
        //this.selectedKey=''
      }
    },
      ...mapGetters({
          getSelected: types.GET_SELECTED,
          getSelectRow: types.GET_SELECT_ROW,
          getColumns: types.GET_COLUMNS,
          RENTAL_EDIT_FIELDS: types.RENTAL_EDIT_FIELDS,
          getIsSelected: types.GET_IS_ROW_SELECTED
      })
    },

    methods: {
        toggle_selected: function(){
          this.MUTATE_IS_ROW_SELECTED
          return this.getIsSelected
      },
      ...mapMutations({
          MUTATE_IS_ROW_SELECTED: types.MUTATE_IS_ROW_SELECTED
      }),

      ...mapActions({
          actionSelected: types.ACTION_SELECTED,
          actionUpdateRow: types.ACTION_UPDATE_ROW,
          actionReleaseRow: types.ACTION_RELEASE_ROW,
          actionSelectRow: types.ACTION_SELECT_ROW,
          ACTION_UPDATE_RENTAL: types.ACTION_UPDATE_RENTAL
      })
    },

  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>

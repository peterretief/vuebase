<template>
  <div id="fragment">

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
          getButtons: types.GET_BUTTONS,
          getIsSelected: types.GET_IS_ROW_SELECTED
      })
    },

    methods: {
      toggle_selected: function(){
          this.MUTATE_IS_ROW_SELECTED
          console.log(this.getIsSelected);
          return this.getIsSelected
      },
      ...mapMutations({
          MUTATE_IS_ROW_SELECTED: types.MUTATE_IS_ROW_SELECTED
      }),

      ...mapActions({
          actionSelected: types.ACTION_SELECTED,
          actionUpdateRow: types.ACTION_UPDATE_ROW,
          actionReleaseRow: types.ACTION_RELEASE_ROW,
          actionSelectRow: types.ACTION_SELECT_ROW
      })
    },

  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>

<template>

    <div class="modal" :class="{'is-active': form_visible }">
      <div class="modal-background"></div>
      <div class="modal-content">

        <div class="form" v-for="elem in getColumns.slice(1)" :key="elem.key">
        <div class="field">
          <label class="label"><b style="background-color: grey">{{elem}}</b></label>
          <div class="control">
            <input class="input" type="text" v-model="data[elem]">
          </div>
        </div>

      </div>

      <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary" @click="actionNewRow(data)">Update</button>
          </div>
          <div class="control">
            <button class="button is-link" @click="closemodal">Cancel</button>
          </div>
        </div>

    </div>
      <button class="modal-close is-large" aria-label="close" @click="closemodal"></button>
    </div>

</template>


<script>
import Form1 from '../form_templates/Form1.vue';
import * as types from '../../store/types';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  components: {
    appForm1: Form1
  },


  computed:{
    ...mapGetters({
        getSelected: types.GET_SELECTED,
//        getSelectRow: types.GET_SELECT_ROW,
        getColumns: types.GET_COLUMNS
    }),
      form_visible(){
      var vis = this.$store.getters.modal_1_state
      if (vis) {
        return true
      } else {
        return false
      }
    }
  },
  name: "modal",
  data: () => ({
    data: []

  }),

  methods: {
    ...mapActions({
        actionSelected: types.ACTION_SELECTED,
        actionReleaseRow: types.ACTION_RELEASE_ROW,
        actionNewRow: types.ACTION_NEW_ROW
    }),
    closemodal: function(){
      this.$store.commit("MODAL_1_CLOSE")
      console.log(this.$store.getters.modal_1_state);
  }
 }
}
</script>
<style lang="scss" scoped>
</style>

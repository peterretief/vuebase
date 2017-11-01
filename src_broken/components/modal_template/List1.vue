<template>
  <div id="list1">

<appModal1>
</appModal1>

<appModal2>
</appModal2>

<div class="tile is-ancestor">
  <div class="tile is-4 is-vertical">
    <hr/>

    <div class="tile">

      <div class="field is-grouped" v-for="butt in getAlwaysVisibleButtons" :key="butt.key">
        <p class="control">
          <a class="button is-small" @click='openmodal_1'>
          <!--  {{butt}} -->
          </a>
        </p>
      </div>
<template v-if="getIsSelected">
      <div class="field is-grouped" v-for="elem in getButtons" :key="elem.key">
        <p class="control">
          <a class="button is-small" @click='openmodal_2'>
            {{elem}}
          </a>
        </p>
      </div>
  </template>
    </div>

    <div class="tile">
    </div>

    <div class="tile">
      <appGrid1>
      </appGrid1>
    </div>


<template v-if="getIsSelected">

    <div class="tile">
      <appFragment>
      </appFragment>
    </div>

</template>

  </div>

  <template v-if="getIsSelected">
  <div class="tile">
    <pre>{{getSelectRow}}</pre>

  </div>
  </template>

</div>

</div>
</template>
<script>

import Modal1 from './Modal1.vue';
import Modal2 from './Modal2.vue';
import Fragment from './Fragment.vue'

import Grid1 from '../grid_templates/Grid1.vue';
import * as types from '../../store/types';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
//import { mapMutations } from 'vuex'


export default {
  computed: {
      ...mapGetters({
          getSelected: types.GET_SELECTED,
          getSelectRow: types.GET_SELECT_ROW,
          getButtons: types.GET_BUTTONS,
          getAlwaysVisibleButtons: types.GET_ALWAYS_VISIBLE_BUTTONS,
          getIsSelected: types.GET_IS_ROW_SELECTED
      }),
      getlogging() {
        console.log(this.getButtons);
      }
    },

  components: {
    appModal1: Modal1,
    appModal2: Modal2,
    appFragment: Fragment,
    appGrid1: Grid1
  },
  name: "list1",
  methods: {
    ...mapActions({
        actionSelected: types.ACTION_SELECTED,
        actionReleaseRow: types.ACTION_RELEASE_ROW,
        actionSelectRow: types.ACTION_SELECT_ROW,
        load_asset: 'load_asset'
    }),

  openmodal_1: function(){
    this.$store.commit("MODAL_1_OPEN")
    this.Modal=this.$store.getters.modal_1_state
  },
  openmodal_2: function(){
    this.$store.commit("MODAL_2_OPEN")
    console.log(this.$store.getters.modal_2_state);
    this.Modal=this.$store.getters.modal_2_state
  }
 }
}
</script>
<style lang="scss" scoped>
</style>

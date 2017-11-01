<template>

<!-- <button type="button" name="button" @click='ACTION_ALL_ASSET_DATA'>pop</button> -->

<!--
<appModal1>
</appModal1>

<appModal2>
</appModal2>
-->

<div class="tile is-ancestor">
  <div class="tile is-4 is-vertical">

    <div class="tile">

    </div>

    <div class="tile">


    </div>

<hr></hr>
<div class="tile">

  <appGrid>
  </appGrid>

</div>

  </div>

</div>
</template>
<script>

//import Modal1 from './Modal1.vue';
//import Modal2 from './Modal2.vue';
//import Fragment from './Fragment.vue'
//import AssetList from './AssetList.vue'

import Grid from './Grid.vue';
//import RentalEdit from './RentalEdit.vue';

import * as types from '../../store/types';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
//import { mapMutations } from 'vuex'


export default {
  computed: {
      ...mapGetters({
//          getSelected: types.GET_SELECTED,
//          getSelectRow: types.GET_SELECT_ROW,
//          getIsSelected: types.GET_IS_ROW_SELECTED
      })
    },

  components: {
    appGrid: Grid,
  },
  name: "list1",
  methods: {
    ...mapActions({
    //    actionSelected: types.ACTION_SELECTED,
    }),

  openmodal_1: function(){
    this.$store.commit("MODAL_1_OPEN")
    this.Modal=this.$store.getters.modal_1_state
  },
  openmodal_2: function(elem){
    this.$store.commit("MODAL_2_OPEN")
  //  this.mutateColumns(elem)
  //  this.load_asset(this.getSelectRow.id)
  //  this.Modal=this.$store.getters.modal_2_state
  }
 }
}
</script>
<style lang="scss" scoped>

  .bottom-three {
     margin-bottom: 8cm;
  }

</style>

<template>
  <div id="list1">

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


<div class="" v-if="getSelected == 'Customers'">
  <appGridCustomers>
  </appGridCustomers>
</div>

    </div>


<template v-if="getIsSelected">

    <div class="tile">
      <appFragment>
      </appFragment>
    </div>

</template>

  </div>

<template v-if="getIsSelected">

  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">

          <p class="bottom-three">
          </p>
          <p class="bottom-three">
          </p>

          <hr></hr>
          <p>

            <small>{{getSelectRow.name}}</small>
            <small>
              {{ getSelectRow.status == true ? 'Active' : 'Inactive' }}
            </small>
            <br>
      {{getSelectRow.comments}}
          </p>
          <label for="items"><strong>Activity list:</strong></label>

  <appAssetList
    :event='getSelectRow'
    >
  </appAssetList>

        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>

</template>

</div>

</div>
</template>



<script>

//import Modal1 from './Modal1.vue';
//import Modal2 from './Modal2.vue';
import Fragment from './Fragment.vue'
import AssetList from './AssetList.vue'

import GridCustomers from '../grid_templates/GridCustomers.vue';
import * as types from '../../store/types';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'


export default {
  computed: {
      ...mapGetters({
          getSelected: types.GET_SELECTED,
          getSelectRow: types.GET_SELECT_ROW,
//          getButtons: types.GET_BUTTONS,
//          getAlwaysVisibleButtons: types.GET_ALWAYS_VISIBLE_BUTTONS,
          getIsSelected: types.GET_IS_ROW_SELECTED,
          GET_ASSET_BY_ID: types.GET_ASSET_BY_ID
      })
    },

  components: {
  //  appModal1: Modal1,
  //  appModal2: Modal2,
    appFragment: Fragment,

  appGridCustomers: GridCustomers,
  appAssetList: AssetList
  },
  name: "list1",
  methods: {
    ...mapActions({
        actionSelected: types.ACTION_SELECTED,
        actionReleaseRow: types.ACTION_RELEASE_ROW,
        actionSelectRow: types.ACTION_SELECT_ROW,
    //    load_asset: 'load_asset',
        load_asset: types.ACTION_LOAD_ASSETS,
        ACTION_ALL_ASSET_DATA: types.ACTION_ALL_ASSET_DATA
    //    ACTION_ASSET_BY_ID: types.ACTION_ASSET_BY_ID
    }),

    runAction: function(id){
      this.ACTION_ASSET_BY_ID(id)
//      this.GET_ASSET_BY_ID
    },

  openmodal_1: function(){
    this.$store.commit("MODAL_1_OPEN")
    this.Modal=this.$store.getters.modal_1_state
  },
  openmodal_2: function(elem){
    this.$store.commit("MODAL_2_OPEN")

//    console.log(this.getSelectRow.id);
    this.mutateColumns(elem)
    this.load_asset(this.getSelectRow.id)
//    console.log(this.$store.getters.modal_2_state);
    this.Modal=this.$store.getters.modal_2_state
  }
 }
}
</script>
<style lang="scss" scoped>

  .bottom-three {
     margin-bottom: 8cm;
  }

</style>

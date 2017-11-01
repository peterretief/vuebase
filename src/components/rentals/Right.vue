<template>
  <div id="asset_list">

    <div class="box">
      <article class="media">
        <div class="media-content">
          <div class="content">

            <table class='table'>
                <tr>
                <th>Company</th>
                <th>Tracking</th>
                <th>Status</th>
              </tr>
              <tr v-if="Object.keys(this.getRowData).length > 0">
               <td>{{$store.getters.customersById[getRowData.customer_id].CompanyName }}</td>
               <td>{{getRowData.name}}</td>
               <td>{{ getRowData.status == true ? 'Active' : 'Inactive' }}</td>
              </tr>
            </table>


<div class="has-text-grey-dark">
            {{getRowData.comments}}
</div>


<table class="table">
  <thead>
    <tr>
      <th></th>
      <th><abbr title="Event tracking code">Event</abbr></th>
      <th><abbr title="Item name">Item</abbr></th>
      <th>Date</th>

    </tr>
  </thead>
  <tbody>


    <tr v-for="(elem, index) in getEvents" :key="elem.key">
      <th>{{index+1}}</th>
      <th>{{elem.name}}</th>
      <th>{{$store.getters.assetsById[elem.asset].name}}</th>
      <td>{{elem.update_date | formatDate}}</td>
<!--
      <td>{{$store.getters.assetsById[elem.asset].bar_code}}</td>
      <td>{{ $store.getters.inventoriesById[$store.getters.assetsById[elem.asset].inventory_id].price | currency }}</td>
-->
    </tr>

<!--
    <tr v-for="(elem, index, key) in getRowData.event" :key="elem.key">
      <th>{{index+1}}</th>
      <th>{{$store.getters.assetsById[elem.asset_id].name}}</th>
      <td>{{elem.update_date | formatDate}}</td>
      <td>{{$store.getters.assetsById[elem.asset_id].bar_code}}</td>
      <td>{{ $store.getters.inventoriesById[$store.getters.assetsById[elem.asset_id].inventory_id].price | currency }}</td>
    </tr>
-->

  </tbody>
</table>
        </div>
        </div>
      </article>
    </div>
</div>
</template>

<script>
import * as types from '../../store/types';
import { mapGetters } from 'vuex'

export default {
  name: "asset_list",
  computed: {
    getEvents(){
      var storage = [];
      var parent_id = this.getRowData.id;
      var data = this.$store.state.datEvents;
      var fLen = data.length;
      var i = 0;
      for (i = 0; i < fLen; i++) {
          if (data[i].rental_id == parent_id){
          storage.push(data[i]) ;
          }

      }

      return storage;
    },
    getRowData(){
      return this.$store.state.rental_selected_row;
    },
    ...mapGetters({
        GET_ASSET_BY_ID: types.GET_ASSET_BY_ID,
        GET_ASSET_ID: types.GET_ASSET_ID,
        GET_ASSET_ROW_BY_ID: types.GET_ASSET_ROW_BY_ID,
        GET_ALL_ASSET_DATA: types.GET_ALL_ASSET_DATA
    }),
  }
}
</script>
<style lang="scss" scoped>

</style>

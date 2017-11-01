<template>
  <div id="asset_list">

<template v-show="getRowData.rentals.length > 0">
    <table class='table'>
        <tr>
        <th>Tracking</th>
        <th>Status</th>
      </tr>



<tr class="loop" v-for="elem in getRowData.rentals" :key="elem.key">
    <td>{{ elem.name }}-
    {{ elem.status == true ? 'Active' : 'Inactive' }}
  </td>

<template v-if="getEvents.length > 0">

{{getEvents.length}}
<!--
<div v-for="event in getEvents" :key="event.key">
<td>{{event.name}}</td>
<td>{{getAssetRow(event.asset).name}}</td>
</div>
-->

</template>

</tr>




</table>
</template>

</div>
</template>

<script>
import * as types from '../../store/types';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  computed: {
    getRowData(){
      return this.$store.state.customer_selected_row;
    },
    getEvents: function(){
      var storage = [];
      var sizof = this.getRowData.rentals.length
      var data = this.getRowData.rentals
      var j = 0;
      for (j = 0; j < sizof; j++) {
        console.log(data[j].id);
          storage.push(this.$store.getters.eventsByRentalId[data[j].id]) ;
        }
        return storage
      }
    },

methods: {
  getAssetRow: function(assset_id){
    return this.$store.getters.assetsById[assset_id]
  }
},

  name: "asset_list",
  data: () => ({
  })
}
</script>
<style lang="scss" scoped>
</style>

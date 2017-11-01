<template>
  <div id="grid1">
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>

  <table class="scroll table is-bordered is-striped is-narrow is-fullwidth" id="mytable">
       <thead>
         <tr>
           <th v-for="key in getColumns[0]"
           :key="key.id"
           @click="sortBy(key)"
           :class="{ active: sortKey == key }"
           >
             {{ key | capitalize }}
           <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
           </th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="entry in filteredData"
             @click="onSelected(entry.id, entry)"
             class="row_selected"
             :id=entry.id
             >
           <td v-for="key in getColumns[0]">
             {{entry[key]}}
           </td>
         </tr>
       </tbody>
     </table>
  </div>
</template>


  </div>
</template>
<script>
//import List from '../modal_template/List1.vue';
import * as types from '../../store/types';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'


export default {
  name: 'grid1',
  /** gets the data and grid column names from the vuex store **/

  computed: {

    ...mapGetters({
        getSelected: types.GET_SELECTED,
        getColumns: types.CONTACT_COLUMNS,
        getData: types.GET_ALL_CONTACT_DATA
//        getCompanyName: types.GET_COMPANY_NAME
    }),

filteredData: function () {
  var sortKey = this.sortKey
  var filterKey = this.searchQuery && this.searchQuery.toLowerCase()
  var order = this.sortOrders[sortKey] || 1
  var data = this.getData

  if (filterKey) {
    data = data.filter(function (row) {
      return Object.keys(row).some(function (key) {
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
      })
    })
  }

  if (sortKey) {
    data = data.slice().sort(function (a, b) {
      a = a[sortKey]
      b = b[sortKey]
      return (a === b ? 0 : a > b ? 1 : -1) * order
    })
  }
  return data
  }
},
    filters: {
     capitalize: function (str) {
       return str.charAt(0).toUpperCase() + str.slice(1)
     }
   },

// METHODS
 methods: {

   ...mapActions({
       actionSelected: types.ACTION_SELECTED,
       actionReleaseRow: types.ACTION_RELEASE_ROW,
       actionSelectRow: types.ACTION_SELECT_ROW,
      // actionCompanyName: types.ACTION_COMPANY_NAME,
       ACTION_ASSET_BY_ID: types.ACTION_ASSET_BY_ID
   }),

sortBy: function (key) {
  this.sortKey = key
  this.sortOrders[key] = this.sortOrders[key] * -1
  this.removeSelection();
},
onScroll:function(e, position){
  this.position = position;
  this.removeSelection();
},

 sortBy: function (key) {
       this.removeSelection();
       this.sortKey = key
       this.sortOrders[key] = this.sortOrders[key] * -1
     },


 onSelected: function(key, entry){
   //TODO add action to mutate company name - only for rentals!!!
//console.log(entry.event[0].asset_id);
//console.log(this.getSelected);
//   this.ACTION_ASSET_BY_ID(entry[0].asset_id)
if (this.getSelected == 'Rentals'){
  this.actionCompanyName(entry.id)
}
     this.removeSelection;
   this.actionReleaseRow;


//   this.dispatch(this.actionSelectRow, {data: entry});
//       console.log(key);
   this.actionSelectRow(entry)

//WORKS CHECK IF PROBLEM SELECTINF ROW
//         this.$store.dispatch(types.ACTION_SELECT_ROW, entry);

//       this.$store.dispatch('select_Inventory', {data: entry});
       this.removeSelection();
       if (this.selectedKey !== key){
         var d = document.getElementById(key);
         d.className += " is-selected";
         this.selectedKey = key
         this.data_selected = entry
       }
//        console.log(this.$store.getters['InventoryID'].ID);

//       this.$emit("selectedKey", akey)
     },
 removeSelection: function(){
       var el = document.getElementsByClassName("row_selected");
       for(var i = 0; i < el.length; i++)
       {
          el.item(i).classList.remove("is-selected");
       }
     },
 },

// DATA
   data: function () {
       var sortOrders = {}

       this.$store.getters.getInventoryColumns.forEach(function (key) {
         sortOrders[key] = 1
       })
       return {
         sortKey: '',
         sortOrders: sortOrders,
         position: {scrollTop: 0, scrollLeft: 0},
      //   selectedKey: '',
         filterKey: '',
         searchQuery: ''
//         is_data_loaded: true
       }
    }
}

</script>


<style scoped>

table.scroll {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
}

table.scroll tbody,
table.scroll thead { display: block; }


table.scroll tbody {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #05152d;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #05152d;
}

.link{
  text-decoration: none;
/*  color: #555; */
}
.active{
/*  text-decoration: underline; */
  color: #353738;
}

thead {
/*  background: #42b983; */
/*   background: linear-gradient(#49708f, #293f50); */
/*  color: #fff; */
  font-size: 14px;
  text-transform: uppercase;
}



tfoot {
  text-align: right;
}
tfoot tr:last-child {
  background: #f0f0f2;
  color: #395870;
  font-weight: bold;
}
tfoot tr:last-child td:first-child {
  border-bottom-left-radius: 5px;
}
tfoot tr:last-child td:last-child {
  border-bottom-right-radius: 5px;
}


tr td  {
  flex: 1;/* 1 and it will fill whole space left if no flex value are set to other children*/
   /*background: #92dbe8; was grey */
  overflow: auto;
}


th, td {
  padding: 10px 15px;
  vertical-align: middle;
}
thead {

/* background: #404444; */
background: #bdc1c1;
/*
  background: linear-gradient(#49708f, #293f50);
  color: #fff;
  */
  font-size: 14px;
  text-transform: uppercase;
}
th:first-child {
  border-top-left-radius: 5px;
  text-align: left;
}
th:last-child {
  border-top-right-radius: 5px;
}


td {
  border-bottom: 1px solid #cecfd5;
  border-right: 1px solid #cecfd5;
}
td:first-child {
  border-left: 1px solid #cecfd5;
}



</style>

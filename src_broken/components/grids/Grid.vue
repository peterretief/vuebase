<template>
  <div id="component">



<table class="scroll table is-bordered is-striped is-narrow is-fullwidth" id="mytable">
    <thead>
      <tr>
        <th v-for="key in loadColumns"
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
      >
        <td v-for="key in loadColumns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
</table>

  </div>
</template>
<script>
import {mapActions} from 'vuex';
//import { mapState } from 'vuex';
export default {

//beforeCreate() {
  //do something before creating vue instance
//  this.loaded_data = this.$store.getters.customers;
//  console.log("before mount");
//},

//beforeMount() {
  //do something before mounting vue instance
//  this.loaded_data = this.$store.getters.customers;
//  console.log("before mount");
//},


updated() {
  //do something after updating vue instance
  this.loaded_data = this.$store.getters.customer;
  console.log("updated");
},

/*
  created() {
    this.loaded_data = this.$store.getters.customers;
    console.log("created");
    //return loaded_data
      },

  mounted() {
        //do something after mounting vue instance
    this.loaded_data = this.$store.getters.customers;
    console.log("mounted");
      },        //return loaded_data

*/

  //    loadColumns() {
//       return this.$store.getters.getCustomerColumns
//    }
//    loadData() {
//       return this.$store.getters.customers
//    }
//  },

computed: {
    filteredData: function () {
      var sortKey = this.sortKey
//      var filterKey = "" //this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.loaded_data

//      if (filterKey) {
//        data = data.filter(function (row) {
//          return Object.keys(row).some(function (key) {
//            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
//          })
//        })
//      }

      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    },

        loadColumns() {
           return this.$store.getters.getCustomerColumns

        },
        loaded_data() {
//           return this.$store.getters.customers
        }

  },



    methods: {
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
//        this.removeSelection();
      },
    	onScroll:function(e, position){
    		this.position = position;
//        this.removeSelection();
    	}
      },

  name: "component",
  filters: {
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },


    data: function () {
        var sortOrders = {}
      //  this.loadColumns.forEach(function (key) {
      //    sortOrders[key] = 1
      //  })
        return {
          sortKey: '',
          sortOrders: sortOrders,
          position: {scrollTop: 0, scrollLeft: 0}
      //    loaded_data: []

      //    data_selected: [],
      //    checkes: true,
      //    showModal: false,
      //    selectedKey: '',
      //    gridColumns: ['name', 'owner_id', 'customer_id']
      //    searchQuery: ''
    //      thirdModal: false
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

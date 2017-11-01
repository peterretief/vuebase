<template>
  <div id="asset_list">



    <div class="box">
      <article class="media">
        <div class="media-content">
          <div class="content">

            <p class="bottom-three">
            </p>

            <p>
        <strong>{{$store.getters.customersById[event.customer_id].CompanyName}}</strong>

              <small>{{event.name}}</small>
              <small>
                {{ event.status == true ? 'Active' : 'Inactive' }}
              </small>
              <br>
        {{event.comments}}
            </p>
            <label for="items"><strong>Activity list:</strong></label>

            <div class="assets" v-for="elem in event.event" :key="elem.key">
              {{$store.getters.assetsById[elem.asset_id].name}}
            </div>

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


</div>
</template>

<script>
import * as types from '../../store/types';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: "asset_list",
  data: () => ({
  }),

//created() {

  //this.ACTION_ALL_ASSET_DATA
  //console.log('created');

//},

updated() {
  var text = ''
  var i = 0
  console.log(this.event.event.length);
  for (i = 0; i < this.event.event.length; i++) {
       console.log(this.event.event[i].asset_id);
//       this.ACTION_ASSET_BY_ID(this.event.event[i].asset_id)
}

//  this.ACTION_ASSET_BY_ID(this.asset.asset_id)
},

props: ['event'],

  computed: {
      ...mapGetters({
          GET_ASSET_BY_ID: types.GET_ASSET_BY_ID,
//          GET_ASSET_ROW_BY_ID: types.GET_ASSET_ROW_BY_ID,
          GET_ASSET_ID: types.GET_ASSET_ID,
          GET_ASSET_ROW_BY_ID: types.GET_ASSET_ROW_BY_ID,
          GET_ALL_ASSET_DATA: types.GET_ALL_ASSET_DATA
//          getItemsbyID: this.$store.getters.itemsById
      }),
  },
  methods: {
    ...mapMutations({
    //  MUTATE_ASSET_ROW_BY_ID: types.MUTATE_ASSET_ROW_BY_ID
    }),
//    ...mapActions({
//        ACTION_ASSET_BY_ID: types.ACTION_ASSET_BY_ID,
//        ACTION_ALL_ASSET_DATA: types.ACTION_ALL_ASSET_DATA
//    }),

    runAction: function(id){
  //    console.log(this.$store.getters.itemsById[id]);
//      return this.$store.getters.itemsById[id]
//      this.ACTION_ASSET_BY_ID(id)
//      this.ACTION_ASSET_BY_ID(id)
//      this.GET_ASSET_BY_ID
    }
}
}
</script>
<style lang="scss" scoped>
</style>

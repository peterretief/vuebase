<template>
  <div id="asset_list">

    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>

<!--
    <div class="box">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p class="bottom-three">
            </p>

          <strong>{{$store.getters.customersById[event.customer_id].CompanyName}}</strong>
          <small>{{event.name}}</small>


          {{ event.status == true ? 'Active' : 'Inactive' }}

            {{event.comments}}
            <label for="items"><strong>Activity list:</strong></label>

          </div>
        </div>
      </article>
    </div>

    <div class="assets" v-for="elem in event.event" :key="elem.key">
      {{$store.getters.assetsById[elem.asset_id].name}}
      {{elem}}
    </div>
-->


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
//  var text = ''
//  var i = 0
//  console.log(this.event.event.length);
//  for (i = 0; i < this.event.event.length; i++) {
  //     console.log(this.event.event[i].asset_id);
//       this.ACTION_ASSET_BY_ID(this.event.event[i].asset_id)
//}

//  this.ACTION_ASSET_BY_ID(this.asset.asset_id)
},

props: ['event'],

  computed: {
      ...mapGetters({
          GET_ASSET_BY_ID: types.GET_ASSET_BY_ID,
          GET_ASSET_ID: types.GET_ASSET_ID,
          GET_ASSET_ROW_BY_ID: types.GET_ASSET_ROW_BY_ID,
          GET_ALL_ASSET_DATA: types.GET_ALL_ASSET_DATA
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

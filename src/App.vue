<template>
  <div class="container">
      <app-header></app-header>

      <div class="row">
        <div class="col-xs-12">
          <router-view></router-view>
        </div>

      </div>

      <hr>
      <hr>
      <app-footer></app-footer>
  </div>
</template>

<script>


import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import * as types from './store/types';
import velocity from 'velocity-animate'

export default {

created() {
  //INITIALIZE ALL DATA ON START
        this.$store.dispatch(types.ACTION_ALL_EVENT_DATA);
        this.$store.dispatch(types.ACTION_ALL_RENTAL_DATA);
        this.$store.dispatch(types.ACTION_ALL_CUSTOMER_DATA);
        this.$store.dispatch(types.ACTION_ALL_CONTACT_DATA);
        this.$store.dispatch(types.ACTION_ALL_INVENTORY_DATA);
        this.$store.dispatch(types.ACTION_ALL_ASSET_DATA);
},
  components: {
    appHeader: Header,
    appFooter: Footer
  }

}
</script>

</script>


<style lang="sass">

// 1. Import the initial variables
@import "../node_modules/bulma/sass/utilities/initial-variables"

@import "../node_modules/animate.css"


//@import "element-ui/lib/theme-default/index.css"

// 2. Set your own initial variables
// Update blue
//



//$blue: #72d0eb
// Add pink and its invert



//$pink: #ffb3b3


//$pink-invert: #fff
// Add a serif family
$family-serif: "Merriweather", "Georgia", serif

// 3. Set the derived variables
// Use the new pink as the primary color
//$primary: $pink
//$primary-invert: $pink-invert
// Use the existing orange as the danger color
$danger: $orange
// Use the new serif family
$family-primary: $family-serif

// 4. Import the rest of Bulma
@import "../node_modules/bulma/bulma"

</style>

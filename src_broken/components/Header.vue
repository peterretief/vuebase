<template>

<div class="navbar-menu container">

  <div class="navbar-start">

    <a class="navbar-item">
      <img src="../assets/icon.jpg" width="45" height="45">
    </a>
    <div class="tabs is-toggle">
      <ul>

<template>

        <router-link to="/rentals" activeClass="active" tag="li"><a><span class="icon is-small">
            <i class="fa fa-calendar"></i></span><span @click=
            "actionReleaseRow();
            globalGetRentalAction();
            actionData(globalGetRentals);
            mutateColumns(getRentalColumns);
            mutateButtons(getRentalButtons);
            mutateAlwaysVisibleButtons(getRentalAlwaysVisibleButtons);
            mutateSelected('Rentals');"
            >Rentals</span></a></router-link>

        <router-link to="/customers" activeClass="active" tag="li"><a><span class="icon is-small">
            <i class="fa fa-user"></i></span><span @click=
            "actionReleaseRow();
             globalGetCustomerAction();
             actionData(globalGetCustomers);
             mutateColumns(getCustomerColumns);
             mutateButtons(getCustomerButtons);
             mutateAlwaysVisibleButtons(getCustomerAlwaysVisibleButtons);
             mutateSelected('Customers');"
             >Customers</span></a></router-link>

        <router-link to="/contacts" activeClass="active" tag="li"><a><span class="icon is-small">
            <i class="fa fa-user"></i></span><span  @click=
            "actionReleaseRow();
            globalGetContactAction();
            actionData(globalGetContacts);
            mutateColumns(getContactColumns);
            mutateButtons(getContactButtons);
            mutateAlwaysVisibleButtons(getContactAlwaysVisibleButtons);
            mutateSelected('Contacts');"
            >Contacts</span></a></router-link>


        <router-link to="/inventory" activeClass="active" tag="li"><a><span class="icon is-small">
            <i class="fa fa-calendar"></i></span><span  @click=
            "actionReleaseRow();
            globalGetInventoryAction();
            actionData(globalGetInventory);
            mutateColumns(getInventoryColumns);
            mutateButtons(getInventoryButtons);
            mutateAlwaysVisibleButtons(getInventoryAlwaysVisibleButtons);
            mutateSelected('Inventory');"
            >Inventory</span></a></router-link>


        <router-link to="/assets" activeClass="active" tag="li"><a><span class="icon is-small">
            <i class="fa fa-star"></i></span><span  @click=
            "actionReleaseRow();
            globalGetAssetAction();
            actionData(globalGetAssets);
            mutateColumns(getAssetColumns);
            mutateButtons(getAssetButtons);
            mutateAlwaysVisibleButtons(getAssetAlwaysVisibleButtons);
            mutateSelected('Assets');
            ">Assets</span></a></router-link>
</template>
      </ul>
    </div>
  </div>
  <div class="navbar-end">

<!--
    <appLogin
      v-bind:class="{'is-active': showModal }"
      @showModal="modal_status()"
    ></appLogin>
-->


<template v-if="showItem">
  <a class="navbar-item" @click="logoutHandler">
  <pre>logout</pre>
  <p style="display: none">
    {{getIsSelected}}
  </p>

  </a>
</template>
<template v-else>
  <!--
  <a class="navbar-item" @click="showModal=true">
-->
  <a class="navbar-item">
    <pre>login</pre>
  </a>
</template>

        <a v-if="showItem" class="navbar-item">
      <pre>welcome {{user}}</pre>
    </a>
  </div>
</div>

</template>


<script>


import Login from "./Login.vue"
import {HTTP} from './http-common'

import * as types from '../store/types';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'


export default {

  updated: function () {
    var islogged = this.$store.getters.isloggedin
    if (islogged){
      this.showItem = true
      this.user = this.$store.getters.user
    }
    else {
      this.showItem = false
    }

  },

  computed: {
    islogged(){
     return this.$store.getters.modal_1_state

  },

  ...mapGetters({
        getSelected: types.GET_SELECTED,
        getIsSelected: types.GET_IS_ROW_SELECTED,
        getErrors: types.GET_ERRORS,
//        getButtons: types.GET_BUTTONS,
        getRentalButtons: 'getRentalButtons',
        getCustomerButtons: 'getCustomerButtons',
        getContactButtons: 'getContactButtons',
        getInventoryButtons: 'getInventoryButtons',
        getAssetButtons: 'getAssetButtons',
        load_rental: 'load_rental',
        load_customer: 'load_customer',
        load_contact: 'load_contact',
        load_inventory: 'load_inventory',

//        load_asset: types.ACTION_LOAD_ASSET,

        getRentalColumns: 'getRentalColumns',
        getCustomerColumns: 'getCustomerColumns',
        getContactColumns: 'getContactColumns',
        getInventoryColumns: 'getInventoryColumns',
        getAssetColumns: 'getAssetColumns',

        getRentalData: 'getRentalData',
        getCustomerData: 'getCustomerData',
        getContactData: 'getContactData',
        getInventoryData: 'getInventoryData',
        getAssetData: 'getAssetData',
        globalGetRentals: types.GLOBAL_GET_RENTAL,
        globalGetCustomers: types.GLOBAL_GET_CUSTOMER,
        globalGetContacts: types.GLOBAL_GET_CONTACT,
        globalGetInventory: types.GLOBAL_GET_INVENTORY,
        globalGetAssets: types.GLOBAL_GET_ASSET,

        getRentalAlwaysVisibleButtons: 'getRentalAlwaysVisibleButtons',
        getCustomerAlwaysVisibleButtons: 'getCustomerAlwaysVisibleButtons',
        getContactAlwaysVisibleButtons: 'getContactAlwaysVisibleButtons',
        getInventoryAlwaysVisibleButtons: 'getInventoryAlwaysVisibleButtons',
        getAssetAlwaysVisibleButtons: 'getAssetAlwaysVisibleButtons'

    })
  },


  methods: {
  ...mapMutations({
        mutateButtons: types.MUTATE_BUTTONS,
        mutateAlwaysVisibleButtons: types.MUTATE_ALWAYS_VISIBLE_BUTTONS,
        mutateSelected: types.MUTATE_SELECTED,
        mutateColumns: types.MUTATE_COLUMNS
    }),
    ...mapActions({
        actionSelected: types.ACTION_SELECTED,
        actionReleaseRow: types.ACTION_RELEASE_ROW,
        actionSelectRow: types.ACTION_SELECT_ROW,
        actionData: types.ACTION_DATA,
        globalGetRentalAction: types.GLOBAL_ACTION_RENTAL,
        globalGetCustomerAction: types.GLOBAL_ACTION_CUSTOMER,
        globalGetContactAction: types.GLOBAL_ACTION_CONTACT,
        globalGetInventoryAction: types.GLOBAL_ACTION_INVENTORY,
        globalGetAssetAction: types.GLOBAL_ACTION_ASSET

    }),

    modal_status:function(){
      this.showModal = false
    },

    show_storage:function(){
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      console.log(key, value);
    }
  },

  logoutHandler:function(){
    this.$store.dispatch('clearAuthUser')
    window.localStorage.removeItem('authUser')
    this.showItem = false
    this.logged_in=false
    this.$router.push({name: 'home'})
  },

    get_token:function(){
    HTTP.post('api-auth/', { username: 'peter', password: 'peter@password'  })
      .then(response => {
          this.$localStorage.set('someNumber', response.data.token)
        //  console.log(response.data.token);
          })
          .catch(e => {
            this.errors.push(e);
          })

          return this.$localStorage.get('someNumber')

    },

    something:function(){
      var AUTH_TOKEN = this.$localStorage.get(this.$localStorage.get("logged_in"))
      alert(AUTH_TOKEN)

      console.log(AUTH_TOKEN);
      var payload = {"due_to": "2017-10-18T19:12:01Z", "person": "http://127.0.0.1:8000/api/users/1/", "title": "ANext one" }

      HTTP.defaults.headers.common['Authorization'] = "JWT "+AUTH_TOKEN

      HTTP.post('tasks/', payload)
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        this.errors.push(e);
      })
        return "response";
    }
  },

  components: {
    appLogin: Login
  },
  name: "login",
  data() {
          return {
                showModal: false,
                showItem: false,
                user: ''
          };
      }

    }


</script>


<style lang="sass">

// 1. Import the initial variables
@import "../../node_modules/bulma/sass/utilities/initial-variables"

//@import "element-ui/lib/theme-default/index.css"

// 2. Set your own initial variables
// Update blue
$blue: #72d0eb
// Add pink and its invert
$pink: #ffb3b3
$pink-invert: #fff
// Add a serif family
$family-serif: "Merriweather", "Georgia", serif

// 3. Set the derived variables
// Use the new pink as the primary color
$primary: $pink
$primary-invert: $pink-invert
// Use the existing orange as the danger color
$danger: $orange
// Use the new serif family
$family-primary: $family-serif

// 4. Import the rest of Bulma
@import "../../node_modules/bulma/bulma"

</style>

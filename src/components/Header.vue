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
            <i class="fa fa-calendar"></i></span><span @click="
            actionReleaseRow();
            mutateSelected('Rentals');
            ">Rentals</span></a></router-link>


            <router-link to="/events" activeClass="active" tag="li"><a><span class="icon is-small">
                <i class="fa fa-calendar"></i></span><span @click="
                actionReleaseRow();
                mutateSelected('Events');
                ">Events</span></a></router-link>


        <router-link to="/customers" activeClass="active" tag="li"><a><span class="icon is-small">
            <i class="fa fa-user"></i></span><span @click="
            //actionReleaseRow();
             mutateSelected('Customers');"
             >Customers</span></a></router-link>

        <router-link to="/contacts" activeClass="active" tag="li"><a><span class="icon is-small">
            <i class="fa fa-user"></i></span><span  @click=
            "actionReleaseRow();
            mutateSelected('Contacts');"
            >Contacts</span></a></router-link>


        <router-link to="/inventory" activeClass="active" tag="li"><a><span class="icon is-small">
            <i class="fa fa-calendar"></i></span><span  @click=
            "actionReleaseRow();
            mutateSelected('Inventory');"
            >Inventory</span></a></router-link>


        <router-link to="/assets" activeClass="active" tag="li"><a><span class="icon is-small">
            <i class="fa fa-star"></i></span><span  @click=
            "actionReleaseRow();
            mutateSelected('Assets');
            ">Assets</span></a></router-link>
</template>
      </ul>
    </div>
  </div>
  <div class="navbar-end">

    <appLogin
      v-bind:class="{'is-active': showModal }"
      @showModal="modal_status()"
    ></appLogin>

<template v-if="showItem">
  <a class="navbar-item" @click="logoutHandler">
  <pre>logout</pre>
  <p style="display: none">
    {{getIsSelected}}
  </p>

  </a>
</template>
<template v-else>
  <a class="navbar-item" @click="showModal=true">
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
computed:{
  ...mapGetters({
        getSelected: types.GET_SELECTED,
        getIsSelected: types.GET_IS_ROW_SELECTED
    })
  },


  methods: {
  ...mapMutations({
        mutateSelected: types.MUTATE_SELECTED
    }),
    ...mapActions({
        actionSelected: types.ACTION_SELECTED,
        actionReleaseRow: types.ACTION_RELEASE_ROW
//        actionSelectRow: types.ACTION_SELECT_ROW,

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


<style lang="sass" scoped>

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

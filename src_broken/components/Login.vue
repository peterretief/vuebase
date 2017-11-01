<template>
    <div class="modal" id="login">
      <div class="modal-background"></div>
      <div class="modal-content">

        <div class="field">
          <label class="label">User name</label>
          <div class="control">
            <input class="input" type="text" placeholder="User name" v-model="user.username">
          </div>

          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password" v-model="user.password">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary" type="submit" @click="get_token()">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link" @click="closemodal()">Cancel</button>
          </div>
        </div>
        <!-- Any other Bulma elements you want -->
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closemodal()"></button>
    </div>
</template>
<script>
import {HTTP} from './http-common'

export default {
  name: "login",
  methods: {
    closemodal() {
      this.$emit("showModal", false)
    },
    get_token:function(){
    HTTP.post('api-auth/', { username: this.user.username, password: this.user.password  })
      .then(response => {
          var payload = {'user': this.user.username, 'token': response.data.token}
          this.$localStorage.set('authUser', response.data.token)
          this.$store.dispatch('setUserObjects', payload)
          this.$emit("showModal", false)
//          alert("Success")
          this.$router.push({name: 'home'})
        //  console.log(response.data.token);
          })
          .catch(function (error) {
             if (error.response) {
                alert("Error logging you on from server")
             // The request was made and the server responded with a status code
               // that falls out of the range of 2xx
               console.log(error.response.data);
               console.log(error.response.status);
               console.log(error.response.headers);
             } else if (error.request) {
               alert("Error logging in 2")
               // The request was made but no response was received
               // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
               // http.ClientRequest in node.js
               console.log(error.request);
             } else {
               // Something happened in setting up the request that triggered an Error
               console.log('Error', error.message);
             }
             console.log(error.config);
           });
           this.$router.push({name: 'home'})

    },
    saveform() {
      this.$emit("showModal", false)
    }
  },

  data() {
        return {
                user: {
                    username: '',
                    password: ''
                },
               showModal: false
        };
     }
  }

</script>
<style lang="scss" scoped>
</style>

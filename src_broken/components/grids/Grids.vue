<template>
  <div id="grid">


<button type="button" name="button" @click="runme()">LOGIN</button>

<button type="button" name="button" @click="users()">USERS</button>

<app-grid>
</app-grid>

  </div>
</template>
<script>
//import {mapActions} from 'vuex';
//import {mapGetters} from 'vuex';
import Grid from "./Grid.vue"
import {HTTP} from './http-common'

export default {
  data: () => ({
//      posts: [],
//      errors: []
    }),

    created() {
//        HTTP.get(`/users/`)
//        .then(response => {
          // JSON responses are automatically parsed.
//          this.posts = response.data
//        })
//        .catch(e => {
//          this.errors.push(e)
//        })
},
//  r = axios.post("http://127.0.0.1:8000/users", { user: "peter", password: 'peter@password'})

  methods:{
    runme() {
      HTTP.get("/snippets/")

//      axios.get('http://localhost:8000/api/customer/')
      .then(response => {
        console.log(response.data);

      })
      .catch(e => {
        this.errors.push(e);
      })

    },
    users() {
      HTTP.get("/users/")

//      axios.get('http://localhost:8000/api/customer/')
      .then(response => {
        console.log(response.data);

      })
      .catch(e => {
        this.errors.push(e);
      })

      }
},

  components: {
    appGrid: Grid
  },

  name: "grid",
  data: () => ({

  })
}

</script>
<style lang="scss" scoped>
</style>

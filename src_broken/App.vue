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

export default {
  methods: {
    updateValue(event) {
        this.$store.dispatch(types.UPDATE_VALUE, event.target.value);
    }
  },

  components: {
    appHeader: Header,
    appFooter: Footer
  }

}
</script>

<style lang="scss">
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/

</style>

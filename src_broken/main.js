import Vue from 'vue'
import VueRouter from 'vue-router';
//import VueResource from 'vue-resource';

import App from './App.vue'
import { routes } from './routes';
import { store } from './store/store';

import vuescroll from 'vue-scroll'

import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
// Or you can specify any other name and use it via this.$ls, this.$whatEverYouWant
//Vue.use(VueLocalStorage, {
//  name: 'ls'
//})

Vue.use(VueRouter);
//Vue.use(VueResource);
Vue.use(vuescroll);


//import axios from 'axios';
//export const HTTP = axios.create({
//  baseURL: `http://localhost:8000/api`,
//  headers: {
//    Authorization: 'Bearer {token}'
//  }
//});

Vue.filter('currency', (value) => {
  return 'R' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  VueLocalStorage,
//  HTTP,
  render: h => h(App)
})

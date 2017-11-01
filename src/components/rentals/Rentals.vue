<template>
  <div id="rentals">

<appList>
</appList>

  </div>
</template>
<script>
import List from './List.vue';
import * as types from '../../store/types';
import { mapGetters } from 'vuex'

export default {
  name: "rentals",
  components: {
    appList: List
  }
}
</script>

<style lang="scss" scoped>
</style>

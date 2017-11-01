<template>
    <div class="modal2" :class="{'is-active': form_visible }">
      <div class="modal-background"></div>
      <div class="modal-content">
<!--
        <button type="button" name="button" @click="openmodal_6">modal 6</button>
-->


<appGrid2>
</appGrid2>

<!--
  <appModal6> </appModal6>
-->
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closemodal"></button>
    </div>
</template>
<script>
//import Modal6 from './Modal6.vue';
import Grid2 from '../grid_templates/Grid2.vue';

export default {
  components: {
  //  appModal6: Modal6,
    appGrid2: Grid2
  },
  computed:{
      form_visible(){
      var vis = this.$store.getters.modal_2_state
      if (vis) {
        return true
      } else {
        return false
      }
    }
  },
  name: "modal2",
  data: () => ({

  }),

  methods: {
    closemodal: function(){
      this.$store.commit("MODAL_2_CLOSE")
      console.log(this.$store.getters.modal_2_state);
  }

/**
    openmodal_6: function(){
      this.$store.commit("MODAL_6_OPEN")
      console.log(this.$store.getters.modal_6_state);
      this.Modal=this.$store.getters.modal_6_state
     },
    closemodal: function(){
      this.$store.commit("MODAL_2_CLOSE")
      console.log(this.$store.getters.modal_2_state);
  }
  **/
 }
}
</script>
<style lang="scss" scoped>
</style>

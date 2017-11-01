<template>
    <div class="modal" :class="{'is-active': form_visible }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <button type="button" name="button" @click="openmodal_8">modal 8</button>
<appGrid4>
</appGrid4>

  <appModal8> </appModal8>

      </div>
      <button class="modal-close is-large" aria-label="close" @click="closemodal"></button>
    </div>
</template>
<script>
import Modal8 from './Modal8.vue';
import Grid4 from '../grid_templates/Grid4.vue';

export default {
  components: {
    appModal8: Modal8,
    appGrid4: Grid4
  },
  computed:{
      form_visible(){
      var vis = this.$store.getters.modal_4_state
      if (vis) {
        return true
      } else {
        return false
      }
    }
  },
  name: "modal",
  data: () => ({

  }),

  methods: {
    openmodal_8: function(){
      this.$store.commit("MODAL_8_OPEN")
      console.log(this.$store.getters.modal_8_state);
      this.Modal=this.$store.getters.modal_8_state
     },
    closemodal: function(){
      this.$store.commit("MODAL_4_CLOSE")
      console.log(this.$store.getters.modal_4_state);
  }
 }
}
</script>
<style lang="scss" scoped>
</style>

<template>
    <div class="modal" :class="{'is-active': form_visible }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <button type="button" name="button" @click="openmodal_7">modal 7</button>
<appGrid3>
</appGrid3>

  <appModal7> </appModal7>

      </div>
      <button class="modal-close is-large" aria-label="close" @click="closemodal"></button>
    </div>
</template>
<script>
import Modal7 from './Modal7.vue';
import Grid3 from '../grid_templates/Grid3.vue';

export default {
  components: {
    appModal7: Modal7,
    appGrid3: Grid3
  },
  computed:{
      form_visible(){
      var vis = this.$store.getters.modal_3_state
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
    openmodal_7: function(){
      this.$store.commit("MODAL_7_OPEN")
      console.log(this.$store.getters.modal_7_state);
      this.Modal=this.$store.getters.modal_7_state
     },
    closemodal: function(){
      this.$store.commit("MODAL_3_CLOSE")
      console.log(this.$store.getters.modal_3_state);
  }
 }
}
</script>
<style lang="scss" scoped>
</style>

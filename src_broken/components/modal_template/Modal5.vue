<template>
    <div class="modal" :class="{'is-active': form_visible }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <button type="button" name="button" @click="openmodal_9">modal 9</button>
<appGrid5>
</appGrid5>

  <appModal9> </appModal9>

      </div>
      <button class="modal-close is-large" aria-label="close" @click="closemodal"></button>
    </div>
</template>
<script>
import Modal9 from './Modal9.vue';
import Grid5 from '../grid_templates/Grid5.vue';

export default {
  components: {
    appModal9: Modal9,
    appGrid5: Grid5
  },
  computed:{
      form_visible(){
      var vis = this.$store.getters.modal_5_state
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
    openmodal_9: function(){
      this.$store.commit("MODAL_9_OPEN")
      console.log(this.$store.getters.modal_9_state);
      this.Modal=this.$store.getters.modal_9_state
     },
    closemodal: function(){
      this.$store.commit("MODAL_5_CLOSE")
      console.log(this.$store.getters.modal_5_state);
  }
 }
}
</script>
<style lang="scss" scoped>
</style>

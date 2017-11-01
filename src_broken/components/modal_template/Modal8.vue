<template>
    <div class="modal" :class="{'is-active': form_visible }">
      <div class="modal-background"></div>
      <div class="modal-content">

<appForm4>
</appForm4>

    </div>
      <button class="modal-close is-large" aria-label="close" @click="closemodal"></button>
    </div>
</template>

<script>
import Form4 from '../form_templates/Form4.vue';

export default {
  components: {
    appForm4: Form4
  },
  computed:{
      form_visible(){
      var vis = this.$store.getters.modal_8_state
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
    closemodal: function(){
      this.$store.commit("MODAL_8_CLOSE")
      console.log(this.$store.getters.modal_8_state);
  }
  }
 }
</script>
<style lang="scss" scoped>
</style>

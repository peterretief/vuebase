<template>
    <div class="modal" :class="{'is-active': form_visible }">
      <div class="modal-background"></div>
      <div class="modal-content">

<appForm3>
</appForm3>

    </div>
      <button class="modal-close is-large" aria-label="close" @click="closemodal"></button>
    </div>
</template>

<script>
import Form3 from '../form_templates/Form3.vue';

export default {
  components: {
    appForm3: Form3
  },
  computed:{
      form_visible(){
      var vis = this.$store.getters.modal_7_state
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
      this.$store.commit("MODAL_7_CLOSE")
      console.log(this.$store.getters.modal_7_state);
  }
  }
 }
</script>
<style lang="scss" scoped>
</style>

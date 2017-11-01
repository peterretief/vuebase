<template>
    <div class="modal" :class="{'is-active': form_visible }">
      <div class="modal-background"></div>
      <div class="modal-content">

<appForm5>
</appForm5>

    </div>
      <button class="modal-close is-large" aria-label="close" @click="closemodal"></button>
    </div>
</template>

<script>
import Form5 from '../form_templates/Form5.vue';

export default {
  components: {
    appForm5: Form5
  },
  computed:{
      form_visible(){
      var vis = this.$store.getters.modal_9_state
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
      this.$store.commit("MODAL_9_CLOSE")
      console.log(this.$store.getters.modal_9_state);
  }
  }
 }
</script>
<style lang="scss" scoped>
</style>

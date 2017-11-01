<template>
    <div class="modal" :class="{'is-active': form_visible }">
      <div class="modal-background"></div>
      <div class="modal-content">

<appForm2>
</appForm2>

    </div>
      <button class="modal-close is-large" aria-label="close" @click="closemodal"></button>
    </div>
</template>

<script>
import Form2 from '../form_templates/Form2.vue';

export default {
  components: {
    appForm2: Form2
  },
  computed:{
      form_visible(){
      var vis = this.$store.getters.modal_6_state
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
      this.$store.commit("MODAL_6_CLOSE")
      console.log(this.$store.getters.modal_6_state);
  }
  }
 }
</script>
<style lang="scss" scoped>
</style>

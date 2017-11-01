<template>
    <div class="modal" :class="{'is-active': ShowForm }">
      <div class="modal-background"></div>
      <div class="modal-content">
        Any other Bulma elements you want
<button @click="">Close</button>
      </div>
      <button class="modal-close is-large" aria-label="close" @click='closeModal'></button>
    </div>

</template>


<script>
export default {
  computed: {
    ShowForm: function () {
      return this.$store.getters.contact_modal_state
    }
  },

  name: "modal",
  methods: {
     closeModal: function(){
          this.$store.commit('closeContact')

     }
 }
}
</script>
<style lang="scss" scoped>
</style>

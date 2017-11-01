<template>
    <div class="modal" :class="{'is-active': ShowForm }">
      <div class="modal-background"></div>
      <div class="modal-content">
        Any other Bulma elements you want
      </div>
      <button class="modal-close is-large" aria-label="close" @click='closeModal'></button>
    </div>

</template>


<script>
export default {
  computed: {
    ShowForm: function () {
      return this.$store.getters.inventory_modal_state
    }
  },

  name: "modal",
  methods: {
     closeModal: function(){
          this.$store.commit('closeInventory')

     }
 }
}
</script>
<style lang="scss" scoped>
</style>

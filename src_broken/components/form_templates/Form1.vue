<template>
  <div id="form1">

    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input">
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary">Submit</button>
      </div>
      <div class="control">
        <button class="button is-link" @click="closemodal">Cancel</button>
      </div>
    </div>

    </div>
</template>
<script>
export default {
  name: "form1",
  data: () => ({

  }),
  methods: {
    closemodal: function(){
      this.$store.commit("MODAL_1_CLOSE")
//      console.log(this.$store.getters.modal_1_state);
  }
 }
}
</script>
<style lang="scss" scoped>
</style>

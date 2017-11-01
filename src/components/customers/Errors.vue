<template>
  <div id="event_list">
<div class="errors">
</div>

<!--
<div id="example-4">
  <button @click="show = !show">
    Toggle
  </button>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
  >
    <p v-if="show">
      Demo
    </p>
  </transition>
</div>
-->

<!--
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"
  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
</transition>
-->


<transition v-if="$store.state.http_status_code == 201" class="animated fadeOutUp" style='-webkit-animation-delay: 2s;'>
  <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <p class="title">Success</p>
          <div class="content">
            New record saved
          </div>
        </article>
      <button type="button" name="button" @click='closeModal'>Close</button>
  </div>
</transition>


<transition v-else-if="$store.state.http_status_code == 400" class="animated fadeOutUp" style='-webkit-animation-delay: 2s;'>
  <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Error</p>
          <p class="subtitle">Description</p>
          <div class="content">
            Form could not get processed (400 EE)
          </div>
        </article>
  </div>
</transition>

<div v-else-if="$store.state.http_status_code == 500" class="animated fadeOutUp" style='-webkit-animation-delay: 2s;'>
<transition>
  <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Error</p>
          <p class="subtitle">Description</p>
          <div class="content">
            Form could not get processed (500 EE)
          </div>
        </article>
  </div>
</transition>
</div>

<div v-else class="animated fadeOutUp" style='-webkit-animation-delay: 2s;'>
<!--
<transition>
  <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Error</p>
          <p class="subtitle">Description</p>
          <div class="content">
            Form could not get processed (Unknown error, check connection)
          </div>
        </article>
  </div>
</transition>
-->
</div>


  </div>
</template>
<script>
export default {
  name: "event_list",

  data: function () {
      return {
        show: true
      }
   },
   methods: {

     closeModal: function(){
        this.$store.commit('closeEvent')
     },

customBeforeLeave: function (el){
//   console.log("before leave");
//   this.$store.commit('closeEvent')
},

     customBeforeAppearHook: function (el){
        Velocity(el, "slideUp", { delay: 500, duration: 1500 });
//        console.log("before appear");
//          Velocity(el, "slideUp", { delay: 500, duration: 1500 });
  //     el.style.opacity = 0
     },
     customAppearHook: function (el){
//       console.log("appear");
  //     Velocity(el, "slideUp", { delay: 1500, duration: 1500 });
     },
     customAfterAppearHook: function (el){
  //     console.log("after appear");
  //        Velocity(el, "slideUp", { delay: 500, duration: 1500 });
//       Velocity(el, {mode: "fadeOut"}, {duration: 350});
//       Velocity(el, { complete: done })
      },

     customAppearCancelledHook: function (){
//       console.log("appear cancel");
//          this.$store.commit('closeEvent');
     },
     customAfterLeave: function (){
  //     console.log("after leave");
  //        this.$store.commit('closeEvent');
     },

   beforeEnter: function (el) {
     el.style.opacity = 0
//     console.log('element'+el);
   },
   enter: function (el, done) {
     Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
     Velocity(el, { fontSize: '1em' }, { complete: done })
   },
   leave: function (el, done) {
//     console.log(el);
     Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
     Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
     Velocity(el, {
       rotateZ: '45deg',
       translateY: '30px',
       translateX: '30px',
       opacity: 0
     }, { complete: done })
   }
 }
 }


</script>
<style lang="scss" scoped>


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}


</style>

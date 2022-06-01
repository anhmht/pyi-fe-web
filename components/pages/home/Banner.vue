<template>
  <div :class="$style.root"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss" module>
.root {
  background-image: url(~/assets/images/banner.png);
  width: 100%;
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: 150px;
}
@media only screen and (max-width: 1199px) {
  .root {
    min-height: 475px;
    height: calc(100vw / 1.714);
  }
}
@media only screen and (max-width: 991px) {
  .root {
    margin-top: 100px;
  }
}
</style>

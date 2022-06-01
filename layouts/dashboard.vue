<template>
  <div :class="$style.root">
    <main>
      <nuxt-child />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="postcss" module>
.root {
  .hidden {
    display: none;
  }
}
</style>

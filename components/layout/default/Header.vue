<template>
  <div :class="$style.root">
    <TopNav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TopNav from '~/components/layout/default/header/TopNav.vue'

export default Vue.extend({
  components: { TopNav }
})
</script>

<style lang="postcss" module>
.root {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  z-index: var(--z-index-sticky-header);
  transition: var(--transition-300);
}
</style>

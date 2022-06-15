<template>
  <div :class="$style.root">
    <TopNav />
    <MainNav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TopNav from '~/components/layout/default/header/TopNav.vue'
import MainNav from '~/components/layout/default/header/MainNav.vue'

export default Vue.extend({
  components: { TopNav, MainNav }
})
</script>

<style lang="postcss" module>
.root {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  z-index: var(--z-index-sticky-header);
  transition: var(--transition-300);
}
</style>

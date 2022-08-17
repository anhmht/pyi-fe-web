<template>
  <div :class="$style.root">
    <div :class="$style.sideBar">
      <div :class="$style.logo">
        <nuxt-link to="/">
          <img src="~/assets/images/logo.png" width="56" />
        </nuxt-link>
      </div>
      <h1>Napricot</h1>
    </div>
    <div :class="$style.content"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style lang="postcss" module>
.root {
  box-sizing: border-box;
  min-height: 56px;
  box-shadow: 0 0 11px rgb(0 0 0 / 13%);
  width: 100%;
  display: flex;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: var(--z-index-sticky-header);
  h1 {
    font-size: 2.5rem;
    margin-left: 70px;
  }
  .sideBar {
    text-transform: uppercase;
    width: 240px;
    padding: var(--space-1o2);
    background-color: var(--color-bg-dashboard);
    position: relative;
  }
  .logo {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .content {
    background: #fff;
    flex: 1;
  }
}
</style>

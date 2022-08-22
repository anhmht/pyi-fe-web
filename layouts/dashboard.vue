<template>
  <div :class="$style.root">
    <DashboardHeader />
    <div :class="$style.wrapper">
      <Sidebar :class="$style.sidebar" />
      <main>
        <nuxt-child />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DashboardHeader from '~/components/layout/dashboard/header/DashboardHeader.vue'
import Sidebar from '~/components/layout/dashboard/Sidebar.vue'
export default Vue.extend({
  components: { DashboardHeader, Sidebar },
  middleware: ['require-authorize']
})
</script>

<style lang="postcss" module>
.root {
  .hidden {
    display: none;
  }
  .wrapper {
    display: flex;
  }
  .sidebar {
    width: 240px;
    min-height: calc(100vh - 56px);
    background-color: var(--color-bg-dashboard);
    position: fixed;
    overflow-y: auto;
    height: calc(100vh - 56px);
  }
  main {
    margin-left: 240px;
    width: calc(100% - 240px);
    padding: var(--space-2x) 0;
    overflow: auto;
    background: var(--color-bg-main-dashboard);
  }
}
</style>

<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Color List</h1>
      <div :class="$style.color"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DashboardColor',
  layout: 'dashboard'
})
</script>
<style lang="postcss" module>
.root {
  .color {
    background: #fff;
    border-radius: var(--radius-5);
    padding: var(--space);
    margin-top: var(--space-2x);
  }
}
</style>

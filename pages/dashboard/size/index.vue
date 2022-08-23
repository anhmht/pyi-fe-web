<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Size List</h1>
      <div :class="$style.color">
        <SizeList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SizeList from '~/components/pages/dashboard/size/SizeList.vue'

export default Vue.extend({
  components: { SizeList },
  name: 'DashboardSize',
  layout: 'dashboard'
})
</script>
<style lang="postcss" module>
.root {
  .size {
    background: #fff;
    border-radius: var(--radius-5);
    padding: var(--space);
    margin-top: var(--space-2x);
  }
}
</style>

<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Collection List</h1>
      <div :class="$style.collection">
        <CollectionList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CollectionList from '~/components/pages/dashboard/collection/CollectionList.vue'

export default Vue.extend({
  components: { CollectionList },
  name: 'DashboardCollection',
  layout: 'dashboard'
})
</script>
<style lang="postcss" module>
.root {
  .collection {
    background: #fff;
    border-radius: var(--radius-5);
    padding: var(--space);
    margin-top: var(--space-2x);
  }
}
</style>

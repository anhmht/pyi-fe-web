<template>
  <div :class="$style.root">
    <CategoryTree :class="$style.filter" :category-id="filter.category" />
    <ColorFilter :class="$style.filter" :colors.sync="filter.color" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Filter } from '~/model/category/category'
import CategoryTree from '~/components/pages/category/Sidebar/CategoryTree.vue'
import ColorFilter from './ColorFilter.vue'

export default Vue.extend({
  components: { CategoryTree, ColorFilter },
  name: 'CategorySidebar',
  props: {
    filter: {
      type: Object as () => Filter,
      required: true
    }
  },
  watch: {
    filter: {
      handler() {
        this.$emit('update:filter', this.filter)
      },
      deep: true
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  .filter {
    padding: var(--space) 0;
  }
  .filter + .filter {
    border-top: 1px solid var(--color-bg-secondary);
  }
}
</style>

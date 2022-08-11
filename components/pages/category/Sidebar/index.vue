<template>
  <div :class="$style.root">
    <CategoryTree :class="$style.filter" :filter="filter" />
    <ColorFilter :class="$style.filter" :colors.sync="filter.color" />
    <PriceFilter
      :class="$style.filter"
      :price-from.sync="filter.priceFrom"
      :price-to.sync="filter.priceTo"
    />
    <CollectionFilter
      :class="$style.filter"
      :collections.sync="filter.collection"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Filter } from '~/model/category/category'
import CategoryTree from '~/components/pages/category/Sidebar/CategoryTree.vue'
import ColorFilter from '~/components/pages/category/Sidebar/ColorFilter.vue'
import CollectionFilter from '~/components/pages/category/Sidebar/CollectionFilter.vue'
import PriceFilter from '~/components/pages/category/Sidebar/PriceFilter.vue'

export default Vue.extend({
  components: { CategoryTree, ColorFilter, CollectionFilter, PriceFilter },
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

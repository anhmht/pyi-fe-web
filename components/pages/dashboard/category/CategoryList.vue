<template>
  <div :class="$style.root">
    <h2>Category List</h2>
    <el-tree
      :class="$style.list"
      v-if="categories.length > 0"
      highlight-current
      default-expand-all
      :data="treeListCategory"
      :props="defaultProps"
      @node-click="selectCategory"
    ></el-tree>
    <el-skeleton v-else :rows="4" animated />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Category } from '~/model/product/product'
import { listToTree } from '~/utils'

interface CategoryTree extends Category {
  children?: CategoryTree[]
}

export default Vue.extend({
  props: {
    categories: {
      type: Array as () => Category[],
      required: true
    }
  },
  data(): {
    defaultProps: {
      children: string
      label: string
    }
  } {
    return {
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  computed: {
    treeListCategory(): CategoryTree[] {
      return listToTree(this.categories)
    }
  },
  methods: {
    selectCategory(category: Category) {
      this.$emit('select', category.id)
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  .list {
    margin-top: var(--space-2x);
  }
}
</style>

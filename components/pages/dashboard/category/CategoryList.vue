<template>
  <div :class="$style.root">
    <el-tree
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
  data(): {
    defaultProps: {
      children: string
      label: string
    }
    categories: Category[]
  } {
    return {
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      categories: []
    }
  },
  computed: {
    treeListCategory(): CategoryTree[] {
      return listToTree(this.categories)
    }
  },
  async fetch() {
    this.categories = await this.$categoryService.getCategories()
  },
  methods: {
    selectCategory(category: Category) {
      this.$emit('select', category)
    }
  }
})
</script>
<style lang="postcss" module>
.root {
}
</style>

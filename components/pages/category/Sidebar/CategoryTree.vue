<template>
  <div :class="$style.root">
    <el-tree
      :default-expanded-keys="[categoryId]"
      highlight-current
      node-key="id"
      :current-node-key="categoryId"
      :data="treeListCategory"
      :props="defaultProps"
      @node-click="selectCategory"
    ></el-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { allCategories } from '~/mock/data/Category'
import { Category } from '~/model/product/product'
import { listToTree } from '~/utils'

interface CategoryTree extends Category {
  children?: CategoryTree[]
}

export default Vue.extend({
  props: {
    categoryId: {
      type: String,
      default: undefined
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
    categories(): Category[] {
      return allCategories
    },
    treeListCategory(): CategoryTree[] {
      return listToTree(this.categories)
    }
  },
  methods: {
    selectCategory(category: Category) {
      this.$router.push({
        path: `/category/${category.path}`
      })
    }
  }
})
</script>
<style lang="postcss" module>
.root {
}
</style>
<style>
.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
  background-color: #fff3c5;
  font-weight: 600;
}
</style>

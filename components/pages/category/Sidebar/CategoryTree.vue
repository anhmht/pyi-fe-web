<template>
  <div :class="$style.root">
    <el-tree
      v-if="categories.length > 0"
      :default-expanded-keys="[id]"
      highlight-current
      node-key="id"
      :current-node-key="id"
      :data="treeListCategory"
      :props="defaultProps"
      @node-click="selectCategory"
    ></el-tree>
    <el-skeleton v-else :rows="4" animated />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Filter } from '~/model/category/category'
import { Category } from '~/model/product/product'
import { RootState } from '~/store/state'
import { listToTree } from '~/utils'

interface CategoryTree extends Category {
  children?: CategoryTree[]
}

export default Vue.extend({
  props: {
    filter: {
      type: Object as () => Filter,
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
    id(): string | undefined {
      return this.filter.category
    },
    categories(): Category[] {
      return (this.$store.state as RootState).categories
    },
    treeListCategory(): CategoryTree[] {
      return listToTree(this.categories)
    }
  },
  methods: {
    selectCategory(category: Category) {
      this.$router.push({
        path: `/category${category.path}`
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

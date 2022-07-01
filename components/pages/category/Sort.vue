<template>
  <div :class="$style.root">
    <el-dropdown @command="handleCommand">
      <span>
        {{ displayName }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="best-rating">Best rating</el-dropdown-item>
        <el-dropdown-item command="newest">Newest</el-dropdown-item>
        <el-dropdown-item command="lth">Price: Low to High</el-dropdown-item>
        <el-dropdown-item command="htl">Price: High to Low</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    sort: {
      type: String,
      default: 'newest'
    }
  },
  computed: {
    displayName(): string {
      switch (this.sort) {
        case 'lth':
          return 'Price: Low to High'
        case 'htl':
          return 'Price: High to Low'
        case 'newest':
          return 'Newest'
        case 'best-rating':
          return 'Best rating'
        default:
          return this.sort
      }
    }
  },
  methods: {
    handleCommand(command: string): void {
      this.$emit('update:sort', command)
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  margin-left: var(--space-1o2);
}
</style>

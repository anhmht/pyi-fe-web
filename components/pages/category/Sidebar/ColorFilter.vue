<template>
  <div :class="$style.root">
    <h4>Color</h4>
    <div :class="$style.items">
      <el-checkbox
        v-for="item in listColors"
        :key="item.id"
        :class="$style.item"
        :checked="isSelected(item.id)"
        @change="handleChange(item)"
        >{{ item.color }}</el-checkbox
      >
    </div>
  </div>
</template>
<script lang="ts">
import cloneDeep from 'lodash/cloneDeep'
import Vue from 'vue'
import { colors } from '~/mock/data/Product'
import { Color } from '~/model/product/product'
export default Vue.extend({
  props: {
    colors: {
      type: Array as () => String[],
      default: []
    }
  },
  computed: {
    listColors(): Color[] {
      return colors
    }
  },
  methods: {
    isSelected(item: string) {
      return this.colors.includes(item)
    },
    handleChange(item: Color) {
      const res = cloneDeep(this.colors)
      if (this.isSelected(item.id)) {
        const index = res.findIndex((x) => x === item.id)
        res.splice(index, 1)
      } else {
        res.push(item.id)
      }
      this.$emit('update:colors', res)
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  h4 {
    font-size: 1.4rem;
    font-weight: 500;
  }
  .items {
    margin-top: var(--space);
  }
  .item {
    width: 100%;
  }
  .item + .item {
    margin-top: var(--space-1o2);
  }
}
</style>

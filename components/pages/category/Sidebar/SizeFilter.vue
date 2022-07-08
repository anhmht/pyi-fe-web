<template>
  <div :class="$style.root">
    <h4>Size</h4>
    <div :class="$style.items">
      <el-checkbox
        v-for="item in listSizes"
        :key="item.id"
        :class="$style.item"
        :checked="isSelected(item.id)"
        @change="handleChange(item)"
        >{{ item.name }}</el-checkbox
      >
    </div>
  </div>
</template>
<script lang="ts">
import cloneDeep from 'lodash/cloneDeep'
import Vue from 'vue'
import { sizes } from '~/mock/data/Product'
import { Size } from '~/model/product/product'

export default Vue.extend({
  props: {
    sizes: {
      type: Array as () => String[],
      default: []
    }
  },
  computed: {
    listSizes(): Size[] {
      return sizes
    }
  },
  methods: {
    isSelected(item: string) {
      return this.sizes.includes(item)
    },
    handleChange(item: Size) {
      const res = cloneDeep(this.sizes)
      if (this.isSelected(item.id)) {
        const index = res.findIndex((x) => x === item.id)
        res.splice(index, 1)
      } else {
        res.push(item.id)
      }
      this.$emit('update:sizes', res)
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

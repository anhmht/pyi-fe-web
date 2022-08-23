<template>
  <div :class="$style.root">
    <div v-if="!isLoading">
      <h4>Color</h4>
      <div :class="$style.items">
        <el-checkbox
          v-for="item in listColors"
          :key="item.id"
          :class="$style.item"
          :checked="isSelected(item.id)"
          @change="handleChange(item)"
          >{{ item.name }}</el-checkbox
        >
      </div>
    </div>
    <el-skeleton v-else :rows="4" animated />
  </div>
</template>
<script lang="ts">
import cloneDeep from 'lodash/cloneDeep'
import Vue from 'vue'
import { Color } from '~/model/product/product'
import { Mutations } from '~/store'
import { RootState } from '~/store/state'
export default Vue.extend({
  props: {
    colors: {
      type: Array as () => String[],
      default: []
    }
  },
  data(): {
    isLoading: Boolean
  } {
    return {
      isLoading: false
    }
  },
  computed: {
    listColors() {
      return (this.$store.state as RootState).colors
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
  },
  async fetch() {
    if (this.listColors.length > 0) return
    this.isLoading = true
    const { colors } = await this.$productService.getColors({ limit: -1 })
    this.$store.commit(Mutations.TYPE.SET_COLORS, colors)
    this.isLoading = false
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

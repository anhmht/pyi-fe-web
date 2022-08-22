<template>
  <div :class="$style.sizes">
    <div
      :class="[
        $style.size,
        index === active && $style.active,
        isDisabled(item.id) && $style.disabled
      ]"
      @click="selected(item, index)"
      v-for="(item, index) in listSizes"
      :key="index"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Size } from '~/model/product/product'
import { Mutations } from '~/store'
import { RootState } from '~/store/state'

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: undefined
    },
    sizes: {
      type: Array as () => Size[],
      required: true
    }
  },
  computed: {
    listSizes(): Size[] {
      return (this.$store.state as RootState).sizes
    }
  },
  data(): {
    active?: string
  } {
    return {
      active: undefined
    }
  },
  async fetch() {
    if (this.listSizes.length > 0) return
    const { sizes } = await this.$productService.getSizes()
    this.$store.commit(Mutations.TYPE.SET_SIZES, sizes)
  },
  methods: {
    selected(item: Size, index) {
      if (item.disabled) return
      this.active = index
      this.$emit('input', item.id)
    },
    isDisabled(id: string): boolean {
      const size = this.listSizes.find((item) => item.id === id)
      if (!size) return false
      if (this.sizes.map((x) => x.id).includes(id)) return false
      return true
    }
  }
})
</script>
<style lang="postcss" module>
.sizes {
  margin: var(--space) calc(var(--space-1o2) * -1);
  display: flex;
  flex-wrap: wrap;
  .size {
    border-radius: var(--radius-5);
    margin-bottom: var(--space);
    margin-right: var(--space);
    border: 1px solid var(--color-bg-secondary);
    width: 60px;
    padding: var(--space) 0;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    &.disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }
    &.active {
      border-color: var(--color-primary);
      background: var(--color-primary);
      color: #fff;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>

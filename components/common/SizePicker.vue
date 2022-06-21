<template>
  <div :class="$style.sizes">
    <div
      :class="[
        $style.size,
        index === active && $style.active,
        item.disabled && $style.disabled
      ]"
      @click="selected(item, index)"
      v-for="(item, index) in sizes"
      :key="index"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Size } from '~/model/product/product'

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
  data(): {
    active?: number
  } {
    return {
      active: undefined
    }
  },
  methods: {
    selected(item: Size, index) {
      if (item.disabled) return
      this.active = index
      this.$emit('update:input', item.id)
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
    &.active {
      border-color: var(--color-primary);
      background: var(--color-primary);
      color: #fff;
    }
    &:last-child {
      margin-right: 0;
    }
    &.disabled {
      opacity: 0.2;
      cursor: not-allowed;
      &:hover {
        opacity: 0.2;
      }
    }
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>

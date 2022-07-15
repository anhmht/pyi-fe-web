<template>
  <div :class="$style.colors">
    <div
      :class="[$style.picker, index === active && $style.active]"
      @click="selected(item, index)"
      v-for="(item, index) in colors"
      :key="index"
    >
      <div :class="$style.color" :style="{ backgroundColor: item.color }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Color } from '~/model/product/product'

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: undefined
    },
    colors: {
      type: Array as () => Color[],
      required: true
    }
  },
  data(): {
    active?: number
  } {
    return {
      active: 0
    }
  },
  mounted() {
    if (this.value) {
      this.active = this.colors.findIndex((item) => item.name === this.value)
    } else {
      this.$emit('input', this.colors[0].id)
    }
  },
  methods: {
    selected(item: Color, index) {
      this.active = index
      this.$emit('input', item.id)
    }
  }
})
</script>
<style lang="postcss" module>
.colors {
  margin: var(--space-1o2) calc(var(--space-1o2) * -1);
  display: flex;
  .color {
    border-radius: 50%;
    border: 1px solid var(--color-bg-secondary);
    width: 30px;
    height: 30px;
  }
  .picker {
    padding: 2px;
    border-radius: 50%;
    border: 3px solid white;
    cursor: pointer;
    &.active {
      border: 3px solid var(--color-primary);
    }
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>

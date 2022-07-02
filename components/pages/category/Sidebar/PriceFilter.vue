<template>
  <div :class="$style.root">
    <h4>Price</h4>
    <div :class="$style.items">
      <div :class="$style.price">
        <div>${{ priceFrom }}</div>
        <div>${{ priceTo }}</div>
      </div>
      <el-slider v-model="value" range :max="100" @change="handleChange">
      </el-slider>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    priceFrom: {
      type: Number,
      default: 0
    },
    priceTo: {
      type: Number,
      default: 100
    }
  },
  data(): {
    value: Number[]
  } {
    return {
      value: [this.priceFrom, this.priceTo]
    }
  },
  methods: {
    handleChange(value: number[]) {
      if (value[0] !== this.priceFrom) {
        this.$emit('update:priceFrom', value[0])
      }
      if (value[1] !== this.priceTo) {
        this.$emit('update:priceTo', value[1])
      }
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
    font-size: 1.4rem;
    text-align: center;
  }
  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

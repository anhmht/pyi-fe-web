<template>
  <div :class="$style.root">
    <h2>Delivery method</h2>
    <div :class="$style.shipping">
      <div
        v-for="(item, index) in shippingMethods"
        :key="item.id"
        :class="[$style.item, index === active && $style.active]"
        @click="handleClick(item, index)"
      >
        <div :class="$style.name">{{ item.name }}</div>
        <div :class="$style.desc">{{ item.desc }}</div>
        <div v-if="index === active" :class="$style.dot">
          <i class="fa fa-check" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Shipping } from '~/model/checkout/checkout'
import { shippingMethods } from '~/mock/data/Shipping'
import { EVENT_BUS } from '~/constant/event-bus'

export default Vue.extend({
  props: {
    value: {
      type: Object as () => Shipping,
      default: undefined
    }
  },
  data(): {
    active: number
    shippingMethods: Shipping[]
    selectedShippingMethod?: Shipping
  } {
    return {
      active: 0,
      shippingMethods: shippingMethods,
      selectedShippingMethod: undefined
    }
  },
  methods: {
    handleClick(item: Shipping, index: number) {
      this.active = index
      this.$emit('input', item)
    }
  },
  activated() {
    this.$nuxt.$on(EVENT_BUS.CHECK_OUT_NEXT, () => {
      if (this.selectedShippingMethod) {
        this.$emit('next')
      } else {
        this.$message.error('Please select a shipping method')
      }
    })
    this.$nuxt.$on(EVENT_BUS.CHECK_OUT_PREV, () => {
      this.$emit('prev')
    })
    this.selectedShippingMethod = shippingMethods[this.active]
    this.$emit('input', this.selectedShippingMethod)
  },
  deactivated() {
    this.$nuxt.$off(EVENT_BUS.CHECK_OUT_NEXT)
    this.$nuxt.$off(EVENT_BUS.CHECK_OUT_PREV)
  }
})
</script>
<style lang="postcss" module>
.root {
  font-size: 1.4rem;
  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: var(--space);
  }
  .shipping {
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    padding: var(--space);
    border: 1px solid var(--color-bg-secondary);
    border-radius: var(--radius-5);
    width: 250px;
    margin-bottom: var(--space);
    margin-right: var(--space);
    position: relative;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    &.active {
      border: 3px solid var(--color-primary);
    }
  }
  .name {
    font-weight: 600;
  }
  .desc {
    font-size: 1.2rem;
    color: var(--color-secondary-text);
    font-style: italic;
  }
  .dot {
    width: 20px;
    height: 20px;
    background-color: var(--color-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>

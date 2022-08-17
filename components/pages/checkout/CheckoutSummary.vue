<template>
  <div :class="$style.root">
    <div :class="$style.summary">
      <div :class="$style.item">
        <label>SubTotal</label>
        <span>{{ $formatCurrency(subTotal) }}</span>
      </div>
      <div :class="$style.item">
        <label>Tax</label>
        <span>{{ $formatCurrency(tax) }}</span>
      </div>
      <div :class="$style.item">
        <label>Shipping</label>
        <span>{{ $formatCurrency(shippingFee) }}</span>
      </div>
      <div :class="$style.item">
        <h2>Order total</h2>
        <span :class="$style.total">{{ $formatCurrency(orderTotal) }}</span>
      </div>
    </div>
    <el-button
      v-if="orderItems.length === 0"
      :disabled="carts.length === 0"
      @click="checkout"
      :class="[$style.btn, carts.length === 0 && $style.disabled]"
      type="primary"
      >{{ displayButton }}</el-button
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EVENT_BUS } from '~/constant/event-bus'
import { Cart } from '~/model/cart/cart'
import { STEP } from '~/mock/data/Checkout'
import { RootState } from '~/store/state'
import summaryMixin from '~/mixins/summary'

export default Vue.extend({
  props: {
    activeStep: {
      type: Number,
      default: 0
    },
    orderItems: {
      type: Array as () => Cart[],
      default: () => []
    }
  },
  mixins: [summaryMixin],
  computed: {
    carts(): Cart[] {
      if (this.orderItems.length > 0) {
        return this.orderItems
      }
      return (this.$store.state as RootState).shoppingCart.filter(
        (item: Cart) => item.isSelected
      )
    },
    displayButton(): string {
      if (this.activeStep === STEP.PAYMENT) {
        return 'Confirm Order'
      } else {
        return 'Next'
      }
    }
  },
  methods: {
    checkout() {
      this.$nuxt.$emit(EVENT_BUS.CHECK_OUT_NEXT)
      this.$nuxt.$emit(EVENT_BUS.CHECKOUT_SLIDE_RIGHT)
      this.$nuxt.$emit(EVENT_BUS.SCROLL_TOP)
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  font-size: 1.4rem;
  .summary {
    margin-top: var(--space);
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space) 0;
    span {
      text-align: right;
      font-weight: 600;
    }
  }
  .item + .item {
    border-top: 1px solid var(--color-bg-secondary);
  }
  .total {
    font-size: 1.8rem;
  }
  .btn {
    width: 100%;
    background: var(--color-primary);
    padding: var(--space);

    &:hover {
      opacity: 0.7;
    }

    &.disabled {
      background-color: #ffe380;
      border-color: #ffe380;
      &:hover {
        opacity: 1;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    .btn {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 60px;
      left: 0;
      z-index: 100;
    }
  }
}
</style>

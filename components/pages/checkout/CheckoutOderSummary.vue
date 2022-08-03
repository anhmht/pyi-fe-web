<template>
  <div :class="$style.root">
    <div class="container">
      <div :class="$style.wrapper">
        <div :class="$style.action">
          <el-button v-if="activeStep" @click="prevStep" type="text"
            >Prev</el-button
          >
        </div>
        <div :class="$style.steps">
          <CheckoutStep :active-step="activeStep" :steps="steps" />
        </div>
        <div :class="$style.summary">
          <h3>Total: {{ $formatCurrency(orderTotal) }}</h3>
        </div>
        <div :class="$style.action">
          <el-button @click="nextStep" :class="$style.btn" type="primary">{{
            displayButton
          }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EVENT_BUS } from '~/constant/event-bus'
import { Cart } from '~/model/cart/cart'
import { Step } from '~/model/common/common'
import { STEP, steps } from '~/mock/data/Checkout'
import { RootState } from '~/store/state'

export default Vue.extend({
  components: {
    CheckoutStep: () => import('~/components/pages/checkout/CheckoutStep.vue')
  },
  props: {
    activeStep: {
      type: Number,
      required: true
    }
  },
  data(): {
    steps: Step[]
  } {
    return {
      steps: steps
    }
  },
  computed: {
    carts(): Cart[] {
      return (this.$store.state as RootState).shoppingCart.filter(
        (item: Cart) => item.isSelected
      )
    },
    subTotal(): number {
      return this.carts.reduce((acc, item) => {
        return acc + item.quantity * item.product.price
      }, 0)
    },
    tax(): number {
      return this.subTotal * 0.1
    },
    orderTotal(): number {
      return this.subTotal + this.tax + this.shippingFee
    },
    shippingFee(): number {
      return this.carts.length ? 5 : 0
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
    prevStep() {
      this.$nuxt.$emit(EVENT_BUS.CHECK_OUT_PREV)
      this.$nuxt.$emit(EVENT_BUS.CHECKOUT_SLIDE_LEFT)
      this.$nuxt.$emit(EVENT_BUS.SCROLL_TOP)
    },
    nextStep() {
      this.$nuxt.$emit(EVENT_BUS.CHECK_OUT_NEXT)
      this.$nuxt.$emit(EVENT_BUS.CHECKOUT_SLIDE_RIGHT)
      this.$nuxt.$emit(EVENT_BUS.SCROLL_TOP)
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  z-index: 1;
  padding: var(--space-1x5) 0;
  border-top: 1px solid var(--color-bg-secondary);
  box-shadow: 0 0 16px rgb(0 0 0 / 15%);
  .wrapper {
    display: flex;
    align-items: center;
  }
  .summary {
    margin: 0 var(--space-1x5);
    h3 {
      font-size: 2.8rem;
      font-weight: 700;
    }
  }
  .steps {
    flex: 1;
  }
  .btn {
    background: var(--color-primary);
    padding: var(--space);

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>

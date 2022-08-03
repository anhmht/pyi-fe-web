<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Checkout Order</h1>
      <el-row :gutter="24">
        <el-col :lg="12">
          <CheckoutForm :active-step.sync="activeStep" />
        </el-col>
        <el-col :lg="12">
          <div :class="$style.summary">
            <h2>Order Summary</h2>
            <CheckoutList />
            <CheckoutSummary :active-step="activeStep" />
          </div>
        </el-col>
      </el-row>
    </div>
    <CheckoutOderSummary :active-step="activeStep" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export const STEP = {
  CONTACT_INFO: 0,
  SHIPPING_INFO: 1,
  DELIVERY_METHOD: 2,
  PAYMENT: 3
}

export default Vue.extend({
  components: {
    CheckoutForm: () => import('~/components/pages/checkout/CheckoutForm.vue'),
    CheckoutOderSummary: () =>
      import('~/components/pages/checkout/CheckoutOderSummary.vue'),
    CheckoutSummary: () =>
      import('~/components/pages/checkout/CheckoutSummary.vue'),
    CheckoutList: () => import('~/components/pages/checkout/CheckoutList.vue')
  },
  name: 'CheckoutPage',
  middleware: ['require-cart'],
  data(): {
    activeStep: number
  } {
    return {
      activeStep: 0
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  margin-top: var(--space-4x);
  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: var(--space);
  }
  .summary {
    background: var(--color-bg-secondary-2);
    padding: var(--space-2x);
    font-size: 1.4rem;
    border-radius: var(--radius-5);
    position: relative;
  }
}
</style>

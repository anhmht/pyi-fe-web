<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Checkout Order</h1>
      <el-row :gutter="24">
        <el-col :lg="12">
          <CheckoutForm />
        </el-col>
        <el-col :lg="12"> </el-col>
      </el-row>
    </div>
    <CheckoutOderSummary />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import CheckoutForm from '~/components/pages/checkout/CheckoutForm.vue'
import CheckoutOderSummary from '~/components/pages/checkout/CheckoutOderSummary.vue'
import { RootState } from '~/store/state'

export default Vue.extend({
  components: { CheckoutForm, CheckoutOderSummary },
  name: 'CheckoutPage',
  async asyncData(context: Context) {
    const cart = (context.store.state as RootState).shoppingCart.filter(
      (x) => x.isSelected
    )

    if (cart.length === 0) {
      context.redirect('/error/not-found')
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  margin-top: var(--space-4x);
}
</style>

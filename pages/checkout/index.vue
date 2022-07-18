<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Checkout Order</h1>
      <el-row :gutter="24">
        <el-col :md="12">
          <CheckoutForm />
        </el-col>
        <el-col :md="12"> </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import CheckoutForm from '~/components/pages/checkout/CheckoutForm.vue'
import { RootState } from '~/store/state'

export default Vue.extend({
  components: { CheckoutForm },
  name: 'CheckoutPage',
  async asyncData(context: Context) {
    const cart = (context.store.state as RootState).shoppingCart.filter(
      (x) => x.isSelected
    )
    console.log(cart)

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

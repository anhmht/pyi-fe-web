<template>
  <div :class="$style.root">
    <CheckoutComplete :order-id="orderId" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import CheckoutComplete from '~/components/pages/checkout/complete/CheckoutComplete.vue'

export default Vue.extend({
  components: { CheckoutComplete },
  name: 'CheckoutCompletedPage',
  async asyncData(context: Context) {
    if (!context.params.orderId) {
      context.redirect('/error/not-found')
    }
    return { orderId: context.params.orderId }
  }
})
</script>

<style lang="postcss" module>
.root {
  margin-top: var(--space-4x);
}
</style>

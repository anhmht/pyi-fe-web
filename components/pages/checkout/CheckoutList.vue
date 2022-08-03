<template>
  <div :class="$style.root">
    <CheckoutItem v-for="item in carts" :cart="item" :key="item.id" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Cart } from '~/model/cart/cart'
import { RootState } from '~/store/state'
import CheckoutItem from './CheckoutItem.vue'

export default Vue.extend({
  components: { CheckoutItem },
  computed: {
    carts(): Cart[] {
      return (this.$store.state as RootState).shoppingCart
    }
  }
})
</script>
<style lang="postcss" module>
.root {
}
</style>

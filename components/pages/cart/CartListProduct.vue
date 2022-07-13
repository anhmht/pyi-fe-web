<template>
  <div :class="$style.root">
    <CartItem v-for="item in carts" :cart="item" :key="item.id" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CartItem from '~/components/pages/cart/CartItem.vue'
import { Cart } from '~/model/cart/cart'
import { RootState } from '~/store/state'

export default Vue.extend({
  components: { CartItem },
  computed: {
    carts(): Cart[] {
      return (this.$store.state as RootState).shoppingCart
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  margin-top: var(--space-2x);
}
</style>

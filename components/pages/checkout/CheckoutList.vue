<template>
  <div :class="$style.root">
    <CheckoutItem
      :class="$style.item"
      v-for="item in items"
      :cart="item"
      :key="item.id"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Cart } from '~/model/cart/cart'
import { RootState } from '~/store/state'
import CheckoutItem from './CheckoutItem.vue'

export default Vue.extend({
  components: { CheckoutItem },
  props: {
    orderItems: {
      type: Array as () => Cart[],
      default: () => []
    }
  },
  computed: {
    items(): Cart[] {
      if (this.orderItems.length > 0) {
        return this.orderItems
      }
      return (this.$store.state as RootState).shoppingCart.filter(
        (item: Cart) => item.isSelected
      )
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  .item + .item {
    border-top: 1px solid var(--color-bg-secondary);
  }
}
</style>

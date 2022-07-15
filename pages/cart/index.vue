<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Shopping cart</h1>
      <el-row :gutter="32">
        <el-col :lg="15">
          <CartListProduct v-if="carts.length" />
          <div v-else :class="$style.empty">
            <h2>There is nothing in your cart</h2>
            <nuxt-link :class="$style.link" to="/"
              >Continue shopping <i class="fa fa-arrow-right"></i
            ></nuxt-link>
          </div>
        </el-col>
        <el-col :lg="9">
          <CartOrderSummary />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CartListProduct from '~/components/pages/cart/CartListProduct.vue'
import CartOrderSummary from '~/components/pages/cart/CartOrderSummary.vue'
import { Cart } from '~/model/cart/cart'
import { RootState } from '~/store/state'

export default Vue.extend({
  components: { CartListProduct, CartOrderSummary },
  name: 'CartPage',
  computed: {
    carts(): Cart[] {
      return (this.$store.state as RootState).shoppingCart
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  margin-top: var(--space-4x);
  .empty {
    margin-top: var(--space-2x);
  }
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
  .link {
    color: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>

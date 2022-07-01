<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Feature Products</h1>
      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        :class="$style.feature"
      >
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :data="product"
          :class="$style.product"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ProductItem from '~/components/common/ProductItem.vue'
import { products } from '~/mock/data/Product'
import { Product } from '~/model/product/product'

export default Vue.extend({
  components: { ProductItem },
  data(): {
    products: Product[]
  } {
    return {
      products: products
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  padding: var(--space-4x) 0;
  .feature {
    margin-top: var(--space-2x5);
  }
  .product {
    transition-delay: 1s;
  }
}
</style>

<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Product You May Like</h1>
      <ProductCarousel :products="products" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { products } from '~/mock/data/Product'
import { Product } from '~/model/product/product'
import ProductCarousel from '~/components/common/ProductCarousel.vue'

export default Vue.extend({
  components: { ProductCarousel },
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
  padding-top: var(--space-4x);
}
</style>

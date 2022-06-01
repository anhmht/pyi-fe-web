<template>
  <div :class="$style.root">
    <div class="container">
      <h1 v-scroll-animate>Feature Products</h1>
      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        :class="$style.feature"
      >
        <ProductItem
          v-scroll-animate
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
import { FeatureProduct } from '~/model/home/featureProduct'
import { featureProducts } from '~/mock/data/FeatureProduct'
import ProductItem from '~/components/common/ProductItem.vue'

export default Vue.extend({
  components: { ProductItem },
  data(): {
    products: FeatureProduct[]
  } {
    return {
      products: featureProducts
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
  :global(.before-enter) {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s ease-out;
  }
  :global(.enter) {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>

<template>
  <div :class="$style.root">
    <div
      class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :data="product"
        :class="$style.product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductItem from '~/components/common/ProductItem.vue'
import { Product } from '~/model/product/product'

export default Vue.extend({
  components: { ProductItem },
  props: {
    products: {
      type: Array as () => Product[],
      required: true
    }
  }
})
</script>
<style lang="postcss" module>
.root {
}
</style>

<template>
  <div :class="$style.root">
    <div
      class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <template v-if="products.length > 0">
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :data="product"
          :class="$style.product"
        />
      </template>
      <template v-if="products.length === 0 && isLoading">
        <ProductLoading
          v-for="i in 8"
          :key="i"
          class="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
        />
      </template>
    </div>
    <el-empty
      v-if="products.length === 0 && !isLoading"
      description="No data"
    ></el-empty>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductItem from '~/components/common/ProductItem.vue'
import ProductLoading from '~/components/common/ProductLoading.vue'
import { Product } from '~/model/product/product'

export default Vue.extend({
  components: { ProductItem, ProductLoading },
  props: {
    products: {
      type: Array as () => Product[],
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log(this.isLoading)
  }
})
</script>
<style lang="postcss" module>
.root {
}
</style>

<template>
  <div :class="$style.root">
    <div class="container">
      <ProductDetailLoading
        :class="$style.loading"
        v-if="$fetchState.pending"
      />
      <ProductDetail v-else :product="product" />
    </div>
    <ProductYouMayLike />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import ProductDetail from '~/components/pages/product/ProductDetail.vue'
import ProductDetailLoading from '~/components/pages/product/ProductDetailLoading.vue'
import ProductYouMayLike from '~/components/pages/product/ProductYouMayLike.vue'
import { EVENT_BUS } from '~/constant/event-bus'
import { Product } from '~/model/product/product'

export default Vue.extend({
  components: {
    ProductYouMayLike,
    ProductDetail,
    ProductDetailLoading
  },
  name: 'ProductDetailPage',
  async asyncData(context: Context) {
    if (!context.params.slug) {
      context.redirect('/error/not-found')
    }
  },
  data(): {
    product?: Product
  } {
    return {
      product: undefined
    }
  },
  computed: {
    path(): string {
      return this.$route.params.slug
    }
  },
  async fetch() {
    this.product = await this.$productService.getProductDetail(this.path)
  },
  mounted() {
    this.$nuxt.$emit(EVENT_BUS.SCROLL_TOP)
  }
})
</script>
<style lang="postcss" module>
.root {
  position: relative;
  .loading {
    margin-top: var(--space-4x);
  }
}
</style>

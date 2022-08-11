<template>
  <div :class="$style.root">
    <ProductDetail />
    <ProductYouMayLike />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductDetail from '~/components/pages/product/ProductDetail.vue'
import ProductYouMayLike from '~/components/pages/product/ProductYouMayLike.vue'
import { EVENT_BUS } from '~/constant/event-bus'

export default Vue.extend({
  components: {
    ProductYouMayLike,
    ProductDetail
  },
  name: 'ProductDetailPage',
  mounted() {
    this.$nuxt.$emit(EVENT_BUS.SCROLL_TOP)
  }
})
</script>
<style lang="postcss" module>
.root {
  position: relative;
}
</style>

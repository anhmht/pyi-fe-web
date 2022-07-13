<template>
  <div :class="$style.root">
    <Category v-scroll-animate :slug="slug" :key="slug" />
    <ProductYouMayLike v-scroll-animate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import { Context } from '@nuxt/types'
import Category from '~/components/pages/category/Category.vue'
import ProductYouMayLike from '~/components/pages/product/ProductYouMayLike.vue'

export default Vue.extend({
  components: { Breadcrumb, Category, ProductYouMayLike },
  name: 'CategoryPage',
  async asyncData(context: Context) {
    if (!context.params.slug) {
      context.redirect('/error/not-found')
    }
    return { slug: context.params.slug }
  }
})
</script>

<style lang="postcss" module>
.root {
  margin-top: var(--space-4x);
  :global(.before-enter) {
    opacity: 0;
    transition: all 0.5s ease-out;
  }
  :global(.enter) {
    opacity: 1;
  }
}
</style>

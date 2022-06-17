<template>
  <div>
    <Banner />
    <Category />
    <FeatureProduct />
    <Deal />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Banner from '~/components/pages/home/Banner.vue'
import Category from '~/components/pages/home/Category.vue'
import Deal from '~/components/pages/home/Deal.vue'
import FeatureProduct from '~/components/pages/home/FeatureProduct.vue'

export default Vue.extend({
  components: { Banner, Category, FeatureProduct, Deal },
  name: 'IndexPage'
})
</script>

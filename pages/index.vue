<template>
  <div>
    <Banner />
    <Category />
    <FeatureProduct />
    <Deal />
    <BestSeller />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Banner from '~/components/pages/home/Banner.vue'
import BestSeller from '~/components/pages/home/BestSeller.vue'
import Category from '~/components/pages/home/Category.vue'
import Deal from '~/components/pages/home/Deal.vue'
import FeatureProduct from '~/components/pages/home/FeatureProduct.vue'

export default Vue.extend({
  components: { Banner, Category, FeatureProduct, Deal, BestSeller },
  name: 'IndexPage'
})
</script>

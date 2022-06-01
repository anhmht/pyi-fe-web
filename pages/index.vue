<template>
  <div>
    <Banner />
    <Category />
    <FeatureProduct />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Banner from '~/components/pages/home/Banner.vue'
import Category from '~/components/pages/home/Category.vue'
import FeatureProduct from '~/components/pages/home/FeatureProduct.vue'

export default Vue.extend({
  components: { Banner, Category, FeatureProduct },
  name: 'IndexPage'
})
</script>

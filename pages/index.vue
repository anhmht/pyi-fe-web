<template>
  <div>
    <Banner />
    <Category />
    <FeatureProduct />
    <Deal />
    <BestSeller />
    <Incentive />
    <Promo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Banner from '~/components/pages/home/Banner.vue'
import BestSeller from '~/components/pages/home/BestSeller.vue'
import Category from '~/components/pages/home/Category.vue'
import Deal from '~/components/pages/home/Deal.vue'
import FeatureProduct from '~/components/pages/home/FeatureProduct.vue'
import Incentive from '~/components/pages/home/Incentive.vue'
import Promo from '~/components/pages/home/Promo.vue'

export default Vue.extend({
  components: {
    Banner,
    Category,
    FeatureProduct,
    Deal,
    BestSeller,
    Promo,
    Incentive
  },
  name: 'IndexPage'
})
</script>

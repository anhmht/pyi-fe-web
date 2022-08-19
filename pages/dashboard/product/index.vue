<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Product List</h1>
      <div :class="$style.product">
        <ProductList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductList from '~/components/pages/dashboard/product/ProductList.vue'

export default Vue.extend({
  components: { ProductList },
  name: 'DashboardProduct',
  layout: 'dashboard'
})
</script>
<style lang="postcss" module>
.root {
  .product {
    background: #fff;
    border-radius: var(--radius-5);
    padding: var(--space);
    margin-top: var(--space-2x);
  }
}
</style>

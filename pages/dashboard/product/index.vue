<template>
  <div :class="$style.root">
    <div class="container">
      <div v-if="!create" :class="$style.list">
        <h1>Product List</h1>
        <div :class="$style.product">
          <ProductList @create="(product) => (create = product)" />
        </div>
      </div>
      <div v-else :class="$style.form">
        <h1>Product Form</h1>
        <ProductCustomcat
          v-if="(create = 'customcat-product')"
          :class="$style.customcat"
          @cancel="create = undefined"
        />
        <ProductForm v-else :product-id="productId" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductCustomcat from '~/components/pages/dashboard/product/customcat/ProductCustomcat.vue'
import ProductForm from '~/components/pages/dashboard/product/ProductForm.vue'
import ProductList from '~/components/pages/dashboard/product/ProductList.vue'

export default Vue.extend({
  components: { ProductList, ProductCustomcat, ProductForm },
  name: 'DashboardProduct',
  layout: 'dashboard',
  data(): {
    create?: string
    productId?: string
  } {
    return {
      create: undefined,
      productId: undefined
    }
  }
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
  .form {
    .customcat {
      margin-top: var(--space-2x);
      background: #fff;
      border-radius: var(--radius-5);
      padding: var(--space);
    }
  }
}
</style>

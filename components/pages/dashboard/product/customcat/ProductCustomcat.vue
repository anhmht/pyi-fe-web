<template>
  <div :class="$style.root">
    <ProductCustomcatSelect
      v-if="!product"
      @select="handleSelect"
      @cancel="$emit('cancel')"
    />
    <ProductCustomcatForm
      v-else
      :product="product"
      @success="handleSuccess"
      @cancel="product = undefined"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductCustomcatSelect from '~/components/pages/dashboard/product/customcat/ProductCustomcatSelect.vue'
import { CustomcatProduct } from '~/model/product/product'
import ProductCustomcatForm from '~/components/pages/dashboard/product/customcat/ProductCustomcatForm.vue'

export default Vue.extend({
  components: { ProductCustomcatSelect, ProductCustomcatForm },
  data(): {
    product?: CustomcatProduct
  } {
    return {
      product: undefined
    }
  },
  methods: {
    handleSuccess() {
      this.product = undefined
      this.$emit('cancel')
    },
    handleSelect(product: CustomcatProduct) {
      this.product = product
    }
  }
})
</script>
<style lang="postcss" module>
.root {
}
</style>

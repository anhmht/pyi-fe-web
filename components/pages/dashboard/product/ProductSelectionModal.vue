<template>
  <div :class="$style.root">
    <el-dialog
      title="Product select"
      :visible.sync="visible"
      width="30%"
      :before-close="() => $emit('update:visible', false)"
    >
      <el-radio-group v-model="product">
        <el-radio label="customcat-product">Customcat Product</el-radio>
        <el-radio label="manual-product">Manual Product</el-radio>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="$emit('update:visible', false)">Cancel</el-button>
        <el-button type="primary" @click="handleSelect">Select</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      product: 'customcat-product'
    }
  },
  methods: {
    handleSelect() {
      this.$emit('select', this.product)
      this.$emit('update:visible', false)
    }
  }
})
</script>
<style lang="postcss" module>
.root {
}
</style>

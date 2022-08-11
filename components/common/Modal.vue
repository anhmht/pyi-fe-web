<template>
  <div :class="$style.root">
    <el-dialog
      :title="title"
      :visible.sync="visible"
      :before-close="$emit('update:visible', false)"
    >
      <span>This is a message</span>
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
    },
    title: {
      type: String,
      default: undefined
    }
  }
})
</script>
<style lang="postcss" module>
.root {
}
</style>

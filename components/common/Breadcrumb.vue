<template>
  <div :class="$style.root">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/">Home</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(item, index) in data"
        :key="index"
        :to="{ path: `/category${item.path}` }"
        >{{ item.name }}</el-breadcrumb-item
      >
      <el-breadcrumb-item>{{ current }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Category } from '~/model/product/product'

export default Vue.extend({
  props: {
    data: {
      type: Array as () => Category[],
      required: true
    },
    current: {
      type: String,
      required: true
    }
  }
})
</script>
<style lang="postcss" module>
.root {
}
</style>

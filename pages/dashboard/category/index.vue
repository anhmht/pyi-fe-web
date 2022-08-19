<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Category List</h1>
      <div :class="$style.category">
        <el-row :gutter="24">
          <el-col :lg="8">
            <CategoryList />
          </el-col>
          <el-col :lg="16"> aaaaa </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CategoryList from '~/components/pages/dashboard/category/CategoryList.vue'

export default Vue.extend({
  components: { CategoryList },
  name: 'DashboardCategory',
  layout: 'dashboard'
})
</script>
<style lang="postcss" module>
.root {
  .category {
    background: #fff;
    border-radius: var(--radius-5);
    padding: var(--space);
    margin-top: var(--space-2x);
  }
}
</style>

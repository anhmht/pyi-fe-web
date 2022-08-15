<template>
  <div :class="$style.root">
    <el-skeleton :rows="1" animated :class="$style.breadcrumb" />
    <el-row :gutter="32" :class="$style.content">
      <el-col :md="14">
        <el-skeleton animated>
          <template slot="template">
            <el-skeleton-item variant="image" :class="$style.image" />
          </template>
        </el-skeleton>
      </el-col>
      <el-col :md="10">
        <el-skeleton animated>
          <template slot="template">
            <el-skeleton-item variant="h1" :class="$style.name" />
            <el-skeleton-item variant="text" :class="$style.price" />
            <el-skeleton-item variant="text" :class="$style.rating" />
          </template>
        </el-skeleton>
        <el-skeleton :rows="10" animated :class="$style.detail" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style lang="postcss" module>
.root {
  .breadcrumb {
    :global(.el-skeleton__item) {
      width: 70%;
      height: 24px;
    }
  }
  .content {
    margin-top: var(--space-2x);
  }
  .image {
    width: 100%;
    height: 600px;
  }
  .name {
    height: 48px;
  }
  .price {
    margin-top: var(--space);
    height: 24px;
    width: 30%;
  }
  .rating {
    margin-top: var(--space);
    height: 24px;
    width: 50%;
    display: block;
  }
  .detail {
    margin-top: var(--space-2x);
  }
}
</style>

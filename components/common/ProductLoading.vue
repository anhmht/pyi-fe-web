<template>
  <el-skeleton :class="$style.root" animated>
    <template slot="template">
      <el-skeleton-item variant="image" :class="$style.image" />
      <div :class="$style.content">
        <div :class="$style.title">
          <el-skeleton-item variant="h3" :class="$style.name" />
          <el-skeleton-item variant="text" :class="$style.price" />
        </div>
        <el-skeleton-item variant="text" :class="$style.desc" />
      </div>
    </template>
  </el-skeleton>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style lang="postcss" module>
.root {
  font-size: 1.5rem;
  .image {
    width: 100%;
    height: 25rem;
  }
  .content {
  }
  .title {
    display: flex;
    align-items: center;
    justify-items: space-between;
    margin-top: var(--space);
  }
  .name {
    width: 70%;
  }
  .price {
    margin-left: var(--space);
    flex: 1;
  }
  .desc {
    margin-top: var(--space-1o2);
    width: 30%;
  }
}
</style>

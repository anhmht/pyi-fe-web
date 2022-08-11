<template>
  <div :class="$style.root">
    <div class="group relative">
      <div
        class="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
      >
        <img
          :src="data.images[0].src"
          :alt="data.images[0].alt"
          :class="$style.image"
          class="object-center object-cover"
        />
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-gray-700" :class="$style.title">
            <nuxt-link :to="`/product${data.path}`">
              <span aria-hidden="true" class="absolute inset-0" />
              {{ data.name }}
            </nuxt-link>
          </h3>
          <p class="mt-1 text-gray-500">{{ data.colors[0].name }}</p>
        </div>
        <p class="font-medium text-gray-900">
          {{ $formatCurrency(data.price) }}
        </p>
      </div>
    </div>
    <div>
      <el-button class="bg-gray-200" :class="$style.btn">Add To Cart</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Product } from '~/model/product/product'

export default Vue.extend({
  props: {
    data: {
      type: Object as () => Product,
      required: true
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  font-size: 1.5rem;
  .image {
    width: 100%;
    height: 30rem;
  }
  .title {
    height: 45px;
    overflow: hidden;
    margin-right: var(--space-1o2);
  }
  .btn {
    border: none;
    margin-top: var(--space);
    width: 100%;
    color: var(--color-primary-text);
    transition: var(--transition-300);
    &:hover {
      color: #fff;
      background: var(--color-primary);
    }
  }
}
</style>

<template>
  <div :class="$style.root">
    <div class="group relative">
      <div
        class="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
      >
        <img
          :src="data.imageSrc"
          :alt="data.imageAlt"
          :class="$style.image"
          class="object-center object-cover"
        />
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-gray-700">
            <a :href="data.href">
              <span aria-hidden="true" class="absolute inset-0" />
              {{ data.name }}
            </a>
          </h3>
          <p class="mt-1 text-gray-500">{{ data.color }}</p>
        </div>
        <p class="font-medium text-gray-900">{{ data.price }}</p>
      </div>
    </div>
    <div>
      <el-button class="bg-gray-200" :class="$style.btn">Add To Cart</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FeatureProduct } from '~/model/home/featureProduct'

export default Vue.extend({
  props: {
    data: {
      type: Object as () => FeatureProduct,
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

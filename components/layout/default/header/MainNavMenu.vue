<template>
  <ul :class="$style.root">
    <li :class="$style.navMenu" v-for="item in data" :key="item.id">
      <nuxt-link :to="`/category${item.path}`" :class="$style.menu">
        {{ item.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Category } from '~/model/product/product'
export default Vue.extend({
  props: {
    data: {
      type: Array as () => Category[],
      required: true
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  list-style: none;
  margin-bottom: 0px;
  .navMenu {
    display: inline-block;
  }
  .menu {
    color: var(-color-primary-text);
    font-size: 1.3rem;
    font-weight: 500;
    text-transform: uppercase;
    padding: 20px;
    transition: var(--transition-300);
    &:hover {
      color: var(--color-secondary-text);
    }
  }
}
</style>

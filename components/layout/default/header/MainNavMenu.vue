<template>
  <ul :class="$style.root">
    <li :class="$style.navMenu" v-for="item in data" :key="item.uuid">
      <a href="#" :class="$style.menu">
        {{ item.name }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { MainMenu } from '~/model/layout/header'
export default Vue.extend({
  props: {
    data: {
      type: Array as () => MainMenu[],
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

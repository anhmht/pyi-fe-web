<template>
  <ul :class="$style.root">
    <li :class="$style.navUser">
      <a href="#" :class="$style.menu">
        <i class="fa fa-search" aria-hidden="true"></i>
      </a>
    </li>
    <li :class="$style.navUser">
      <a href="#" :class="$style.menu">
        <i class="fa fa-question-circle" aria-hidden="true"></i>
      </a>
    </li>
    <li :class="$style.navUser">
      <a href="#" :class="[$style.menu, $style.checkout]">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      </a>
      <span :class="$style.notify">2</span>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss" module>
.root {
  list-style: none;
  margin-bottom: 0px;
  margin-left: var(--space-2x);
  .navUser {
    position: relative;
    display: inline-block;
    text-align: center;
  }
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--space-2x5);
    height: var(--space-2x5);
    color: var(-color-primary-text);
    transition: var(--transition-300);
    &:hover {
      color: var(--color-secondary-text);
    }
    i {
      font-size: 1.6rem;
    }
    &.checkout {
      background: var(--color-bg-secondary);
      border-radius: 50%;
    }
  }

  .notify {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -9px;
    left: 22px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color-error);
    font-size: 1.2rem;
    color: #ffffff;
  }
}
</style>

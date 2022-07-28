<template>
  <div :class="$style.root">
    <div class="container">
      <el-button @click="prevStep" :class="$style.btn" type="primary"
        >Prev</el-button
      >
      <el-button @click="nextStep" :class="$style.btn" type="primary"
        >Next</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EVENT_BUS } from '~/constant/event-bus'

export default Vue.extend({
  methods: {
    prevStep() {
      this.$nuxt.$emit(EVENT_BUS.CHECK_OUT_PREV)
      this.$nuxt.$emit(EVENT_BUS.CHECKOUT_SLIDE_LEFT)
      this.$nuxt.$emit(EVENT_BUS.SCROLL_TOP)
    },
    nextStep() {
      this.$nuxt.$emit(EVENT_BUS.CHECK_OUT_NEXT)
      this.$nuxt.$emit(EVENT_BUS.CHECKOUT_SLIDE_RIGHT)
      this.$nuxt.$emit(EVENT_BUS.SCROLL_TOP)
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  z-index: 1;
  padding: var(--space-1x5) 0;
  .btn {
    background: var(--color-primary);
    padding: var(--space);

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>

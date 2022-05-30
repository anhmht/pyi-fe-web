<template>
  <div :class="$style.root">
    <NewsLetter />
    <FooterNav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NewsLetter from '~/components/layout/default/footer/NewsLetter.vue'
import FooterNav from '~/components/layout/default/footer/FooterNav.vue'

export default Vue.extend({
  components: { NewsLetter, FooterNav }
})
</script>

<style lang="postcss" module>
.root {
}
</style>

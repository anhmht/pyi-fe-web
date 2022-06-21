<template>
  <div :class="[$style.root, 'container']">
    <div :class="$style.logo">
      <img src="~/assets/images/logo.png" width="80" />
    </div>
    <div :class="$style.error">404 ERROR</div>
    <h1>Page not found.</h1>
    <p>
      Sorry, we couldn't find the page you looking for. Please check the URL in
      the address bar and try again
    </p>
    <nuxt-link :class="$style.link" to="/"
      >Go back home <i class="fa fa-arrow-right"></i
    ></nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NotFound'
})
</script>
<style lang="postcss" module>
.root {
  text-align: center;
  margin-top: var(--space-4x);
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .error {
    color: var(--color-primary);
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: var(--space-3x);
  }
  p {
    font-size: 1.4rem;
    width: 350px;
    margin: var(--space) auto;
  }
  .link {
    color: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>

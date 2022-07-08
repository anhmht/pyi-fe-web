<template>
  <div :class="$style.root">
    <video autoplay loop>
      <source src="~/assets/videos/tracking.mp4" type="video/mp4" />
    </video>
    <div v-if="isShow" :class="$style.wrapper">
      <h1>Tracking your order</h1>
      <TrackingForm />
      <nuxt-link :class="$style.link" to="/"
        >Go back home <i class="fa fa-arrow-right"></i
      ></nuxt-link>
    </div>
    <div v-else :class="[$style.info, 'container']">
      <h1>Tracking your order</h1>
      <TrackingInfo />
      <nuxt-link :class="$style.link" to="/"
        >Go back home <i class="fa fa-arrow-right"></i
      ></nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TrackingForm from '~/components/pages/tracking/TrackingForm.vue'
import TrackingInfo from '~/components/pages/tracking/TrackingInfo.vue'

export default Vue.extend({
  components: { TrackingForm, TrackingInfo },
  name: 'TrackingPage',
  data() {
    return {
      isShow: false
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  video {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }

  .wrapper {
    z-index: 1;
    width: 450px;
    padding: var(--space-2x);
    background: rgba(0, 0, 0, 0.62);
    border-radius: var(--radius-5);
    h1 {
      color: #fff;
    }
  }
  .info {
    z-index: 1;
    padding: var(--space-2x);
    background: #fff;
    border-radius: var(--radius-5);
    h1 {
      margin-bottom: var(--space-2x);
    }
  }
  .link {
    color: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>

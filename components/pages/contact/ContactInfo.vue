<template>
  <div :class="$style.root">
    <div :class="$style.overlay">
      <h1>Contact Information</h1>
      <div :class="$style.desc">
        Feel free to get in touch with us here or send us an email at
        <a href="mailto: support@pyi.com" target="_blank"> support@pyi.com</a>
        <br />
        We will respond your message within 24 - 48 hours.
      </div>
      <div>
        Please read our policies below if you need any additional information:
      </div>
      <div :class="$style.group">
        <nuxt-link :class="$style.useful" to="/tracking">
          Track order
        </nuxt-link>
        <nuxt-link :class="$style.useful" to="/shipping-policy">
          Shipping policy
        </nuxt-link>
        <nuxt-link :class="$style.useful" to="/return-policy">
          Return/Refund policy
        </nuxt-link>
        <nuxt-link :class="$style.useful" to="/term">
          Terms & Conditions
        </nuxt-link>
        <nuxt-link :class="$style.useful" to="/privacy"> Privacy </nuxt-link>
        <nuxt-link :class="$style.useful" to="/dmca"> DMCA </nuxt-link>
      </div>
      <h2>Our Office Location</h2>
      <div>
        232 Forest Road Walthamstow UNITED KINGDOM <br />
        Phone Number: 111-111-111
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style lang="postcss" module>
.root {
  height: 100%;
  font-size: 1.4rem;
  color: #fff;
  background: #fdc830; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #f37335,
    #fdc830
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #f37335,
    #fdc830
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-top-left-radius: var(--radius-5);
  border-bottom-left-radius: var(--radius-5);

  .overlay {
    padding: var(--space-2x);
  }
  .desc {
    margin: var(--space-2x) 0;
  }
  .group {
    display: flex;
    flex-wrap: wrap;
  }
  h2 {
    margin-top: var(--space-2x);
    font-size: 2rem;
    font-weight: 700;
  }
  .useful {
    color: #fff;
    margin-right: var(--space);
    font-weight: 600;
    &:hover {
      opacity: 0.7;
    }
  }
  a {
    color: #fff;
    font-weight: 600;
    &:hover {
      opacity: 0.7;
    }
  }

  @media only screen and (max-width: 991px) {
    border-top-right-radius: var(--radius-5);
    border-bottom-left-radius: 0;
  }
}
</style>

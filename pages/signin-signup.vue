<template>
  <div class="container">
    <div :class="[$style.container, signUp && $style.signUpActive]">
      <Overlay :active.sync="signUp" />
      <form :class="[$style.form, $style.signUp]" action="#">
        <h1>Create login</h1>
        <h4>Use your email for registration</h4>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
      <LoginForm :class="[$style.form, $style.signIn]" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoginForm from '~/components/pages/signIn-signUp/LoginForm.vue'
import Overlay from '~/components/pages/signIn-signUp/Overlay.vue'

export default Vue.extend({
  components: { Overlay, LoginForm },
  name: 'SignInSignUpPage',
  data(): {
    signUp: Boolean
  } {
    return {
      signUp: false
    }
  },
  mounted() {
    if (this.$route.hash && this.$route.hash === '#sign-up') {
      this.signUp = true
    }
  },

  watch: {
    '$route.hash'(value) {
      if (value && value === '#sign-up') {
        this.signUp = true
      } else {
        this.signUp = false
      }
    }
  }
})
</script>
<style lang="postcss" module>
.container {
  display: flex;
  margin-top: var(--space-2x);
  border: 1px var(--color-bg-secondary) solid;
  border-radius: var(--radius-5);
  min-height: 600px;
  position: relative;

  .signIn {
    left: 0;
    z-index: 2;
  }

  .signUp {
    left: 0;
    z-index: 1;
    opacity: 0;
  }

  .form {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: #fff;
    transition: all 0.5s ease-in-out;
  }

  &.signUpActive {
    .signIn {
      transform: translateX(100%);
    }

    .signUp {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: show 0.5s;
    }
  }

  @keyframes show {
    0% {
      opacity: 0;
      z-index: 1;
    }
    49% {
      opacity: 0;
      z-index: 1;
    }
    50% {
      opacity: 1;
      z-index: 10;
    }
  }
}
</style>

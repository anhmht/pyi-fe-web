<template>
  <div class="container">
    <div :class="[$style.container, signUp && $style.signUpActive]">
      <Overlay :active.sync="signUp" />
      <RegisterForm :class="[$style.form, $style.signUp]" />
      <LoginForm :class="[$style.form, $style.signIn]" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoginForm from '~/components/pages/signIn-signUp/LoginForm.vue'
import Overlay from '~/components/pages/signIn-signUp/Overlay.vue'
import RegisterForm from '~/components/pages/signIn-signUp/RegisterForm.vue'

export default Vue.extend({
  components: { Overlay, LoginForm, RegisterForm },
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
  margin-top: var(--space-4x);
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

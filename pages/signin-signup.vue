<template>
  <div class="container">
    <div
      :class="[$style.container, signUp && $style.signUpActive]"
      :style="{ minHeight: isMobile ? '750px' : '630px' }"
    >
      <Overlay v-if="!isMobile" :active.sync="signUp" />
      <RegisterForm
        :class="[$style.form, $style.signUp, isMobile && $style.mobile]"
        @change="signUp = !signUp"
      />
      <LoginForm
        :class="[$style.form, $style.signIn, isMobile && $style.mobile]"
        @change="signUp = !signUp"
      />
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
  computed: {
    isMobile(): boolean {
      return this.$mq === 'mobile'
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
    },
    signUp(value) {
      if (value) {
        this.$router.push({ hash: '#sign-up' })
      } else {
        this.$router.push({ hash: '#sign-in' })
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
    &.mobile {
      width: 100%;
    }
  }

  &.signUpActive {
    .signIn {
      transform: translateX(100%);
      &.mobile {
        transform: none;
      }
    }

    .signUp {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: show 0.5s;
      &.mobile {
        transform: none;
      }
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

<template>
  <div :class="[$style.root, 'container']">
    <div :class="$style.forgot">
      <div :class="$style.logo">
        <img src="~/assets/images/logo.png" width="80" />
      </div>
      <h1>{{ title }}</h1>
      <p>
        {{ desc }}
      </p>
      <div v-if="isLoading" v-loading="isLoading" :class="$style.loading"></div>
      <nuxt-link :class="$style.link" to="/"
        >Go back home <i class="fa fa-arrow-right"></i
      ></nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ActivateAccountDTO } from '~/model/user/user'

export default Vue.extend({
  name: 'ForgotPassword',
  data(): {
    title: string
    desc: string
    isLoading: boolean
  } {
    return {
      title: 'Activate your account',
      desc: 'We are activating your account, please wait for a few seconds',
      isLoading: true
    }
  },
  async mounted() {
    const payload = {
      email: this.$route.query.email,
      secret: this.$route.query.secret
    } as ActivateAccountDTO
    try {
      // await this.$userService.activateAccount(payload)
      this.$notify.success({
        title: 'Activate Success',
        message: `Your account was activated`
      })
      this.title = 'Your account has been successfully activated!'
      this.desc = 'You can log in to your account and start shopping'

      this.$confetti.start()

      setTimeout(() => {
        this.$confetti.stop()
      }, 10000)
      this.isLoading = false
    } catch (error: any) {
      this.$notify.error({
        title: 'Error',
        message: error.message
      })
      this.isLoading = false
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  text-align: center;
  margin-top: var(--space-4x);
  .forgot {
    border: 1px var(--color-bg-secondary) solid;
    border-radius: var(--radius-5);
    padding: var(--space-1x5);
    width: 40%;
    margin: auto;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading {
    padding: var(--space-2x) 0;
    margin: var(--space-1x5) 0;
  }
  p {
    font-size: 1.4rem;
    margin: var(--space) auto;
  }
  .link {
    color: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }
  .btn {
    width: 100%;
    background: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }

  :global(.el-loading-mask) {
    transform: translateX(-20px);
  }

  @media only screen and (max-width: 1024px) {
    .forgot {
      width: 100%;
    }
  }
}
</style>

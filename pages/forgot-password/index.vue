<template>
  <div :class="[$style.root, 'container']">
    <div :class="$style.forgot">
      <div :class="$style.logo">
        <img src="~/assets/images/logo.png" width="80" />
      </div>
      <h1>Forgot Your Password</h1>
      <p>
        To reset your password, enter the registered email address and we will
        send you password reset instructions on your email!
      </p>
      <el-form :model="form" ref="form" :class="$style.form">
        <el-form-item
          :class="$style.input"
          inline-message
          prop="email"
          :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur'
            },
            {
              type: 'email',
              message: 'Please input correct email address',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-input placeholder="Your Email" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="isLoading"
            :class="$style.btn"
            type="primary"
            @click.prevent="submitForm"
            >Send Reset Link</el-button
          >
        </el-form-item>
      </el-form>
      <nuxt-link :class="$style.link" to="/"
        >Go back home <i class="fa fa-arrow-right"></i
      ></nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ForgotPassword',
  data(): {
    form: { email: string }
    isLoading: boolean
  } {
    return {
      form: {
        email: ''
      },
      isLoading: false
    }
  },
  methods: {
    submitForm() {
      const vm = this as any
      vm.$refs.form.validate(async (valid: boolean) => {
        if (valid) {
          try {
            this.isLoading = true
            await this.$userService.forgotPass(this.form.email)
            this.$notify.success({
              title: 'Send Email Success',
              message: `Please check your email inbox`
            })
            this.isLoading = false
          } catch (error: any) {
            this.$notify.error({
              title: 'Error',
              message: error.message
            })
            this.isLoading = false
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
  .error {
    color: var(--color-primary);
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: var(--space-3x);
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

  @media only screen and (max-width: 1024px) {
    .forgot {
      width: 100%;
    }
  }
}
</style>

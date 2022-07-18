<template>
  <div :class="$style.root">
    <div>
      <img src="~/assets/images/logo.png" width="80" />
    </div>
    <h1>Create a new account</h1>
    <el-form label-position="top" :rules="rules" :model="form" ref="form">
      <el-form-item label="Email address" prop="email">
        <el-input placeholder="Your Email" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Name" prop="name">
        <el-input placeholder="Your Name" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          placeholder="Password"
          v-model="form.password"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item :class="$style.submit">
        <el-button
          :class="$style.submitBtn"
          type="primary"
          @click.prevent="submitForm"
          v-loading.fullscreen.lock="isLoading"
          >Create an account</el-button
        >
      </el-form-item>
    </el-form>
    <el-divider class="divider"></el-divider>
    <div :class="$style.policy">
      By creating an account you agree to our
      <nuxt-link to="/term">Terms of Service</nuxt-link> and
      <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
    </div>
    <el-divider v-if="isMobile">Already have an account?</el-divider>
    <el-button
      v-if="isMobile"
      :class="$style.submitBtn"
      type="primary"
      @click.prevent="$emit('change')"
      >Sign in</el-button
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { RegisterRequestDTO } from '~/model/user/user'

export default Vue.extend({
  data(): {
    form: { email: string; name: string; password: string }
    rememberMe: boolean
    rules: {
      email: Object[]
      password: Object[]
      name: Object[]
    }
    isLoading: boolean
  } {
    return {
      isLoading: false,
      form: {
        email: '',
        name: '',
        password: ''
      },
      rememberMe: false,
      rules: {
        email: [
          {
            required: true,
            message: 'Please input email address',
            trigger: 'change'
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: 'change'
          }
        ],
        name: [
          {
            required: true,
            message: 'Please input your name',
            trigger: 'change'
          }
        ],
        password: [
          {
            required: true,
            message: 'Please input your password',
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {
    isMobile(): boolean {
      return this.$mq === 'mobile'
    }
  },
  methods: {
    submitForm() {
      const vm = this as any

      vm.$refs.form.validate(async (valid: boolean) => {
        if (valid) {
          this.isLoading = true
          try {
            const payload: RegisterRequestDTO = {
              email: this.form.email,
              password: this.form.password,
              username: this.form.name
            }
            await this.$userService.register(payload)
            this.$notify.success({
              title: 'Create account Successful',
              message: `Please check your email to verify your account`
            })
            this.isLoading = false
            this.$router.push('/')
          } catch (error: any) {
            console.log(error)
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
  padding: var(--space-2x) var(--space-3x);
  h1 {
    margin: var(--space) 0;
  }
  .submit {
    margin-top: var(--space-2x5);
  }
  .submitBtn {
    width: 100%;
    background: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }
  .policy {
    font-size: 1.3rem;
    text-align: center;
    color: var(--color-form-text);
    a {
      color: var(--color-primary);
      &:hover {
        opacity: 0.7;
      }
    }
  }
  :global(.el-divider--horizontal) {
    margin: var(--space-2x5) 0;
  }

  :global(.el-divider__text) {
    color: var(--color-form-text);
    text-align: center;
  }
  :global(.divider) {
    margin: var(--space) 0;
  }
}
</style>

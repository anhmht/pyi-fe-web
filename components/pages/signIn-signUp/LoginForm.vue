<template>
  <div :class="$style.root">
    <div>
      <img src="~/assets/images/logo.png" width="80" />
    </div>
    <h1>Sign in to your account</h1>
    <el-form label-position="top" :rules="rules" :model="form" ref="form">
      <el-form-item label="Email address" prop="email">
        <el-input placeholder="Your Email" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          placeholder="Password"
          v-model="form.password"
          type="password"
        ></el-input>
      </el-form-item>
      <div :class="$style.forgotPass">
        <el-checkbox label="Remember me" v-model="rememberMe"></el-checkbox>
        <nuxt-link to="/forgot-password">Forgot your password?</nuxt-link>
      </div>
      <el-form-item :class="$style.submit">
        <el-button
          :class="$style.submitBtn"
          type="primary"
          @click.prevent="submitForm"
          v-loading.fullscreen.lock="isLoading"
          >Sign in</el-button
        >
      </el-form-item>
    </el-form>
    <el-divider :class="$style.divider">Or continue with</el-divider>
    <div :class="$style.social">
      <div>
        <i aria-hidden="true" class="fa fa-facebook"></i>
      </div>
      <div>
        <i aria-hidden="true" class="fa fa-twitter"></i>
      </div>
      <div>
        <i aria-hidden="true" class="fa fa-google"></i>
      </div>
    </div>
    <el-divider v-if="isMobile" :class="$style.divider"
      >Don't have an account?</el-divider
    >
    <el-button
      v-if="isMobile"
      :class="$style.submitBtn"
      type="primary"
      @click.prevent="$emit('change')"
      >Create an account</el-button
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { LoginRequestDTO } from '~/model/auth/auth'
import { Mutations } from '~/store'

export default Vue.extend({
  data(): {
    form: { email: string; password: string }
    rememberMe: boolean
    isLoading: boolean
    rules: {
      email: Object[]
      password: Object[]
    }
  } {
    return {
      form: {
        email: '',
        password: ''
      },
      rememberMe: true,
      isLoading: false,
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
      if (!process.client) return
      const vm = this as any
      vm.$refs.form.validate(async (valid: boolean) => {
        if (valid) {
          this.isLoading = true
          try {
            const payload: LoginRequestDTO = {
              email: this.form.email,
              password: this.form.password
            }
            const { data } = await vm.$authService.signIn(payload)
            this.$notify.success({
              title: 'Login Successful',
              message: `Welcome user ${data.email}`
            })
            if (this.rememberMe) {
              localStorage.setItem('accessToken', data.accessToken)
              localStorage.setItem('refreshToken', data.refreshToken)
              localStorage.setItem('user', JSON.stringify(data))
            }
            //Set current user
            vm.$api.setToken(data.accessToken, 'Bearer')
            this.$store.commit(Mutations.TYPE.SET_CURRENT_USER, data)

            this.$router.back()
            this.isLoading = false
          } catch (error) {
            console.log(error)
            this.$notify.error({
              title: 'Error',
              message: 'Invalid email or password'
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
  .forgotPass {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      color: var(--color-primary);
    }
  }
  .submit {
    margin-top: var(--space);
  }
  .submitBtn {
    width: 100%;
    background: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }

  :global(.el-divider--horizontal) {
    margin: var(--space-2x5) 0;
  }

  :global(.el-divider__text) {
    color: var(--color-form-text);
    text-align: center;
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-form-text);
    > div {
      flex-basis: 30%;
      padding: var(--space-1o2) var(--space);
      text-align: center;
      border: 1px solid var(--color-bg-secondary);
      border-radius: 1rem;
      font-size: 1.6rem;
      cursor: pointer;
      transition: var(--transition-300);
      &:hover {
        color: var(--color-primary);
        border-color: var(--color-primary);
      }
    }
  }
}
</style>

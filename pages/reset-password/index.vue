<template>
  <div :class="[$style.root, 'container']">
    <div :class="$style.forgot">
      <div :class="$style.logo">
        <img src="~/assets/images/logo.png" width="80" />
      </div>
      <h1>Reset Your Password</h1>
      <el-form :model="form" ref="form" :class="$style.form">
        <el-form-item
          :class="$style.input"
          inline-message
          prop="password"
          :rules="[{ validator: validatePass, trigger: ['blur', 'change'] }]"
        >
          <el-input
            type="password"
            placeholder="New Password"
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <el-form-item
          :class="$style.input"
          inline-message
          prop="confirm"
          :rules="[{ validator: confirmPass, trigger: ['blur', 'change'] }]"
        >
          <el-input
            type="password"
            placeholder="Confirm Password"
            v-model="form.confirm"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="isLoading"
            :class="$style.btn"
            type="primary"
            @click.prevent="submitForm"
            >Reset Password</el-button
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
import { ResetPassRequestDTO } from '~/model/user/user'

export default Vue.extend({
  name: 'ResetPassword',
  data(): {
    form: { password: string; confirm: string }
    isLoading: boolean
  } {
    return {
      form: {
        password: '',
        confirm: ''
      },
      isLoading: false
    }
  },
  methods: {
    validatePass(rule, value, callback): void {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        if (this.form.confirm !== '') {
          ;(this as any).$refs.form.validateField('confirm')
        }
        callback()
      }
    },
    confirmPass(rule, value, callback): void {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.form.password) {
        callback(new Error("Two inputs don't match!"))
      } else {
        callback()
      }
    },
    submitForm(): void {
      const vm = this as any
      vm.$refs.form.validate(async (valid: boolean) => {
        if (valid) {
          try {
            this.isLoading = true
            const payload = {
              new_password: this.form.password,
              secret: this.$route.query.secret
            } as ResetPassRequestDTO
            await this.$userService.resetPass(payload)
            this.$notify.success({
              title: 'Reset Pass Success',
              message: `Your password has been reset`
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
  .form {
    margin: var(--space) auto;
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

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
          >Sign in</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { LoginRequestDTO } from '~/model/auth/auth'

export default Vue.extend({
  data(): {
    form: { email: string; name: string; password: string }
    rememberMe: boolean
    rules: {
      email: Object[]
      password: Object[]
      name: Object[]
    }
  } {
    return {
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
  methods: {
    submitForm() {
      const vm = this as any
      vm.$refs.form.validate((valid: boolean) => {
        if (valid) {
          try {
            const payload: LoginRequestDTO = {
              email: this.form.email,
              password: this.form.password
            }
            const data = vm.$authService.signIn(payload)
            console.log(data)
          } catch (error) {
            console.log(error)
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
}
</style>

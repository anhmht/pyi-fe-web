<template>
  <div :class="$style.root">
    <div class="container">
      <el-row>
        <el-col :md="12">
          <div :class="$style.newsLetter">
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter and get 20% off your first purchase
            </p>
          </div>
        </el-col>
        <el-col :md="12">
          <div :class="$style.subscribe">
            <el-form :model="form" ref="form" :class="$style.form">
              <el-form-item
                :class="$style.input"
                inline-message
                prop="name"
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
                <el-input
                  placeholder="Your Email"
                  v-model="form.email"
                  @keyup.enter.prevent="submitForm"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  :class="$style.btn"
                  type="primary"
                  @click.prevent="submitForm"
                  >Subscribe</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(): {
    form: { email: string }
  } {
    return {
      form: {
        email: ''
      }
    }
  },
  methods: {
    submitForm() {
      const vm = this as any
      vm.$refs.form.validate((valid: boolean) => {
        if (valid) {
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
  width: 100%;
  margin-top: 80px;
  background: var(--color-bg-secondary);
  .newsLetter {
    padding: var(--space-2x) 0;
    p {
      font-size: 1.4rem;
    }
  }
  .subscribe {
    padding: var(--space-2x) 0;
    padding-top: var(--space-2x5);
  }
  .form {
    display: flex;
    .input {
      flex: 1;
      input {
        border: none;
        border-radius: 0;
      }
    }
    .btn {
      background: var(--color-primary);
      border: none;
      border-radius: 0;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    .newsLetter {
      text-align: center;
    }
    .subscribe {
      margin: auto;
      padding-top: 0;
      width: 500px;
    }
  }
  @media only screen and (max-width: 575px) {
    .subscribe {
      width: 100%;
    }
  }
}
</style>

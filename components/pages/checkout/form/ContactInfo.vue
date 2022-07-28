<template>
  <div :class="$style.root">
    <h2>Contact information</h2>
    <el-form :rules="rules" :model="form" ref="form" label-position="top">
      <el-form-item label="Email address" prop="email">
        <el-input placeholder="Your email" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Phone number (optional)" prop="phone">
        <el-input
          placeholder="Your phone number"
          v-model="form.phone"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CheckoutForm } from '~/model/checkout/checkout'
import { EVENT_BUS } from '~/constant/event-bus'

export default Vue.extend({
  props: {
    value: {
      type: Object as () => CheckoutForm,
      required: true
    }
  },
  data() {
    return {
      form: this.value,
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
        ]
      }
    }
  },
  activated() {
    this.$nuxt.$on(EVENT_BUS.CHECK_OUT_NEXT, () => {
      this.submitForm()
    })
  },
  deactivated() {
    this.$nuxt.$off(EVENT_BUS.CHECK_OUT_NEXT)
  },
  methods: {
    submitForm() {
      ;(this as any).$refs.form.validate((valid: boolean) => {
        if (valid) {
          this.$emit('input', this.form)
          this.$emit('next')
        }
      })
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: var(--space);
  }
  :global(.el-form-item__label) {
    margin-bottom: var(--space-1o2);
  }
}
</style>

<template>
  <div :class="$style.root">
    <el-form :rules="rules" :model="form" ref="form">
      <el-form-item label="Email address" prop="email">
        <el-input placeholder="Your Email" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Order number" prop="order">
        <el-input
          placeholder="Your Order Number"
          v-model="form.order"
        ></el-input>
      </el-form-item>
      <el-form-item :class="$style.submit">
        <el-button
          :class="$style.submitBtn"
          type="primary"
          @click.prevent="submitForm"
          v-loading.fullscreen.lock="isLoading"
          >Track</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      form: {
        email: '',
        order: ''
      },
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
        order: [
          {
            required: true,
            message: 'Please input your order number',
            trigger: 'change'
          }
        ]
      },
      isLoading: false
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  margin-top: var(--space-2x);
  .submit {
    margin-top: var(--space-2x);
  }
  .submitBtn {
    width: 100%;
    background: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }
  :global(.el-form-item__label) {
    color: #fff;
  }
}
</style>

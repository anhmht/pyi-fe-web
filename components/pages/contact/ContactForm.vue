<template>
  <div :class="$style.root">
    <div>
      <img src="~/assets/images/logo.png" width="80" />
    </div>
    <h1>Send us a message</h1>
    <el-form label-position="top" :rules="rules" :model="form" ref="form">
      <el-form-item label="Full name" prop="name">
        <el-input placeholder="Your full name" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Email address" prop="email">
        <el-input placeholder="Your Email" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Subject" prop="subject">
        <el-input placeholder="Subject" v-model="form.subject"></el-input>
      </el-form-item>
      <el-form-item label="Message" prop="message">
        <el-input
          placeholder="Your message"
          v-model="form.message"
          type="textarea"
          maxlength="500"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item :class="$style.submit">
        <el-button
          :class="$style.submitBtn"
          type="primary"
          @click.prevent="submitForm"
          v-loading.fullscreen.lock="isLoading"
          >Send message</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(): {
    form: { email: string; name: string; subject: string; message: string }
    isLoading: boolean
    rules: {
      email: Object[]
      name: Object[]
      subject: Object[]
      message: Object[]
    }
  } {
    return {
      form: {
        email: '',
        name: '',
        subject: '',
        message: ''
      },
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
        name: [
          {
            required: true,
            message: 'Please input your name',
            trigger: 'change'
          }
        ],
        subject: [
          {
            required: true,
            message: 'Please input subject',
            trigger: 'change'
          }
        ],
        message: [
          {
            required: true,
            message: 'Please input your message',
            trigger: 'change'
          }
        ]
      }
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  padding: var(--space-2x) var(--space-3x);
  border: 1px var(--color-bg-secondary) solid;
  border-top-right-radius: var(--radius-5);
  border-bottom-right-radius: var(--radius-5);

  h1 {
    margin: var(--space) 0;
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

  @media only screen and (max-width: 991px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: var(--radius-5);
  }
}
</style>

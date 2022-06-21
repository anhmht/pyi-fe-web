<template>
  <div :class="$style.root">
    <div class="container">
      <el-row :gutter="24" :class="$style.row">
        <el-col :span="12" :class="$style.image">
          <img src="~/assets/images/contact.png" alt="contact" />
        </el-col>
        <el-col :span="12" :class="$style.content">
          <div v-scroll-animate>
            <h1>Get in touch</h1>
            <p>
              Donec rutrum congue leo eget malesuada. Proin eget tortor risus.
              Pellentesque in ipsum id orci porta dapibus. Praesent sapien
              massa, convallis a pellentesque nec, egestas non nisi. Mauris
              blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </p>
            <el-button :class="$style.submitBtn" type="primary"
              >Contact us</el-button
            >
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss" module>
.root {
  margin-top: var(--space-4x);
  padding: var(--space-3x);
  background: var(--color-bg-secondary);
  .row {
    display: flex;
  }
  .content {
    display: flex;
    align-items: center;
    p {
      font-size: 1.6rem;
      margin: var(--space) 0;
    }
  }
  .image {
    img {
      border-radius: var(--radius-5);
    }
  }
  .submitBtn {
    background: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }
  :global(.before-enter) {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 1s ease-out;
  }
  :global(.enter) {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>

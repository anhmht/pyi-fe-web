<template>
  <div :class="$style.root">
    <div class="container">
      <el-row :gutter="24" :class="$style.wrapper">
        <el-col :md="12" :class="$style.body">
          <div :class="$style.content">
            <h1>We built our business on great customer service</h1>
            <p>
              Donec rutrum congue leo eget malesuada. Proin eget tortor risus.
              Pellentesque in ipsum id orci porta dapibus. Praesent sapien
              massa, convallis a pellentesque nec, egestas non nisi. Mauris
              blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </p>
          </div>
        </el-col>
        <el-col :md="12">
          <div :class="$style.image">
            <img src="~/assets/images/incentive.png" />
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24" :class="$style.incentive">
        <el-col :md="8">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <h2>Fast shopping cart</h2>
          <p class="text-gray-500">
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla
            porttitor accumsan tincidunt.
          </p>
        </el-col>
        <el-col :md="8">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <h2>Customer support 24/7</h2>
          <p class="text-gray-500">
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla
            porttitor accumsan tincidunt.
          </p>
        </el-col>
        <el-col :md="8">
          <i class="fa fa-gift" aria-hidden="true"></i>
          <h2>Gift code</h2>
          <p class="text-gray-500">
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla
            porttitor accumsan tincidunt.
          </p>
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
  .wrapper {
    display: flex;
  }
  .body {
    display: flex;
    align-items: center;
  }
  .content {
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
  .incentive {
    margin-top: var(--space-2x);
    i {
      font-size: 6rem;
    }
    h2 {
      font-size: 1.6rem;
      font-weight: 500;
      margin: 8px 0;
    }
    p {
      font-size: 1.5rem;
    }
  }
}
</style>

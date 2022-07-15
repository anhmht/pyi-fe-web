<template>
  <div :class="$style.root">
    <div class="container">
      <el-row :gutter="24">
        <el-col :md="12" :class="$style.body">
          <div v-scroll-animate :class="$style.content">
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
            <img
              v-scroll-animate
              src="~/assets/images/incentive.png"
              alt="Our service"
            />
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24" :class="$style.incentive">
        <el-col
          :md="8"
          v-scroll-animate
          v-for="(item, index) in data"
          :key="index"
          :style="{ '--index': index }"
        >
          <i :class="item.icon" aria-hidden="true"></i>
          <h2>{{ item.title }}</h2>
          <p class="text-gray-500">
            {{ item.content }}
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Incentive {
  title: string
  icon: string
  content: string
}

export default Vue.extend({
  data(): {
    data: Incentive[]
  } {
    return {
      data: [
        {
          title: 'Fast shopping cart',
          icon: 'fa fa-shopping-cart',
          content: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla
            porttitor accumsan tincidunt.`
        },
        {
          title: 'Customer support 24/7',
          icon: 'fa fa-phone',
          content: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla
            porttitor accumsan tincidunt.`
        },
        {
          title: 'Gift code',
          icon: 'fa fa-gift',
          content: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla
            porttitor accumsan tincidunt.`
        }
      ]
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  margin-top: var(--space-4x);
  padding: var(--space-3x);
  background: var(--color-bg-secondary);
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
      margin: var(--space-1o2) 0;
    }
    p {
      font-size: 1.5rem;
    }
  }
  :global(.before-enter) {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s ease-out;
  }
  :global(.enter) {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: calc(100ms * var(--index));
  }
}
</style>

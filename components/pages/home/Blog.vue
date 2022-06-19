<template>
  <div :class="$style.root">
    <div class="container">
      <h1 v-scroll-animate>Recent Publications</h1>
      <p class="text-gray-500">
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt.
      </p>
      <div :class="$style.blogs">
        <el-row :gutter="24">
          <el-col :md="8" v-for="item in data" :key="item.id">
            <div :class="$style.blog">
              <img src="~/assets/images/incentive.png" />
              <div :class="$style.category">{{ item.category }}</div>
              <h2>{{ item.title }}</h2>
              <p class="text-gray-500">
                {{ item.desc }}
              </p>
              <nuxt-link :class="$style.link" :to="`/blog/${item.slug}`">
                Read more
              </nuxt-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Blog } from '~/model/home/blogs'
import { blogs } from '~/mock/data/Blog'

export default Vue.extend({
  data(): {
    data: Blog[]
  } {
    return {
      data: blogs
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  margin-top: var(--space-4x);
  .blogs {
    margin-top: var(--space-2x5);
  }
  p {
    font-size: 1.4rem;
  }
  .blog {
    img {
      border-radius: var(--radius-5);
    }
    .category {
      margin: var(--space-1o2) 0;
      color: var(--color-primary);
      font-size: 1.2rem;
      font-weight: 500;
    }
    h2 {
      font-size: 1.8rem;
      font-weight: 600;
    }
    p {
      margin-top: var(--space-1o2);
    }
  }
  .link {
    color: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>

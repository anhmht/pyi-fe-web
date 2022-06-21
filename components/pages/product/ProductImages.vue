<template>
  <div :class="$style.root">
    <el-carousel
      height="600px"
      ref="carousel"
      :interval="5000"
      indicator-position="none"
      @change="setActive"
    >
      <el-carousel-item v-for="(item, index) in images" :key="index">
        <img :class="$style.mainImage" :src="item.src" :alt="item.alt" />
      </el-carousel-item>
    </el-carousel>

    <div :class="$style.images">
      <div
        v-for="(item, index) in images"
        :key="index"
        :class="[$style.image, active === index && $style.active]"
        @click="handleSelected(item, index)"
      >
        <img :src="item.src" :alt="item.alt" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Image } from '~/model/product/product'

export default Vue.extend({
  props: {
    images: {
      type: Array as () => Image[],
      required: true
    }
  },
  data(): {
    active: number
    selected: Image
  } {
    return {
      active: 0,
      selected: this.images[0]
    }
  },
  methods: {
    handleSelected(item: Image, index: number) {
      this.active = index
      this.selected = item
      ;(this as any).$refs.carousel.setActiveItem(index)
    },
    setActive(index) {
      this.active = index
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  .mainImage {
    height: 600px;
    object-fit: cover;
    object-position: center;
    width: 100%;
    border-radius: var(--radius-5);
  }
  .images {
    display: flex;
    margin-top: 32px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      object-position: center;
      border-radius: var(--radius-5);
    }
    .image {
      padding: 2px;
      border: 3px solid white;
      border-radius: var(--radius-5);
      cursor: pointer;
      margin-bottom: var(--space);
      &.active {
        border: 3px solid var(--color-primary);
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>

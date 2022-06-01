<template>
  <div :class="$style.root">
    <div class="container">
      <el-row :gutter="40">
        <el-col :md="12" :lg="12" :xl="12">
          <div v-scroll-animate :class="[$style.image, $style.accessories]">
            <div :class="$style.modal">
              <div :class="$style.category">
                <h4>Accessories</h4>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :md="12" :lg="12" :xl="12">
          <div v-scroll-animate :class="[$style.image, $style.men]">
            <div :class="$style.modal">
              <div :class="$style.category">
                <h4>Men</h4>
              </div>
            </div>
          </div>
          <div v-scroll-animate :class="[$style.image, $style.women]">
            <div :class="$style.modal">
              <div :class="$style.category">
                <h4>Women</h4>
              </div>
            </div>
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
  .image {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: var(--radius-5);
  }
  .accessories {
    background-image: url(~/assets/images/category_2.jpg);
    height: 500px;
  }
  .men {
    background-image: url(~/assets/images/category_3.jpg);
    height: 230px;
  }
  .women {
    background-image: url(~/assets/images/category_1.jpg);
    height: 230px;
    margin-top: var(--space-2x5);
  }
  .modal {
    background: #000;
    opacity: 0.3;
    position: relative;
    height: 100%;
    transition: var(--transition-300);
    cursor: pointer;
    border-radius: var(--radius-5);
    &:hover {
      background: transparent;
      opacity: 1;
      h4 {
        color: var(--color-primary-text);
      }
    }
  }
  .category {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: var(--space);
    h4 {
      color: #fff;
    }
  }
  @media only screen and (max-width: 991px) {
    .men,
    .women,
    .accessories {
      height: 300px;
    }
    .men {
      margin-top: var(--space-2x5);
    }
  }
  :global(.before-enter) {
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.5s ease-out;
  }
  :global(.enter) {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>

<template>
  <div :class="$style.root">
    <div class="container">
      <div :class="$style.promo">
        <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div
            class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static"
          >
            <div v-scroll-animate class="sm:max-w-lg">
              <h1
                class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl"
              >
                Summer styles are finally here
              </h1>
              <p class="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn't care if you live or die.
              </p>
            </div>
            <div>
              <div class="mt-10">
                <!-- Decorative image grid -->
                <div
                  aria-hidden="true"
                  class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div
                    class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
                  >
                    <div class="flex items-center space-x-6 lg:space-x-8">
                      <div
                        class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8"
                      >
                        <div
                          class="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100"
                        >
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8"
                      >
                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div
                        class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8"
                      >
                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <el-button
                  v-scroll-animate
                  :class="$style.submitBtn"
                  type="primary"
                  >Shop collection</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
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
  .promo {
    position: relative;
    overflow: hidden;
  }
  .submitBtn {
    background: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }
  p {
    font-size: 1.4rem;
  }
  :global(.max-w-7xl) {
    max-width: 100rem;
  }
  :global(.w-44) {
    width: 18rem;
  }
  :global(.h-64) {
    height: 20rem;
  }
  :global(.lg\:pb-48) {
    @media only screen and (min-width: 767px) {
      padding-bottom: 16rem;
    }
  }
  :global(.lg\:pt-40) {
    @media only screen and (min-width: 767px) {
      padding-top: 16rem;
    }
  }
  :global(.before-enter) {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s ease-out;
  }
  :global(.enter) {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>

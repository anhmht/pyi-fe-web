<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Best Seller</h1>
      <div :class="$style.carousel">
        <div ref="swiperContainer" class="swiper-container">
          <div class="swiper-wrapper">
            <ProductItem
              v-for="product in products"
              :key="product.id"
              :data="product"
              :class="[$style.product, 'swiper-slide']"
            />
          </div>
        </div>
        <div v-if="!isMobile" :class="$style.btnWrapper">
          <div
            :class="[$style.btn, $style.prev, 'carousel__button--prev']"
          ></div>
          <div
            :class="[$style.btn, $style.next, 'carousel__button--next']"
          ></div>
        </div>

        <div :class="[$style.pagination, 'carousel__pagination']"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper, { SwiperOptions, Autoplay, Navigation, Pagination } from 'swiper'
import { products } from '~/mock/data/Product'
import ProductItem from '~/components/common/ProductItem.vue'
import { Product } from '~/model/product/product'

// configure Swiper to use modules
Swiper.use([Autoplay, Navigation, Pagination])

export default Vue.extend({
  components: { ProductItem },
  data(): {
    products: Product[]
    swiper?: Swiper
    isSwiperReady: boolean
  } {
    return {
      products: products,
      swiper: undefined,
      isSwiperReady: false
    }
  },

  computed: {
    isMobile(): boolean {
      return this.$mq === 'mobile'
    }
  },

  mounted() {
    const swiperOptions: SwiperOptions = {
      slidesPerView: this.isMobile ? 1 : 4,
      slidesPerGroup: 1,
      spaceBetween: 20,
      loop: true,
      loopFillGroupWithBlank: true,
      speed: 500,
      roundLengths: true,
      autoHeight: true,
      on: {
        init: () => {
          this.isSwiperReady = true
        }
      },

      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },

      lazy: {
        loadPrevNext: true
      },

      navigation: {
        prevEl: '.carousel__button--prev',
        nextEl: '.carousel__button--next'
      },

      pagination: {
        el: '.carousel__pagination',
        bulletClass: 'carousel__paginationBullet',
        bulletActiveClass: 'carousel__paginationBullet--active',
        clickable: true
      }
    }

    this.$nextTick(
      () =>
        (this.swiper = new Swiper(
          this.$refs.swiperContainer as HTMLElement,
          swiperOptions
        ))
    )
  }
})
</script>

<style lang="postcss" module>
.root {
  padding-top: var(--space-4x);
  .carousel {
    margin-top: var(--space-2x5);
    position: relative;
  }

  .product {
    transition-delay: 1s;
  }

  .btnWrapper {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
  }

  .btn {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: #fff;
    background-image: url('~assets/images/icon-arrow.svg');
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    opacity: 0.8;
    border-radius: 50%;
    transition: opacity 0.3s;
    outline: none;
    cursor: pointer;
    box-shadow: 1px 1px 6px #00000029;

    &:hover {
      opacity: 1;
    }
  }

  .prev {
    left: -20px;
    transform: rotate(180deg);
  }

  .next {
    right: -20px;
  }

  .pagination {
    margin-top: var(--space-1x5);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
  }

  :global(.carousel) {
    &__paginationBullet {
      width: 8px;
      height: 8px;
      margin: 6px;
      background-color: var(--color-bg-secondary);
      transition: opacity 0.3s;
      opacity: 1;
      outline-style: none;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }

      &--active {
        background-color: var(--color-primary);
      }
    }
  }
}
</style>

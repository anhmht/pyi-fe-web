<template>
  <div :class="$style.root">
    <div :class="$style.image">
      <img
        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        alt="Product"
      />
    </div>
    <div :class="$style.content">
      <div :class="$style.info">
        <h3>
          <nuxt-link :to="`/product${cart.product.path}`">
            {{ cart.product.name }}
          </nuxt-link>
        </h3>
        <div :class="$style.colorSize">{{ getColor }} | {{ getSize }}</div>
        <div :class="$style.quantity">
          <span>quantity: {{ cart.quantity }}</span>
          <span>price: {{ $formatCurrency(cart.product.price) }}</span>
        </div>
      </div>
      <div :class="$style.price">
        {{ total }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Cart } from '~/model/cart/cart'

export default Vue.extend({
  props: {
    cart: {
      type: Object as () => Cart,
      required: true
    }
  },
  computed: {
    total(): string {
      return this.$formatCurrency(this.cart.quantity * this.cart.product.price)
    },
    getColor(): string | undefined {
      const color = this.cart.product.colors?.find(
        (color) => color.id === this.cart.colorId
      )
      return color?.name
    },
    getSize(): string | undefined {
      const size = this.cart.product.sizes?.find(
        (size) => size.id === this.cart.sizeId
      )
      return size?.name
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  display: flex;
  padding: var(--space-2x) 0;
  .image {
    img {
      object-position: center;
      object-fit: cover;
      height: 100px;
      min-width: 100px;
    }
  }
  .content {
    font-size: 1.4rem;
    padding-left: var(--space);
    display: flex;
    width: 100%;
  }
  .info {
    margin-right: var(--space);
    width: 100%;
  }
  .colorSize {
    margin-top: var(--space-1o2);
    color: var(--color-secondary-text);
  }
  .price {
    font-size: 1.4rem;
    font-weight: 600;
  }
  .quantity {
    margin-top: var(--space-1o2);
    span + span {
      margin-left: var(--space);
    }
  }

  @media only screen and (max-width: 768px) {
    .content {
      flex-wrap: wrap;
    }
    .price {
      margin-top: var(--space-1o2);
    }
    h3 {
      max-width: 250px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  @media only screen and (max-width: 539px) {
    .image {
      img {
        height: 100px;
        min-width: 60px;
      }
    }
    h3 {
      max-width: 150px;
    }
  }
}
</style>

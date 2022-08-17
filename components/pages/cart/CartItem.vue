<template>
  <div :class="[$style.root, !selected && $style.disabled]">
    <div :class="$style.checkbox">
      <el-checkbox v-model="selected" @change="handleChange"></el-checkbox>
    </div>
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
        <div :class="$style.price">
          {{ $formatCurrency(price) }} (Total: {{ $formatCurrency(total) }})
        </div>
      </div>
      <div :class="$style.quantity">
        <el-input-number
          size="mini"
          v-model="quantityItem"
          :min="1"
          :max="10"
          @change="changeQuantity"
        ></el-input-number>
      </div>
    </div>
    <div :class="$style.action">
      <i @click="handleRemove" aria-hidden="true" class="fa fa-times"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { cloneDeep } from 'lodash'
import Vue from 'vue'
import { Cart } from '~/model/cart/cart'
import { Mutations } from '~/store'
import cartMixin from '~/mixins/cart'

export default Vue.extend({
  props: {
    cart: {
      type: Object as () => Cart,
      required: true
    }
  },
  mixins: [cartMixin],
  data(): {
    selected: boolean
    quantityItem: number
    cartItem: Cart
  } {
    return {
      selected: Boolean(this.cart.isSelected),
      quantityItem: cloneDeep(this.cart.quantity),
      cartItem: cloneDeep(this.cart)
    }
  },
  methods: {
    handleChange(item: boolean) {
      this.cartItem.isSelected = item
      this.$store.commit(Mutations.TYPE.UPDATE_CART, this.cartItem)
    },
    changeQuantity(item: number) {
      this.cartItem.quantity = item
      this.$store.commit(Mutations.TYPE.UPDATE_CART, this.cartItem)
    },
    handleRemove() {
      this.$store.commit(Mutations.TYPE.REMOVE_FROM_CART, this.cartItem)
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  display: flex;
  padding: var(--space-2x) 0;
  border-top: 1px solid var(--color-bg-secondary);
  &.disabled {
    opacity: 0.5;
  }
  .checkbox {
    padding: var(--space);
  }
  .image {
    img {
      object-position: center;
      object-fit: cover;
      height: 180px;
      min-width: 150px;
    }
  }
  .content {
    font-size: 1.4rem;
    padding: 0 var(--space);
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
    margin-top: var(--space-1o2);
    font-size: 1.4rem;
    font-weight: 600;
  }
  .quantity {
    :global(.el-input-number--mini) {
      width: 90px;
    }
  }
  .action {
    font-size: 1.8rem;
    padding-left: var(--space);

    color: var(--color-secondary-text);
    i {
      cursor: pointer;
      &:hover {
        color: var(--color-primary-text);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .content {
      flex-wrap: wrap;
    }
    .quantity {
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

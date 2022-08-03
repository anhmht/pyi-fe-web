<template>
  <div :class="$style.root">
    <h2>Order Summary</h2>
    <div :class="$style.summary">
      <div :class="$style.item">
        <label>SubTotal</label>
        <span>{{ $formatCurrency(subTotal) }}</span>
      </div>
      <div :class="$style.item">
        <label>Tax estimate</label>
        <span>{{ $formatCurrency(tax) }}</span>
      </div>
      <div :class="$style.item">
        <label>Shipping estimate</label>
        <span>{{ $formatCurrency(shippingFee) }}</span>
      </div>
      <div :class="$style.item">
        <h2>Order total</h2>
        <span :class="$style.total">{{ $formatCurrency(orderTotal) }}</span>
      </div>
    </div>
    <el-button
      :disabled="carts.length === 0"
      @click="checkout"
      :class="[$style.btn, carts.length === 0 && $style.disabled]"
      type="primary"
      >Checkout</el-button
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Cart } from '~/model/cart/cart'
import { RootState } from '~/store/state'

export default Vue.extend({
  computed: {
    carts(): Cart[] {
      return (this.$store.state as RootState).shoppingCart.filter(
        (item: Cart) => item.isSelected
      )
    },
    subTotal(): number {
      return this.carts.reduce((acc, item) => {
        return acc + item.quantity * item.product.price
      }, 0)
    },
    tax(): number {
      return this.subTotal * 0.1
    },
    orderTotal(): number {
      return this.subTotal + this.tax + this.shippingFee
    },
    shippingFee(): number {
      return this.carts.length ? 5 : 0
    }
  },
  methods: {
    checkout() {
      this.$router.push('/checkout')
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  margin-top: var(--space-2x);
  background: var(--color-bg-secondary-2);
  padding: var(--space-2x);
  font-size: 1.4rem;
  border-radius: var(--radius-5);
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
  .summary {
    margin-top: var(--space);
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space) 0;
    span {
      text-align: right;
      font-weight: 600;
    }
  }
  .item + .item {
    border-top: 1px solid var(--color-bg-secondary);
  }
  .total {
    font-size: 1.8rem;
  }
  .btn {
    width: 100%;
    background: var(--color-primary);
    padding: var(--space);

    &:hover {
      opacity: 0.7;
    }

    &.disabled {
      background-color: #ffe380;
      border-color: #ffe380;
      &:hover {
        opacity: 1;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    .btn {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 60px;
      left: 0;
      z-index: 100;
    }
  }
}
</style>

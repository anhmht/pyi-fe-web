<template>
  <el-row :gutter="24" v-if="address" :class="$style.root">
    <el-col :md="8" v-if="isDisplayShippingInfo" :class="$style.shipping">
      <h4>Shipping Info</h4>
      <div :class="$style.item" v-if="address.firstName || address.lastName">
        {{ address.firstName }} {{ address.lastName }}
      </div>
      <div :class="$style.item" v-if="address.address || address.apt">
        {{ address.address }} {{ address.apt }}
      </div>
      <div :class="$style.item" v-if="address.state || address.country">
        {{ $displayState(address.state, address.country) }},
        {{ $displayCountry(address.country) }}
      </div>
      <div :class="$style.item" v-if="address.city || address.zip">
        {{ address.city }}, {{ address.zip }}
      </div>
    </el-col>
    <el-col :md="8" v-if="isDisplayContactInfo" :class="$style.contact">
      <h4>Contact Info</h4>
      <div :class="$style.item" v-if="address.email">
        <label>Email:</label>
        <span>{{ address.email }}</span>
      </div>
      <div :class="$style.item" v-if="address.phone">
        <label>Phone:</label>
        <span>{{ address.phone }}</span>
      </div>
    </el-col>
    <el-col :md="12" v-if="isDisplayDeliveryMethod" :class="$style.delivery">
      <h4>Delivery Method</h4>
      <div :class="$style.item">{{ address.deliveryMethod.name }}</div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { STEP } from '~/mock/data/Checkout'
import { CheckoutAddress } from '~/model/checkout/checkout'

export default Vue.extend({
  props: {
    address: {
      type: Object as () => CheckoutAddress,
      default: undefined
    },
    activeStep: {
      type: Number,
      default: STEP.PAYMENT
    }
  },
  computed: {
    isDisplayContactInfo(): boolean {
      return this.activeStep > STEP.CONTACT_INFO
    },
    isDisplayShippingInfo(): boolean {
      return this.activeStep > STEP.SHIPPING_INFO
    },
    isDisplayDeliveryMethod(): boolean {
      return this.activeStep > STEP.DELIVERY_METHOD
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  font-size: 1.4rem;
  h4 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottm: var(--space-1o2);
  }
  .delivery {
    margin-top: var(--space);
  }
  .shipping {
    margin-bottom: var(--space);
  }
}
</style>

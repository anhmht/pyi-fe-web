<template>
  <div :class="$style.root">
    <transition :name="slide" mode="out-in">
      <keep-alive>
        <component
          :is="name"
          v-model="form"
          @next="handleNextStep"
          @prev="handlePrevStep"
        ></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script lang="ts">
const STEP = {
  CONTACT_INFO: 0,
  SHIPPING_INFO: 1,
  DELIVERY_METHOD: 2,
  PAYMENT: 3,
  ORDER_CONFIRMATION: 4
}
import Vue from 'vue'

import { CheckoutForm } from '~/model/checkout/checkout'
import ContactInfo from '~/components/pages/checkout/form/ContactInfo.vue'
import ShippingInfo from '~/components/pages/checkout/form/ShippingInfo.vue'
import DeliveryMethod from '~/components/pages/checkout/form/DeliveryMethod.vue'
import Payment from '~/components/pages/checkout/form/Payment.vue'
import { EVENT_BUS } from '~/constant/event-bus'

export default Vue.extend({
  components: {
    'contact-info': ContactInfo,
    'shipping-info': ShippingInfo,
    'delivery-method': DeliveryMethod,
    payment: Payment
  },
  data(): {
    form: CheckoutForm
    isLoading: Boolean
    activeStep: number
    slide: string
  } {
    return {
      form: {
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        apt: '',
        country: 'US',
        city: '',
        state: '',
        zip: '',
        phone: ''
      },
      isLoading: false,
      activeStep: 0,
      slide: 'slide-right'
    }
  },
  computed: {
    name(): string {
      switch (this.activeStep) {
        case STEP.CONTACT_INFO:
          return 'contact-info'
        case STEP.SHIPPING_INFO:
          return 'shipping-info'
        case STEP.DELIVERY_METHOD:
          return 'delivery-method'
        case STEP.PAYMENT:
          return 'payment'
        case STEP.ORDER_CONFIRMATION:
          return 'order-confirmation'
        default:
          return ''
      }
    }
  },
  methods: {
    handleNextStep(): void {
      this.activeStep++
    },
    handlePrevStep(): void {
      this.activeStep--
    }
  },
  mounted() {
    this.$nuxt.$on(EVENT_BUS.CHECKOUT_SLIDE_RIGHT, () => {
      this.slide = 'slide-right'
    })
    this.$nuxt.$on(EVENT_BUS.CHECKOUT_SLIDE_LEFT, () => {
      this.slide = 'slide-left'
    })
  },
  beforeDestroy() {
    this.$nuxt.$off(EVENT_BUS.CHECKOUT_SLIDE_RIGHT)
    this.$nuxt.$off(EVENT_BUS.CHECKOUT_SLIDE_LEFT)
  }
})
</script>
<style lang="postcss" module>
.root {
  margin-top: var(--space-1x5);
}
</style>

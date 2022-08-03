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
import Vue from 'vue'
import { CheckoutForm } from '~/model/checkout/checkout'
import ContactInfo from '~/components/pages/checkout/form/ContactInfo.vue'
import ShippingInfo from '~/components/pages/checkout/form/ShippingInfo.vue'
import DeliveryMethod from '~/components/pages/checkout/form/DeliveryMethod.vue'
import Payment from '~/components/pages/checkout/form/paypal/PayPalPayment.vue'
import { EVENT_BUS } from '~/constant/event-bus'
import { STEP } from '~/pages/checkout/index.vue'

export default Vue.extend({
  components: {
    'contact-info': ContactInfo,
    'shipping-info': ShippingInfo,
    'delivery-method': DeliveryMethod,
    payment: Payment
  },
  name: 'CheckoutFormComponent',
  props: {
    activeStep: {
      type: Number,
      required: true
    }
  },
  data(): {
    form: CheckoutForm
    isLoading: Boolean
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
        phone: '',
        deliveryMethod: {
          id: 0,
          name: ''
        },
        payment: {
          id: '',
          name: '',
          cardNumber: '',
          expiry: '',
          cvc: ''
        }
      },
      isLoading: false,
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
        default:
          return 'el-skeleton'
      }
    }
  },
  methods: {
    handleNextStep(): void {
      this.$emit('update:activeStep', this.activeStep + 1)
    },
    handlePrevStep(): void {
      this.$emit('update:activeStep', this.activeStep - 1)
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
  z-index: 0;
}
</style>

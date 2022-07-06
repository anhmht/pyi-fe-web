<template>
  <div :class="$style.root">
    <div class="container">
      <el-row :gutter="32">
        <el-col :md="8">
          <h1>Frequently Asked Questions</h1>
          <div :class="$style.desc">
            <p>
              Can't find the answer you're looking for? Reach out to our
              <nuxt-link :class="$style.link" to="/contact">
                Customer support
              </nuxt-link>
              team
            </p>
          </div>
          <div :class="$style.group">
            <nuxt-link :class="$style.useful" to="/tracking">
              Track order
            </nuxt-link>
            <nuxt-link :class="$style.useful" to="/shipping-policy">
              Shipping policy
            </nuxt-link>
            <nuxt-link :class="$style.useful" to="/return-policy">
              Return/Refund policy
            </nuxt-link>
            <nuxt-link :class="$style.useful" to="/contact">
              Contact support
            </nuxt-link>
          </div>
        </el-col>
        <el-col :md="16" :class="$style.main">
          <div :class="$style.question">
            <h2>Questions before you place your order</h2>
            <el-collapse v-model="beforePlaceOrder">
              <el-collapse-item
                v-for="(item, index) in beforePLaceOrderFAQ"
                :key="index"
                :title="item.question"
                :name="index"
              >
                <div v-html="item.answer"></div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div :class="$style.question">
            <h2>Questions about order status and delivery</h2>
            <el-collapse v-model="delivery">
              <el-collapse-item
                v-for="(item, index) in deliveryFAQ"
                :key="index"
                :title="item.question"
                :name="index"
              >
                <div v-html="item.answer"></div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div :class="$style.question">
            <h2>Modifying or changing an order</h2>
            <el-collapse v-model="modifyOrder">
              <el-collapse-item
                v-for="(item, index) in modifyOrderFAQ"
                :key="index"
                :title="item.question"
                :name="index"
              >
                <div v-html="item.answer"></div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div :class="$style.question">
            <h2>Payment</h2>
            <el-collapse v-model="payment">
              <el-collapse-item
                v-for="(item, index) in paymentFAQ"
                :key="index"
                :title="item.question"
                :name="index"
              >
                <div v-html="item.answer"></div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FAQ } from '~/model/faq/faq'
import faq from '~/mock/data/FAQ'

export default Vue.extend({
  name: 'FAQPage',
  data(): {
    beforePlaceOrder: number[]
    beforePLaceOrderFAQ: FAQ[]
    delivery: number[]
    deliveryFAQ: FAQ[]
    modifyOrder: number[]
    modifyOrderFAQ: FAQ[]
    payment: number[]
    paymentFAQ: FAQ[]
  } {
    return {
      beforePlaceOrder: [],
      beforePLaceOrderFAQ: faq.beforePlaceOrderFAQ,
      delivery: [],
      deliveryFAQ: faq.orderStatusDeliveryFAQ,
      modifyOrder: [],
      modifyOrderFAQ: faq.modifyOrderFAQ,
      payment: [],
      paymentFAQ: faq.paymentFAQ
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  font-size: 1.4rem;
  margin-top: var(--space-4x);
  .desc {
    padding: var(--space) 0;
  }
  .link {
    color: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }
  .group {
    display: flex;
    flex-wrap: wrap;
  }
  .useful {
    color: var(--color-primary-text);
    margin-right: var(--space);
    &:hover {
      color: var(--color-primary);
    }
  }
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: var(--space);
  }
  a {
    color: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }
  .question + .question {
    margin-top: var(--space-2x);
  }

  @media only screen and (max-width: 991px) {
    .main {
      margin-top: var(--space-2x);
    }
  }
}
</style>

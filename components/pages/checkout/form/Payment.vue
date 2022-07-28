<template>
  <div :class="$style.root">
    <h2>Payment</h2>
    <div :class="$style.payment">
      <div :class="$style.title">
        <h4>Card</h4>
        <div :class="$style.provider">
          <img src="~/assets/images/visa.svg" width="45" alt="visa-card" />
          <img src="~/assets/images/master.svg" width="45" alt="master-card" />
          <img
            src="~/assets/images/american_express.svg"
            width="45"
            alt="american-express-card"
          />
          <img
            src="~/assets/images/discover.svg"
            width="45"
            alt="discover-card"
          />
        </div>
      </div>
      <div :class="$style.content">
        <el-form :rules="rules" :model="form" ref="form" label-position="top">
          <el-form-item label="Card number" prop="cardNumber">
            <el-input
              placeholder="xxxx xxxx xxxx xxxx"
              v-model="form.cardNumber"
              :maxlength="19"
            >
              <i slot="prefix" class="fa fa-credit-card" aria-hidden="true"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="Name on card" prop="name">
            <el-input placeholder="Name" v-model="form.name"></el-input>
          </el-form-item>
          <div :class="$style.flex">
            <el-form-item
              :class="$style.expiry"
              label="Expiry date"
              prop="expiry"
            >
              <el-input placeholder="MM/YY" v-model="form.expiry"></el-input>
            </el-form-item>
            <el-form-item label="CVC" prop="cvc">
              <el-input placeholder="CVC" v-model="form.cvc"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EVENT_BUS } from '~/constant/event-bus'
import { Payment } from '~/model/checkout/checkout'

export default Vue.extend({
  props: {
    value: {
      type: Object as () => Payment,
      default: undefined
    }
  },
  data() {
    return {
      form: this.value,
      rules: {
        name: [
          {
            required: true,
            message: 'Please input card name',
            trigger: 'change'
          }
        ],
        cardNumber: [
          {
            required: true,
            message: 'Please input card number',
            trigger: 'change'
          }
        ],
        expiry: [
          {
            required: true,
            message: 'Please input expiry date',
            trigger: 'change'
          }
        ],
        cvc: [
          {
            required: true,
            message: 'Please input cvv',
            trigger: 'change'
          }
        ]
      }
    }
  },

  activated() {
    this.$nuxt.$on(EVENT_BUS.CHECK_OUT_NEXT, () => {
      ;(this as any).$refs.form.validate((valid: boolean) => {
        if (valid) {
          this.$emit('input', this.form)
          this.$emit('next')
        }
      })
    })
    this.$nuxt.$on(EVENT_BUS.CHECK_OUT_PREV, () => {
      this.$emit('prev')
    })
  },
  deactivated() {
    this.$nuxt.$off(EVENT_BUS.CHECK_OUT_NEXT)
    this.$nuxt.$off(EVENT_BUS.CHECK_OUT_PREV)
  }
})
</script>
<style lang="postcss" module>
.root {
  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: var(--space);
  }
  h4 {
    font-size: 1.6rem;
    font-weight: 500;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .provider {
    display: flex;
    img + img {
      margin-left: var(--space-1o2);
    }
  }
  .content {
    margin-top: var(--space);
  }
  .flex {
    display: flex;
  }
  .expiry {
    flex: 1;
    margin-right: var(--space-1x5);
  }
  :global(.el-input__prefix) {
    margin-right: 10px;
  }
}
</style>

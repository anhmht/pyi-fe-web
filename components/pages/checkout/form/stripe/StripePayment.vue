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
        <el-form
          :rules="rules"
          :model="form.payment"
          ref="form"
          label-position="top"
        >
          <el-form-item label="Card number" prop="cardNumber">
            <el-input
              placeholder="xxxx xxxx xxxx xxxx"
              v-model="cardNumber"
              :maxlength="19"
            >
              <i slot="prefix" class="fa fa-credit-card" aria-hidden="true"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="Name on card" prop="name">
            <el-input placeholder="Name" v-model="form.payment.name"></el-input>
          </el-form-item>
          <div :class="$style.flex">
            <el-form-item
              :class="$style.expiry"
              label="Expiry date"
              prop="expiry"
            >
              <el-input
                placeholder="MM/YY"
                v-model="expiry"
                :maxlength="5"
              ></el-input>
            </el-form-item>
            <el-form-item label="CVC" prop="cvc">
              <el-input
                placeholder="CVC"
                type="password"
                v-model="form.payment.cvc"
              ></el-input>
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
import { CheckoutForm, Payment } from '~/model/checkout/checkout'

export default Vue.extend({
  props: {
    value: {
      type: Object as () => CheckoutForm,
      required: true
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
            message: 'Please input cvc',
            trigger: 'change'
          }
        ]
      },
      cardTypes: [
        {
          mask: '0000 000000 00000',
          regex: new RegExp(/^3[47]\d{13,14}$/g),
          cardtype: 'american express'
        },
        {
          mask: '0000 0000 0000 0000',
          regex: new RegExp(
            /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/g
          ),
          cardtype: 'discover'
        },
        {
          mask: '0000 000000 0000',
          regex: new RegExp(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/g),
          cardtype: 'diners'
        },
        {
          mask: '0000 0000 0000 0000',
          regex: new RegExp(
            /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/g
          ),
          cardtype: 'mastercard'
        },
        // {
        //     mask: '0000-0000-0000-0000',
        //     regex: '^(5019|4175|4571)\\d{0,12}',
        //     cardtype: 'dankort'
        // },
        // {
        //     mask: '0000-0000-0000-0000',
        //     regex: '^63[7-9]\\d{0,13}',
        //     cardtype: 'instapayment'
        // },
        // {
        //   mask: '0000 000000 00000',
        //   regex: /^(?:2131|1800)\\d{0,11}/g,
        //   cardtype: 'jcb15'
        // },
        {
          mask: '0000 0000 0000 0000',
          regex: new RegExp(/^(?:2131|1800|35\d{3})\d{11}$/g),
          cardtype: 'jcb'
        },
        {
          mask: '0000 0000 0000 0000',
          regex: new RegExp(
            /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/g
          ),
          cardtype: 'maestro'
        },
        // {
        //     mask: '0000-0000-0000-0000',
        //     regex: '^220[0-4]\\d{0,12}',
        //     cardtype: 'mir'
        // },
        {
          mask: '0000 0000 0000 0000',
          regex: new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/g),
          cardtype: 'visa'
        },
        {
          mask: '0000 0000 0000 0000',
          regex: new RegExp(/^(62[0-9]{14,17})$/g),
          cardtype: 'unionpay'
        },
        {
          mask: '0000 0000 0000 0000',
          regex: new RegExp(/\d/g),
          cardtype: 'Unknown'
        }
      ]
    }
  },
  computed: {
    cardNumber: {
      get(): string {
        const card = this.cardType(this.form.payment.cardNumber)

        switch (card.cardtype) {
          case 'american express':
          case 'diners':
            return this.form.payment.cardNumber
              .replace(/\b(\d{4})/, '$1 ')
              .replace(/ (\d{6})/, ' $1 ')
          default:
            return this.form.payment.cardNumber
              .replace(/[^0-9]/g, '')
              .replace(/\W/gi, '')
              .replace(/(\d{4})(?=\d)/g, '$1 ')
        }
      },
      set(value: string) {
        this.form.payment.cardNumber = value.trim()
      }
    },
    expiry: {
      get(): string {
        return this.form.payment.expiry
          .replace(
            /^([1-9]\/|[2-9])$/g,
            '0$1/' // 3 > 03/
          )
          .replace(
            /^(0[1-9]|1[0-2])$/g,
            '$1/' // 11 > 11/
          )
          .replace(
            /^([0-1])([3-9])$/g,
            '0$1/$2' // 13 > 01/3
          )
          .replace(
            /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
            '$1/$2' // 141 > 01/41
          )
          .replace(
            /^([0]+)\/|[0]+$/g,
            '0' // 0/ > 0 and 00 > 0
          )
          .replace(
            /[^\d\/]|^[\/]*$/g,
            '' // To allow only digits and `/`
          )
          .replace(
            /\/\//g,
            '/' // Prevent entering more than 1 `/`
          )
      },
      set(value: string) {
        this.form.payment.expiry = value.trim()
      }
    }
  },
  methods: {
    cardType(cardNumber: string): {
      mask: string
      regex: RegExp
      cardtype: string
    } {
      const test = cardNumber.replace(' ', '')
      return (
        this.cardTypes.find((cardType: any) => cardType.regex.test(test)) || {
          mask: '',
          regex: /\d/g,
          cardtype: 'Unknown'
        }
      )
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
    margin: 0 10px;
  }
  :global(.el-input--prefix .el-input__inner) {
    padding-left: 40px;
  }
}
</style>

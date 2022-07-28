<template>
  <div :class="$style.root">
    <h2>Shipping information</h2>
    <el-form :rules="rules" :model="form" ref="form" label-position="top">
      <el-row :gutter="16">
        <el-col :md="12">
          <el-form-item label="First name" prop="firstName">
            <el-input
              placeholder="First name"
              v-model="form.firstName"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="12">
          <el-form-item label="Last name" prop="lastName">
            <el-input
              placeholder="Last name"
              v-model="form.lastName"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="Address" prop="address">
        <el-input placeholder="Address" v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="Apartment, suite, etc" prop="apt">
        <el-input
          placeholder="Apartment, suite, etc"
          v-model="form.apt"
        ></el-input>
      </el-form-item>
      <el-row :gutter="16">
        <el-col :md="12">
          <el-form-item label="Country" prop="country">
            <el-select
              v-model="form.country"
              filterable
              placeholder="Country"
              @change="onCountryChange"
            >
              <el-option
                v-for="item in countries"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :md="12">
          <el-form-item label="State" prop="state">
            <el-select
              v-if="isSelectUs"
              v-model="form.state"
              placeholder="State"
              filterable
            >
              <el-option
                v-for="item in usStates"
                :key="item.abbreviation"
                :label="item.name"
                :value="item.abbreviation"
              >
              </el-option>
            </el-select>
            <el-input
              v-else
              placeholder="State"
              v-model="form.state"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="16">
        <el-col :md="12">
          <el-form-item label="City" prop="city">
            <el-input placeholder="City" v-model="form.city"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="12">
          <el-form-item label="Zip code" prop="zip">
            <el-input placeholder="Zip code" v-model="form.zip"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CheckoutForm, Country, State } from '~/model/checkout/checkout'
import { EVENT_BUS } from '~/constant/event-bus'
import countries from '~/static/country_code.json'
import usStates from '~/static/us_state.json'

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
        firstName: [
          {
            required: true,
            message: 'Please input your first name',
            trigger: 'change'
          }
        ],
        lastName: [
          {
            required: true,
            message: 'Please input your last name',
            trigger: 'change'
          }
        ],
        address: [
          {
            required: true,
            message: 'Please input your address',
            trigger: 'change'
          }
        ],
        country: [
          {
            required: true,
            message: 'Please input your country',
            trigger: 'change'
          }
        ],
        city: [
          {
            required: true,
            message: 'Please input your city',
            trigger: 'change'
          }
        ],
        state: [
          {
            required: true,
            message: 'Please input your state',
            trigger: 'change'
          }
        ],
        zip: [
          {
            required: true,
            message: 'Please input your zip',
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {
    countries(): Country[] {
      return countries
    },
    countryCode(): Country {
      return this.countries.find(
        (country) => country.name === this.form.country
      )!
    },
    usStates(): State[] {
      return usStates
    },
    isSelectUs(): Boolean {
      return this.form.country === 'US'
    }
  },
  methods: {
    onCountryChange(): void {
      this.form.state = ''
    },
    submitForm() {
      ;(this as any).$refs.form.validate((valid: boolean) => {
        if (valid) {
          this.$emit('input', this.form)
          this.$emit('next')
        }
      })
    }
  },
  activated() {
    this.$nuxt.$on(EVENT_BUS.CHECK_OUT_NEXT, () => {
      this.submitForm()
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
  :global(.el-form-item__label) {
    margin-bottom: var(--space-1o2);
  }
  :global(.el-select) {
    width: 100%;
  }
}
</style>

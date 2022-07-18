<template>
  <div :class="$style.root">
    <el-form :rules="rules" :model="form" ref="form">
      <div :class="$style.contact">
        <h2>Contact information</h2>
        <el-form-item label="Email address" prop="email">
          <el-input placeholder="Your email" v-model="form.email"></el-input>
        </el-form-item>
      </div>
      <div :class="$style.shipping">
        <h2>Shipping information</h2>
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
              <el-input placeholder="Country" v-model="form.country"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12">
            <el-form-item label="City" prop="city">
              <el-input placeholder="City" v-model="form.city"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="16">
          <el-col :md="12">
            <el-form-item label="State" prop="state">
              <el-input placeholder="State" v-model="form.state"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12">
            <el-form-item label="Zip code" prop="zip">
              <el-input placeholder="Zip code" v-model="form.zip"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="Phone number (optional)" prop="phone">
          <el-input
            placeholder="Your phone number"
            v-model="form.phone"
          ></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(): {
    form: {
      email: String
      firstName: String
      lastName: String
      address: String
      apt: String
      city: String
      country: String
      state: String
      zip: String
      phone: String
    }
    rules: Object
    isLoading: Boolean
  } {
    return {
      form: {
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        apt: '',
        country: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Please input email address',
            trigger: 'change'
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: 'change'
          }
        ],
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
      },
      isLoading: false
    }
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
  .contact {
    padding: var(--space) 0;
  }
  .shipping {
    padding: var(--space) 0;
  }
  .contact + .shipping {
    border-top: 1px solid var(--color-bg-secondary);
  }
}
</style>

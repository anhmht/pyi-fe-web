<template>
  <div :class="$style.root">
    <div class="container">
      <el-row :gutter="10">
        <el-col :md="7" :sm="12" :class="$style.col">
          <img src="~/assets/images/logo.png" width="40" />
          <p>Address: 232 Forest Road Walthamstow UNITED KINGDOM</p>
          <p>Phone Number: 111-111-111</p>
          <p>
            Need support? <nuxt-link to="/contact">Submit a ticket</nuxt-link>
          </p>
        </el-col>
        <el-col :md="5" :sm="12" :class="$style.col">
          <h5 :class="$style.info">INFO & SUPPORT</h5>
          <ul>
            <li>
              <nuxt-link to="/about">About Us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/tracking">Track Order</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/faq">FAQs</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">Contact Support</nuxt-link>
            </li>
          </ul>
        </el-col>
        <el-col :md="5" :sm="12" :class="$style.col">
          <h5>POLICIES</h5>
          <ul>
            <li>
              <nuxt-link to="/return-policy">Return Policy</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/shipping-policy">Shipping Policy</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/term">Terms & Conditions</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/dmca">DMCA</nuxt-link>
            </li>
          </ul>
        </el-col>
        <el-col :md="7" :sm="12" :class="$style.col">
          <h5>SOCIAL MEDIA</h5>
          <ul :class="$style.social">
            <li>
              <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss" module>
.root {
  padding: var(--space-2x) 0;
  font-size: 1.3rem;
  h5 {
    font-weight: 600;
    font-size: 1.4rem;
  }
  ul {
    margin-top: var(--space-1o2);
    li {
      padding: 5px 0;
    }
  }
  a {
    font-size: 1.4rem;
    &:hover {
      color: var(--color-primary);
      font-weight: 500;
    }
  }
  .social {
    a {
      font-size: 1.6rem;
    }
    li {
      display: inline-block;
    }
    li + li {
      margin-left: var(--space-3x);
    }
  }
  @media only screen and (max-width: 1024px) {
    .social {
      li + li {
        margin-left: var(--space-1x5);
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .info {
      margin-top: 0 !important;
    }
    .col {
      text-align: center;
      img {
        margin: auto;
      }
      h5 {
        margin-top: var(--space-1x5);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .info {
      margin-top: var(--space-1x5) !important;
    }
  }
}
</style>

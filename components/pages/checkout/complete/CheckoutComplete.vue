<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Thanks for ordering</h1>
      <p :class="$style.desc">
        We appreciate your order, we're currently processing it. So hang tight
        and we will send you confirmation very soon.
      </p>
      <el-skeleton
        :class="$style.skeleton"
        v-if="isLoading"
        :rows="6"
        animated
      />
      <div v-else :class="$style.complete">
        <div :class="$style.tracking">
          <h4>Tracking number</h4>
          <p>123231313123</p>
        </div>
        <el-row :gutter="24">
          <el-col :lg="12">
            <CheckoutList :class="$style.list" :order-items="orderItems" />
          </el-col>
          <el-col :lg="12">
            <div :class="$style.order">
              <CheckoutSummary
                :class="$style.summary"
                :order-items="orderItems"
              />
              <CheckoutShippingInfo :address="address" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Cart } from '~/model/cart/cart'
import { RootState } from '~/store/state'
import { sleep } from '~/utils'
import CheckoutList from '~/components/pages/checkout/CheckoutList.vue'
import CheckoutSummary from '../CheckoutSummary.vue'
import CheckoutShippingInfo from '../CheckoutShippingInfo.vue'
import { CheckoutAddress } from '~/model/checkout/checkout'
import { shippingInfo } from '~/mock/data/Checkout'

export default Vue.extend({
  components: { CheckoutList, CheckoutSummary, CheckoutShippingInfo },
  props: {
    orderId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    orderItems(): Cart[] {
      return (this.$store.state as RootState).shoppingCart.filter(
        (item: Cart) => item.isSelected
      )
    },
    address(): CheckoutAddress {
      return shippingInfo
    }
  },
  async mounted() {
    this.isLoading = true
    await sleep(2000)
    this.$confetti.start()
    this.isLoading = false

    setTimeout(() => {
      this.$confetti.stop()
    }, 5000)
  }
})
</script>
<style lang="postcss" module>
.root {
  .desc {
    font-size: 1.4rem;
    margin-top: var(--space);
    color: var(--color-form-text);
  }
  .skeleton {
    margin-top: var(--space-2x);
  }
  .complete {
    margin-top: var(--space-2x);
  }
  .tracking {
    h4 {
      font-size: 1.6rem;
      font-weight: 600;
    }
    p {
      color: var(--color-primary);
      font-size: 1.4rem;
    }
  }
  .list {
    margin-top: var(--space-1x5);
  }
  .summary {
    > div {
      margin-top: 0;
    }
  }
  .order {
    background: var(--color-bg-secondary-2);
    padding: var(--space-2x);
    border-radius: var(--radius-5);
  }
}
</style>

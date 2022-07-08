<template>
  <div :class="$style.root">
    <div :class="$style.main">
      <el-row :gutter="16">
        <el-col :sm="10">
          <h4>ORDER: <span>C26B18FB-D205-DEF6-EC5168C926375702</span></h4>
          <div>Tracking ID: <strong>92748901790443643406596477</strong></div>
          <div>Order date: March, 27 2018 12:14:45</div>
        </el-col>
        <el-col :sm="8">
          <div>Name: Joe Testing</div>
          <div>Address: 1300 Rosa Parks Blvd</div>
          <div>City: Detroit</div>
          <div>State: MI</div>
          <div>ZIP: 48216</div>
          <div>Country: USA</div>
        </el-col>
        <el-col :sm="6">
          <h4>Complete</h4>
          <el-progress
            :class="$style.progress"
            :stroke-width="10"
            :percentage="50"
          ></el-progress>
          <div>Shipping method: Expedited Mail Innovations</div>
          <div>Vendor: UPS</div>
        </el-col>
      </el-row>
    </div>
    <el-divider>Order Status</el-divider>
    <Steps />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Steps from '~/components/common/Steps.vue'

export default Vue.extend({
  components: { Steps }
})
</script>
<style lang="postcss" module>
.root {
  text-align: left;
  font-size: 1.3rem;
  color: var(--color-form-text);
  margin-bottom: var(--space-2x);
  .main {
    margin-bottom: var(--space-2x);
    h4 {
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: var(--space-1o2);
      span {
        color: var(--color-primary);
      }
    }
  }
  .progress {
    margin-bottom: var(--space);
  }

  :global(.el-divider--horizontal) {
    margin-bottom: var(--space-2x5);
  }
}
</style>

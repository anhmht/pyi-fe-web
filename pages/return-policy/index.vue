<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Refund/Return/Exchange Policy</h1>
      <p>
        By making the purchase you acknowledge and agree that the goods are
        bespoke, and made specifically for you, they are custom-made goods, and
        are produced only after your purchase has been made and confirmed. Prior
        to your purchase no stock of the purchased goods exist. Furthermore,
        based on the information written above, you acknowledge and agree that
        your rights to make changes or cancellations are within&nbsp;<strong
          >12 hours</strong
        >&nbsp;from your purchase confirmation. Once the 24 hours has elapsed
        and your purchase goes into production, your rights to make changes or
        cancellations are forfeit. Other than where goods are faulty, you have
        no rights to cancel any order or return any goods purchased and all
        orders are final.
      </p>
      <p>
        Returns are handled on a case by case basis. Return of your purchase is
        permitted ONLY when the goods delivered fall under the following
        criteria:
      </p>
      <ol>
        <li>The goods received are damaged</li>
        <li>There are visible defects with the print</li>
        <li>The item is the wrong size from the one ordered</li>
        <li>The item is the wrong color from the one ordered</li>
        <li>The item is the wrong design from the one ordered</li>
        <li>
          The item is the wrong style (e.g long sleeve shirt instead of tee
          shirt) from the ordered
        </li>
      </ol>
      <p>
        <strong
          >If the goods delivered to you fall under one of the criteria noted
          above, please follow below steps to request return:</strong
        >
      </p>
      <ul>
        <li>
          You must submit a request for a return within 14 days after you
          receive your goods.
        </li>
        <li>
          After the 14 days have elapsed you acknowledge that your rights to
          return are considered forfeit. If goods are returned prior to
          submitting your request those goods are considered forfeit.
        </li>
        <li>
          The request can be made through our ticketing system at Contact Us
          page, or by emailing us at ngocanh19662022@gmail.com.
        </li>
        <li>
          You must submit evidence of damaged goods by sending us a clear
          picture of the item. The item should be placed on a flat surface, with
          visible tags and errors in the picture. We will use this information
          to help with your order processing, as well as to eliminate errors in
          the printing process in the future.
        </li>
        <li>
          Returns can be exchanged for the original purchased goods or refunded
          for the original purchase price. Inquiries are typically addressed
          within&nbsp;<strong>72 hours</strong>.
        </li>
        <li>
          Please note that customers are responsible for return shipping rates.
        </li>
        <li>We will send you return instructions separately by email.</li>
      </ul>
      <p>
        It will take approximately&nbsp;<strong>5-10 business days</strong
        >&nbsp;to process your refund.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ReturnPolicyPage'
})
</script>
<style lang="postcss" module>
.root {
  margin-top: var(--space-4x);
  font-size: 1.4rem;
  h1 {
    margin-bottom: var(--space-2x);
  }
  p {
    margin-bottom: var(--space);
  }
}
</style>

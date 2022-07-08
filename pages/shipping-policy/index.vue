<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Shipping Policy</h1>
      <p>
        <strong
          >How long will it take for the buyer to receive their order?</strong
        >
      </p>
      <p>
        All our products are created on demand, which means that your product
        will go into production shortly after your order has been processed.
        Customer(s) can expect to receive their products&nbsp;<strong
          >10-21 business days</strong
        >&nbsp;after their payment has been received and their order processed.
      </p>
      <p>Order in queue</p>
      <p>
        After your payment has been posted, your order will go into our waiting
        queue for 12 hours before printing. During this&nbsp;<strong
          >12 hours</strong
        >, you can change the order detail (change size, colour, quantity) or
        cancel the order.
      </p>
      <p><u>Production time</u></p>
      <p>
        We typically take about 1-3 business days to make your product,
        depending on the type of product ordered.
      </p>
      <p>
        Detail time frame for production correspondence with products group as
        below:
      </p>
      <ul>
        <li>
          Printed apparel (normal/ partial printing):&nbsp;<strong
            >3-5 business days</strong
          >
        </li>
        <li>
          Special for Canvas/Poster printing :&nbsp;<strong
            >5-7 business days</strong
          >
        </li>
        <li>
          All Over Print apparel and products (Full Prints):&nbsp;<strong
            >7-10 business days</strong
          >
        </li>
      </ul>
      <p><u>Shipping time</u></p>
      <p>
        Customers acknowledge and agree that the stated delivery time frame of
        10-21 business days is an estimate, and under certain instances
        deliveries may exceed or be less than the stated time frame.
      </p>
      <p>
        Detail time frame for shipping correspondence with products group as
        below:
      </p>
      <ul>
        <li>
          Printed apparel (normal/ partial printing):&nbsp;<strong
            >5-7 business days</strong
          >
        </li>
        <li>
          All Over Print apparel and products (Full Prints):&nbsp;<strong
            >11-14 business days</strong
          >
        </li>
        <li>
          International orders may take an&nbsp;<strong
            >additional 1-2 weeks</strong
          >.
        </li>
      </ul>
      <p>
        To ensure the fastest on-time production and delivery we have a wide
        range of warehouses all over the world. Your product will normally be
        produced as well as shipped from the nearest warehouse in your area.
      </p>
      <p>
        All our shipments are provided with a tracking link in a shipment
        notification email. Please feel free to follow the tracking link to
        check your delivery status.
      </p>
      <p><strong>How much should I pay for shipping?</strong></p>
      <p>
        Shipping costs vary depending on the shipping destination and the number
        of items that you purchase.
      </p>
      <p>Shipping for the US:</p>
      <ul>
        <li>Custom Apparel:</li>
        <li>
          Most items are $4.99 for the first item + $1.99 for each additional
          item.
        </li>
        <li>
          Hoodies, zip hoodies, sweatshirts, long sleeves are $6.99 for one item
          + $2.99 for each additional item.
        </li>
        <li>All Over Prints Apparel:</li>
        <li>
          T-shirts, tank-tops are $4.99 for one item + $2.99 for each additional
          item.
        </li>
        <li>
          Others are $6.99 for the first item + $4.99 for each additional item.
        </li>
        <li>
          Blankets, hooded blanket: $6.99 for the first item + $4.99 for each
          additional item.
        </li>
      </ul>
      <p>International shipping*:</p>
      <ul>
        <li>
          International shipping for Custom Apparel: most items are $7.99 for
          the first item + $1.99 for each additional item. Please note that
          hoodies and heavier items may be charged a higher rate.
        </li>
        <li>International shipping for All Over Prints Apparel:</li>
        <li>
          T-shirts, tank-tops are $6.99 for one item + $2.99 for each additional
          item.
        </li>
        <li>
          Others are $8.99 for the first item + $4.99 for each additional item.
        </li>
      </ul>
      <p>
        *Please note that shipping to some special locations may be charged
        higher shipping costs
      </p>
      <p>*Please note some countries will not have full tracking status.</p>
      <p>Re-ship</p>
      <p>Below cases will be considered for re-ship:</p>
      <ul>
        <li>
          Customer didn&rsquo;t provide us with correct address or contact
          information for delivery and the carrier failed on delivering the
          parcel
        </li>
        <li>
          Shipping carrier can not contact customer for delivery several times
        </li>
      </ul>
      <p>
        The parcel will be returned to our warehouse and from there we will
        re-ship once we receive the correct address and shipping information
        from the customer. Below re-shipping cost will be applied:
      </p>
      <ul>
        <li>$7 for re-ship to US / item</li>
        <li>$10 for re-ship globally / item</li>
      </ul>
      <p>Please note that all above prices are in USD.</p>
      <p><strong>Can I ship the order to multiple addresses?</strong></p>
      <p>
        We only offer single destination shipping. If you wish to ship to
        multiple locations, please order separately with separate addresses.
      </p>
      <p><strong>Can I ship to a PO box or Military APO/ FPO?</strong></p>
      <p>You can have your order shipped to PO boxes and military APO/ FPO.</p>
      <p>
        Shipment to APOs can take up to 40-45 days to be delivered. Please note
        that once your parcel has entered the army area, we will not be able to
        update the status of shipping for security reasons.
      </p>
      <p><strong>VAT taxes will be charged?</strong></p>
      <p>
        We do not collect any tax for international shipping. All taxes and
        duties fees are the responsibility of the receiver.
      </p>
      <p>
        The VAT charges may vary according to the country. We recommend
        contacting your local custom officer for more information.
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

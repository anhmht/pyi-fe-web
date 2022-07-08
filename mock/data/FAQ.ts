import { FAQ } from "~/model/faq/faq";

const beforePlaceOrderFAQ: FAQ[] = [
  {
    question: 'How much should I pay for shipping?',
    answer: `<div> Please visit here to get our <a href="/shipping-policy">Shipping Policy </a> <br/>
      Shipping costs vary depending on the shipping destination and the number of items that you purchase.<br/>
      Shipping for the US*: <br/>
      • Custom Apparel: <br/>
      Most items are from $4.99 for the first item + $1.99 for each additional item. <br/>
      Hoodies, zip hoodies, sweatshirts, long sleeves are from $6.99 for one item + $2.99 for each additional item. <br/>
      • All Over Prints Apparel: <br/>
      T-shirts, tank-tops are from $4.99 for one item + $2.99 for each additional item. <br/>
        Others are from $6.99 for the first item + $4.99 for each additional item. <br/>
      • Blankets, hooded blanket: from $6.99 for the first item + $4.99 for each additional item. <br/>
      * Please note that the price may change depending on different suppliers, shipping locations. <br/>
      International shipping*: <br/>
      • Custom Apparel: most items are from $6.99 for the first item + $2.99 for each additional item. Please note that hoodies and heavier items may be charged a higher rate.<br/>
      • All Over Prints Apparel: <br/>
      T-shirts, tank-tops are $6.99 for one item + $2.99 for each additional item. <br/>
      Others are $8.99 for the first item + $4.99 for each additional item. <br/>
      * Please note that shipping to some special locations may be charged higher shipping costs</div>` ,
  },
  {
    question: 'How long will it take to ship my order?',
    answer: `<div> The stated delivery time frame of 10-21 business days is an estimate, and under certain instances deliveries may exceed or be less than the stated time frame. <br/>
      Detail time frame for shipping correspondence with products group as below: <br/>
      • Printed apparel (normal/ partial printing): 5-7 business days <br/>
      • All Over Print apparel and products (Full Prints): 11-14 business days <br/>
      • International orders may take an additional 1-2 weeks.</div>`
  },
  {
    question: 'What are the sizing specs of my order?',
    answer: `<div>You can check the size guide of each product right on the sales website address by clicking on the "Size Guide" tab.</div>`
  },
  {
    question: 'I’m having issues placing an order.',
    answer: `<div>We’re sorry to hear that you’re unable to place an order. Please contact <a href="/contact">Customer Service</a>:  And we will work on resolving the issue as quickly as possible.</div>`
  },
  {
    question: `What's product material?`,
    answer: `<div>You can check the size guide of each product right on the sales website address by clicking on the <strong>"Description"</strong> tab.
      Actual colors may differ due to light and display setting of customer computer screens. May have a 2-3 cm variance in deign placement.</div>`
  }
]

const orderStatusDeliveryFAQ: FAQ[] = [
  {
    question: 'What is your product manufacturing process? Why does it takes so long to ship my order?',
    answer: `<div>In short: It takes about 4-7 business days before your order is shipped. <br/>
      After you place an order, it will take about 1 business day for order verification and processing. <br/>
      After that, the design file will be sent to our factory, then it will take about 2-3 days to print and dry the product. <br/>
      It takes another 1 day for packaging and labeling. However, there may be a delay of 2 to 3 business days currently due to the additional security measures required for shipping.<br/>
      Delays may occur in global shipping due to the global outbreak of the coronavirus (COVID-19).</div>`
  },
  {
    question: 'What is the status of my order?',
    answer: `<div>You can keep track of your order at any time by <a href="/tracking">visiting here.</a></div>`
  },
  {
    question: 'My orders is past the estimated delivery time.',
    answer: `<div>Depending on the shipping location and the type of ordered items, items may be shipped from many different factories. <br/>
      In case your order has not arrived after 21 working days, please contact <a href="/contact">Customer service</a> and we will resolve the issue as quickly as possible.<br/>
      You can keep track of your order at any time by <a href="/tracking">visiting here.</a></div>`
  },
  {
    question: 'Why is there no information when I track my package?',
    answer: `<div>Due to the high volume season and the global outbreak of the coronavirus (COVID-19), tracking updates might get delayed by a few days. Please be patient and contact us if you need more information about your package.</div>`
  }
]

const modifyOrderFAQ: FAQ[] = [
  {
    question: 'I’d like to modify my order.',
    answer: `<div>All our products are created on demand, which means that your product will go into production shortly after your order has been processed.<br/>
      After your payment has been posted, your order will go into our waiting queue for 12 hours before printing.<br/>
      During this 12 hours, you can change the order details (change size, color, quantity, address) or cancel the order.<br/>
      Order changes and cancellations are only accepted within the first 12 hours.<br/>
      The exact date and time for this deadline are in the confirmation email you receive when you place your order.<br/>
      If you’d like to change the product, the number of items ordered, or cancel your order, you can contact us by <a href="/contact">visiting here.</a></div>`
  },
  {
    question: 'I’d like to cancel my order.',
    answer: `<div>All our products are created on demand, which means that your product will go into production shortly after your order has been processed. <br/>
      After your payment has been posted, your order will go into our waiting queue for 12 hours before printing. <br/>
      During this 12 hours, you can change the order details (change size, color, quantity, address) or cancel the order.<br/>
      Order changes and cancellations are only accepted within the first 12 hours.<br/>
      The exact date and time for this deadline are in the confirmation email you receive when you place your order.<br/>
      If you’d like to change the product, the number of items ordered, or cancel your order, you can contact us by <a href="/contact">visiting here.</a></div>`
  },
  {
    question: `I'd like to return or replace my order`,
    answer: `<div>We committed to ensuring the quality of any product purchased from our platform.<br/>
      All of our products are printed only upon request from you. Therefore, Returns are handled on a case by case basis. Return of your purchase is permitted ONLY when the goods delivered fall under the following criteria: <br/>
      - The goods received are damaged <br/>
      - There are visible defects with the print <br/>
      - The item is the wrong size from the one ordered<br/>
      - The item is the wrong color from the one ordered<br/>
      - The item is the wrong design from the one ordered<br/>
      - The item is the wrong style (e.g long sleeve shirt instead of tee shirt) from the ordered.<br/>
      Please click <a href="/return-policy">"Return Policy"</a> to get detailed information.</div>`
  },
  {
    question: `I didn't receive confirmation email.`,
    answer: `<div>Order confirmation email will be sent to you immediately after your items has been successfully paid. <br/>
      In case you did not receive an order confirmation email from us, please take the following steps:<br/>
      - Check Spam or Ads folder or other email account<br/>
      - In case after 1 hour from the time of placing an order successfully, you still have not received the order confirmation email,<br/>
      please contact our <a href="/contact">Customer Care Department</a> for the fastest support</div>`
  },
  {
    question: `How do I contact customer support?`,
    answer: `<div>We are happy to answer any questions you may have. Please contact our customer service at <a href="/contact">here</a> or our email address: support@pyi.com to get our support as quickly as possible.</div>`
  },
  {
    question: `Missing Items`,
    answer: `<div>We have a reliable global network of third-party manufacturers who specialize in printing all sorts of different products. <br/>
      Once you place an order, each item is then delivered to the independent printer closest to you. In order to provide the best range of products to our customers without compromising on our outstanding quality, we often produce and ship from different facilities according to demand.<br/>
      If you’ve placed an order for several items, it’s very likely that they won’t be delivered together all at once. Please wait until the final day of the Estimated Delivery Time for everything to be delivered.</div>`
  }
]

const paymentFAQ: FAQ[] = [
  {
    question: `What payment methods do you accept?`,
    answer: `<div>We currently accept the following forms of payment:<br/>
      <strong>Credit Cards:</strong> We accept Visa, American Express, Mastercard, and Discover <br/>
      <strong>Debit Cards:</strong> We accept debit cards featuring the Mastercard or Visa logo. If you’re paying with a pre-paid debit card, you must register them before using them for online purchases. You can do this by following instructions on the card or contacting their own support teams.</div>`
  },
  {
    question: `How secure is my payment?`,
    answer: `<div>We take your security very seriously by verifying each transaction with the credit company and processing only those orders if the credit company so authorizes it. In the case of a suspicious or declined transaction, our company may contact you to confirm the validity and ensure your identity or cancel that order with full notification.<br/>
      On credit/debit cards, CVV verification is required before any order can be completed. Additionally, most credit cards and Paypal offer buyer protection for online purchases. Please contact them directly for specific details as it may vary from one financial institution to another.<br/>
      Our website protects your information during transmission by using Secure Sockets Layer (SSL) software, which encrypts information you input at 128-bit strength. This is often symbolized on most web-browsers by a small padlock appearing on the bottom bar of the window and the address of the window changing from http:// to https://, meaning a secure connection. In the event that an order cannot be completed, please contact our Customer Service. If our website cannot establish a secure connection, we will not risk your confidential information (it will not be transmitted).</div>`
  },
  {
    question: `What is the security code?`,
    answer: `Credit and debit cards have a security code located on them to offer additional protection. For most cards it will be a 3-4 digit number located on the back. For American Express cards, look on the front side for a 3-4 digit number.`
  },
  {
    question: `Is my credit/debit card charged as soon as I order a product?`,
    answer: `Yes, your charge is processed immediately. It may show up initially as an authorization on your account, and then, as it is accepted it will show as a charge on your statement.`
  }
]

export default { beforePlaceOrderFAQ, orderStatusDeliveryFAQ, modifyOrderFAQ, paymentFAQ }

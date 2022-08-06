import { CheckoutAddress } from "~/model/checkout/checkout"

export const STEP = {
  CONTACT_INFO: 0,
  SHIPPING_INFO: 1,
  DELIVERY_METHOD: 2,
  PAYMENT: 3
}

export const steps = [
  {
    id: STEP.CONTACT_INFO,
    name: 'Contact Info'
  },
  {
    id: STEP.SHIPPING_INFO,
    name: 'Shipping Info'
  },
  {
    id: STEP.DELIVERY_METHOD,
    name: 'Delivery Method'
  },
  {
    id: STEP.PAYMENT,
    name: 'Payment'
  }
]

export const shippingInfo: CheckoutAddress = {
  email: 'anhmht@mail.com',
  firstName: 'Anh',
  lastName: 'Mai',
  address: '139/27 Bo Bao Tan Thang',
  apt: '',
  city: 'Ho Chi Minh',
  country: 'Vietnam',
  state: 'Ho Chi Minh',
  zip: '700000',
  phone: '0989898989',
  deliveryMethod: { id: 1, name: 'Ground' }
}

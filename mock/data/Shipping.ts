import { Shipping } from "~/model/checkout/checkout";

export const shippingMethods: Shipping[] = [
  {
    id: 35,
    name: 'Economy',
    desc: '10-20 business days'
  },
  {
    id: 80,
    name: 'Ground',
    desc: '5-10 business days'
  },
  {
    id: 79,
    name: '2 Day',
    desc: '2 business days'
  },
  {
    id: 60,
    name: 'Standard Overnight',
    desc: 'Overnight'
  },
]

export interface Country {
  code: string;
  name: string;
  dialCode: string;
}

export interface State {
  name: string;
  abbreviation: string
}

export interface CheckoutForm {
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
  deliveryMethod: DeliveryMethod
  payment: Payment
}

export interface DeliveryMethod {
  id: number
  name: string
  desc?: string
}

export interface Payment {
  id: string
  name: string
  cardNumber: string
  expiry: string
  cvc: string
}

export class CheckoutAddress {
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
  deliveryMethod: DeliveryMethod
  constructor(data: CheckoutForm) {
    this.email = data.email
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.address = data.address
    this.apt = data.apt
    this.city = data.city
    this.country = data.country
    this.state = data.state
    this.zip = data.zip
    this.phone = data.phone
    this.deliveryMethod = data.deliveryMethod
  }
}
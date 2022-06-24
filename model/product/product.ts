export interface Product {
  id: string,
  name: string,
  path: string,
  images: Image[],
  price: string,
  colors?: Color[],
  sizes?: Size[],
  categories: Category[],
  description?: string,
  productDetail?: string
  shippingDetail?: string
  collection?: Collection[],
}

export interface Color {
  id: string
  color: string
}

export interface Size {
  id: string
  name: string
  disabled: boolean
}

export interface Image {
  src: string
  alt: string
}

export interface Category {
  id: string
  name: string
  path: string
}

export interface Collection {
  id: string
  name: string
  path: string
}

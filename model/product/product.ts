export interface Product {
  id: string,
  name: string,
  href: string,
  images: Image[],
  price: string,
  colors?: Color[],
  sizes?: Size[],
  categories: Category[],
  description?: string,
  productDetail?: string
  shippingDetail?: string
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

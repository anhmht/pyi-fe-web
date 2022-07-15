import { Product } from "../product/product"

export interface Cart {
  id: string
  product: Product
  quantity: number
  colorId?: string,
  sizeId?: string,
  isSelected?: boolean
}

import { List } from "~/model/common/common";
import { Category } from "../product/product";

export interface CategoryFilter extends List {
  filter: Filter
}

export interface Filter {
  priceFrom?: number
  priceTo?: number
  color: string[]
  size: string[]
  collection: string[]
  category?: string
}

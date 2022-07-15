import { Cart } from "~/model/cart/cart";
import { products } from "~/mock/data/Product";

export const cartItems: Cart[] = [
  {
    id: "1",
    product: products[0],
    quantity: 2,
    colorId: '1',
    sizeId: '7',
    isSelected: true
  },
  {
    id: "2",
    product: products[1],
    quantity: 1,
    colorId: '1',
    sizeId: '7',
    isSelected: true
  },
  {
    id: "3",
    product: products[2],
    quantity: 1,
    colorId: '3',
    sizeId: '6',
    isSelected: true
  }
]

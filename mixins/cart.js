export default {
  data() {
    return {
      cartItem: undefined
    }
  },
  computed: {
    total() {
      return this.cartItem.quantity * this.price
    },
    getColor() {
      const color = this.cartItem.product.colors?.find(
        (color) => color.id === this.cartItem.colorId
      )
      return color?.name
    },
    getSize() {
      const color = this.cartItem.product.colors?.find(
        (color) => color.id === this.cartItem.colorId
      )
      const size = color?.size?.find((size) => size.id === this.cartItem.sizeId)
      return size?.name
    },
    price() {
      if (!this.cartItem.colorId || !this.cartItem.sizeId)
        return this.cartItem.product.price
      const color = this.cartItem.product.colors?.find(
        (color) => color.id === this.cartItem.colorId
      )
      const size = color?.size?.find((size) => size.id === this.cartItem.sizeId)
      return size?.price || this.cartItem.product.price
    }
  }
}

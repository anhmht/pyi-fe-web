export default {
  computed: {
    carts() {
      return this.$store.state.shoppingCart.filter((item) => item.isSelected)
    },
    subTotal() {
      return this.carts.reduce((acc, item) => {
        return acc + item.quantity * this.getPrice(item)
      }, 0)
    },
    tax() {
      return this.subTotal * 0.1
    },
    orderTotal() {
      return this.subTotal + this.tax + this.shippingFee
    },
    shippingFee() {
      return this.carts.length ? 5 : 0
    }
  },
  methods: {
    getPrice(cart) {
      if (!cart.colorId || !cart.sizeId) return cart.product.price
      const color = cart.product.colors?.find((c) => c.id === cart.colorId)
      const size = color?.size?.find((s) => s.id === cart.sizeId)
      return size?.price || cart.product.price
    }
  }
}

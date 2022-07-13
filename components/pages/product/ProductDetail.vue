<template>
  <div :class="$style.root">
    <div class="container">
      <Breadcrumb :data="product.categories" :current="product.name" />
      <div :class="$style.detail">
        <el-row :gutter="32">
          <el-col :md="14">
            <ProductImages :images="product.images" />
          </el-col>
          <el-col :md="10">
            <h1>{{ product.name }}</h1>
            <div :class="$style.price">
              {{ $formatCurrency(product.price) }}
            </div>
            <div :class="$style.rate">
              <el-rate v-model="rate"></el-rate>
              <div :class="$style.review">117 reviews</div>
            </div>
            <div :class="$style.colorPicker">
              <div>Color</div>
              <ColorPicker :colors="product.colors" v-model="colorId" />
            </div>
            <div :class="$style.sizePicker">
              <div :class="$style.title">
                <div>Size</div>
                <div :class="$style.chart">See Sizing chart</div>
              </div>
              <SizePicker :sizes="product.sizes" v-model="sizeId" />
            </div>
            <el-button @click="addToCart" :class="$style.btn" type="primary"
              >Add to cart</el-button
            >
            <div :class="$style.desc">
              <div>Description</div>
              <div>
                <p>
                  The Basic Tee 6-Pack allows you to fully express your vibrant
                  personality with three grayscale options. Feeling adventurous?
                  Put on a heather gray tee. Want to be a trendsetter? Try our
                  exclusive colorway: "Black". Need to add an extra pop of color
                  to your outfit? Our white tee has you covered.
                </p>
              </div>
            </div>
            <div :class="$style.desc">
              <div>Product detail</div>
              <div>
                <p>
                  The Basic Tee 6-Pack allows you to fully express your vibrant
                  personality with three grayscale options. Feeling adventurous?
                  Put on a heather gray tee. Want to be a trendsetter? Try our
                  exclusive colorway: "Black". Need to add an extra pop of color
                  to your outfit? Our white tee has you covered.
                </p>
              </div>
            </div>
            <div :class="$style.desc">
              <div>Shipping detail</div>
              <div>
                <p>
                  The Basic Tee 6-Pack allows you to fully express your vibrant
                  personality with three grayscale options. Feeling adventurous?
                  Put on a heather gray tee. Want to be a trendsetter? Try our
                  exclusive colorway: "Black". Need to add an extra pop of color
                  to your outfit? Our white tee has you covered.
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import ColorPicker from '~/components/common/ColorPicker.vue'
import SizePicker from '~/components/common/SizePicker.vue'
import ProductImages from '~/components/pages/product/ProductImages.vue'
import { products } from '~/mock/data/Product'
import { Cart } from '~/model/cart/cart'
import { Product } from '~/model/product/product'
import { Mutations } from '~/store'
import { generateUuid } from '~/utils'

export default Vue.extend({
  components: {
    ColorPicker,
    SizePicker,
    ProductImages,
    Breadcrumb
  },
  data(): {
    rate: number
    product: Product
    colorId?: string
    sizeId?: string
  } {
    return {
      rate: 4,
      product: products[0],
      colorId: undefined,
      sizeId: undefined
    }
  },
  methods: {
    addToCart() {
      if (!this.colorId || !this.sizeId) {
        this.$notify.error({
          title: 'Error',
          message: 'Please select color and size'
        })
        return
      }
      const cart = {
        id: generateUuid(),
        product: this.product,
        colorId: this.colorId,
        sizeId: this.sizeId,
        quantity: 1,
        isSelected: true
      } as Cart
      this.$store.commit(Mutations.TYPE.ADD_TO_CART, cart)
      this.$notify.success({
        title: 'Add to cart Success',
        message: `Please check your cart to checkout`
      })
      this.$router.push('/cart')
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  margin-top: var(--space-4x);
  .detail {
    margin-top: var(--space-3x);
  }
  .price {
    margin: var(--space-1o2) 0;
    font-size: 2.7rem;
  }
  .rate {
    display: flex;
    align-items: center;
    .review {
      margin-left: var(--space);
      cursor: pointer;
      font-size: 1.6rem;
      color: var(--color-primary);
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .colorPicker {
    font-size: 1.6rem;
    margin-top: var(--space-2x);
  }
  .sizePicker {
    font-size: 1.6rem;
    margin-top: var(--space-2x);
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .chart {
      cursor: pointer;
      color: var(--color-primary);
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .btn {
    width: 100%;
    background: var(--color-primary);
    &:hover {
      opacity: 0.7;
    }
  }
  .desc {
    font-size: 1.6rem;
    margin-top: var(--space-2x);
  }
  p {
    margin: var(--space) 0;
    font-size: 1.3rem;
    color: var(--color-form-text);
  }

  @media only screen and (max-width: 991px) {
    .btn {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 60px;
      left: 0;
      z-index: 100;
    }
  }
}
</style>

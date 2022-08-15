<template>
  <div :class="$style.root">
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
            <el-rate v-model="product.rating"></el-rate>
            <div :class="$style.review">117 reviews</div>
          </div>
          <div :class="$style.colorPicker">
            <div>Color</div>
            <ColorPicker :colors="product.colors" v-model="colorId" />
          </div>
          <div
            ref="size"
            :class="[
              $style.sizePicker,
              isError && 'animate__animated animate__tada'
            ]"
          >
            <div :class="$style.title">
              <div>Size</div>
              <div :class="$style.chart">See Sizing chart</div>
            </div>
            <SizePicker :sizes="sizes" v-model="sizeId" />
          </div>
          <el-button @click="addToCart" :class="$style.btn" type="primary">{{
            buttonName
          }}</el-button>
          <div v-if="product.description" :class="$style.desc">
            <div>Description</div>
            <div>
              <p>
                {{ product.description }}
              </p>
            </div>
          </div>
          <div v-if="product.productDetail" :class="$style.desc">
            <div>Product detail</div>
            <div>
              <p>
                {{ product.productDetail }}
              </p>
            </div>
          </div>
          <div v-if="product.shippingDetail" :class="$style.desc">
            <div>Shipping detail</div>
            <div>
              <p>
                {{ product.shippingDetail }}
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import ColorPicker from '~/components/common/ColorPicker.vue'
import SizePicker from '~/components/common/SizePicker.vue'
import ProductImages from '~/components/pages/product/ProductImages.vue'
import { Cart } from '~/model/cart/cart'
import { Product, Size } from '~/model/product/product'
import { Mutations } from '~/store'
import { generateUuid } from '~/utils'

export default Vue.extend({
  components: {
    ColorPicker,
    SizePicker,
    ProductImages,
    Breadcrumb
  },
  props: {
    product: {
      type: Object as () => Product,
      required: true
    }
  },
  data(): {
    colorId?: string
    sizeId?: string
    isError: boolean
  } {
    return {
      colorId: undefined,
      sizeId: undefined,
      isError: false
    }
  },
  computed: {
    buttonName(): string {
      return this.colorId && this.sizeId ? 'Add to cart' : 'Select size'
    },
    sizes(): Size[] {
      if (!this.product.colors) return []
      const color = this.product.colors.find((c) => c.id === this.colorId)
      return color?.size || []
    }
  },
  methods: {
    addToCart() {
      if (!this.colorId || !this.sizeId) {
        this.$message({
          type: 'error',
          message: 'Please select color and size'
        })
        ;(this as any).$refs.size.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
        this.isError = true
        setTimeout(() => {
          this.isError = false
        }, 2000)
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
    padding: var(--space);
    font-size: 1.6rem;
    margin-top: var(--space);
  }
  .sizePicker {
    padding: var(--space);
    font-size: 1.6rem;
    margin-top: var(--space);
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
    margin-top: var(--space);
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

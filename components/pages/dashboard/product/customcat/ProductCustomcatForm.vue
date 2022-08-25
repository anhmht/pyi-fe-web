<template>
  <div v-loading="isLoading" :class="$style.root">
    <h2>Create customcat product</h2>
    <el-row :gutter="24">
      <el-col :md="12">
        <el-image :src="product.image" fit="cover" :class="$style.image">
        </el-image>
      </el-col>
      <el-col :md="12">
        <el-form
          :class="$style.form"
          label-position="top"
          :rules="rules"
          :model="form"
          ref="form"
        >
          <el-form-item label="Product Name" prop="title">
            <el-input
              placeholder="Product name"
              v-model="form.title"
            ></el-input>
          </el-form-item>
          <el-form-item label="Product Description" prop="desc">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="Please input desc"
              v-model="form.desc"
            ></el-input>
          </el-form-item>
          <el-form-item label="Category" prop="categoryId">
            <el-select
              :class="$style.select"
              placeholder="Category name"
              v-model="form.categoryId"
            >
              <el-option
                v-for="item in categories"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Collections" prop="collectionIds">
            <el-select
              multiple
              :class="$style.select"
              placeholder="Please select collection"
              v-model="form.collectionIds"
            >
              <el-option
                v-for="item in collections"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Product Path" prop="path">
            <el-input
              disabled
              placeholder="Product path"
              v-model="displayPath"
            ></el-input>
          </el-form-item>
        </el-form>
        <div :class="$style.footer">
          <el-button @click="$emit('cancel')">Cancel</el-button>
          <el-button type="primary" @click.prevent="handleSubmit"
            >Create</el-button
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Category, Collection, CustomcatProduct } from '~/model/product/product'
import { toLowerCaseNonAccentVietnamese } from '~/utils'

export default Vue.extend({
  props: {
    product: {
      type: Object as () => CustomcatProduct,
      required: true
    }
  },
  data(): {
    form: CustomcatProduct
    categories: Category[]
    collections: Collection[]
    isLoading: boolean
    rules: {
      title: Object[]
      categoryId: Object[]
      path: Object[]
    }
  } {
    return {
      form: {
        id: this.product.id,
        title: this.product.title,
        desc: this.product.desc,
        categoryId: undefined,
        collectionIds: [],
        path: undefined
      },
      isLoading: false,
      categories: [],
      collections: [],
      rules: {
        title: [
          {
            required: true,
            message: 'Please input product name',
            trigger: 'change'
          }
        ],
        categoryId: [
          {
            required: true,
            message: 'Please select category',
            trigger: 'change'
          }
        ],
        path: [
          {
            required: true,
            message: 'Required path',
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {
    displayPath(): string {
      if (!this.form.title) return 'https://napricot.com/category/'
      this.form.path = `/${toLowerCaseNonAccentVietnamese(this.form.title)
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )!
        .map((x) => x.toLowerCase())
        .join('-')}`
      return `https://napricot.com/product${this.form.path}`
    }
  },
  async fetch() {
    this.categories = await this.$categoryService.getCategories()
    const { collections } = await this.$productService.getCollections({
      limit: -1
    })
    this.collections = collections
  },
  methods: {
    handleSubmit() {
      ;(this as any).$refs.form.validate(async (valid: boolean) => {
        if (valid) {
          this.isLoading = true
          await this.$productService.createCustomcatProduct(this.form)
          this.isLoading = false
        } else {
          this.$message.error('Please input required fields')
        }
      })
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .image {
    width: 100%;
  }
  .select {
    width: 100%;
  }
  .footer {
    margin-top: var(--space-2x);
    display: flex;
    justify-content: flex-end;
  }
}
</style>

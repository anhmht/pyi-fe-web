<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Product List</h1>
      <div :class="$style.product">
        <el-table :data="products" :class="$style.table">
          <el-table-column align="center" label="Image" width="120">
            <template slot-scope="scope">
              <el-image
                :src="scope.row.images[0].src"
                fit="cover"
                :class="$style.image"
              >
              </el-image>
            </template>
          </el-table-column>
          <el-table-column
            width="300"
            label="Name"
            show-overflow-tooltip
            prop="name"
          >
          </el-table-column>
          <el-table-column align="center" label="Type" prop="type">
          </el-table-column>
          <el-table-column width="150" show-overflow-tooltip label="Category">
            <template slot-scope="scope">
              {{ getCategoryName(scope.row.categories) }}
            </template>
          </el-table-column>
          <el-table-column width="150" show-overflow-tooltip label="Collection">
            <template slot-scope="scope">
              {{ getCollections(scope.row.collection) }}
            </template>
          </el-table-column>
          <el-table-column label="Price" show-overflow-tooltip>
            <template slot-scope="scope">
              <strong>{{ $formatCurrency(scope.row.price) }}</strong>
            </template>
          </el-table-column>
          <el-table-column
            width="150"
            label="Created date"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              {{ $displayRevealTime(scope.row.createdDate) }}
            </template>
          </el-table-column>
          <el-table-column
            width="150"
            label="Modified date"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              {{ $displayRevealTime(scope.row.modifiedDate) }}
            </template>
          </el-table-column>
          <el-table-column fixed="right" align="right" width="180">
            <template slot="header">
              <el-button type="primary">create</el-button>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >Edit</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CategoryFilter } from '~/model/category/category'
import { Category, Collection, Product } from '~/model/product/product'

export default Vue.extend({
  name: 'DashboardProduct',
  layout: 'dashboard',
  data(): {
    products: Product[]
    isLoading: boolean
    totalRecord: number
    filters: CategoryFilter
  } {
    return {
      products: [],
      isLoading: false,
      totalRecord: 0,
      filters: {
        filter: {
          color: [],
          size: [],
          collection: []
        },
        limit: 12,
        page: 1,
        sort: 'newest'
      }
    }
  },
  async fetch() {
    this.isLoading = true
    const { product, total } = await this.$productService.getProducts(
      this.filters
    )
    this.products = product
    this.totalRecord = total
    this.isLoading = false
  },
  methods: {
    getCategoryName(categories: Category[]) {
      return categories[categories.length - 1].name
    },
    getCollections(collections: Collection[]) {
      return collections.map((collection) => collection.name).join(', ')
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  .product {
    background: #fff;
    border-radius: var(--radius-5);
    padding: var(--space);
    margin-top: var(--space-2x);
  }
  .table {
    width: 100%;
  }
  .image {
    width: 100px;
    height: 100px;
  }
}
</style>

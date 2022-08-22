<template>
  <div :class="$style.root">
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
      <el-table-column width="150" label="Created date" show-overflow-tooltip>
        <template slot-scope="scope">
          {{ $displayRevealTime(scope.row.createdDate) }}
        </template>
      </el-table-column>
      <el-table-column width="150" label="Modified date" show-overflow-tooltip>
        <template slot-scope="scope">
          {{ $displayRevealTime(scope.row.modifiedDate) }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" align="right" width="180">
        <template slot="header">
          <el-button type="primary" @click="visible = true"> Create </el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
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
    <el-divider class="divider"></el-divider>
    <div :class="$style.pagination">
      <Pagination :total="totalRecord" :page.sync="filters.page" />
    </div>
    <ProductSelectionModal
      :visible.sync="visible"
      @select="(product) => $emit('create', product)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CategoryFilter } from '~/model/category/category'
import { Category, Collection, Product } from '~/model/product/product'
import ProductSelectionModal from '~/components/pages/dashboard/product/ProductSelectionModal.vue'
import Pagination from '~/components/common/Pagination.vue'

export default Vue.extend({
  components: { ProductSelectionModal, Pagination },
  data(): {
    products: Product[]
    isLoading: boolean
    totalRecord: number
    filters: CategoryFilter
    visible: boolean
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
        limit: 20,
        page: 1,
        sort: 'newest'
      },
      visible: false
    }
  },
  async fetch() {
    this.isLoading = true
    const { products, total } = await this.$productService.getProducts(
      this.filters
    )
    this.products = products
    this.totalRecord = total
    this.isLoading = false
  },
  methods: {
    getCategoryName(categories: Category[]) {
      return categories[categories.length - 1].name
    },
    getCollections(collections: Collection[]) {
      return collections.map((collection) => collection.name).join(', ') || '-'
    },
    handleCommand(command: string) {
      this.$emit('command', command)
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  .table {
    width: 100%;
  }
  .image {
    width: 100px;
    height: 100px;
  }
}
</style>

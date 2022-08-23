<template>
  <div :class="$style.root">
    <el-table :data="products" :class="$style.table">
      <el-table-column align="center" label="Image" width="120">
        <template slot-scope="scope">
          <el-image :src="scope.row.image" fit="cover" :class="$style.image">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column
        width="500"
        label="Title"
        show-overflow-tooltip
        prop="title"
      >
      </el-table-column>
      <el-table-column width="150" label="Customcat ID" prop="id">
      </el-table-column>
      <el-table-column width="150" label="Type" prop="type"> </el-table-column>
      <el-table-column fixed="right" align="right" width="140">
        <template slot="header">
          <el-button @click="$emit('cancel')">Back to list</el-button>
        </template>
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleCreate(scope.row)"
            >Select</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-divider class="divider"></el-divider>
    <div :class="$style.pagination">
      <Pagination :total="totalRecord" :page.sync="paging.page" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Pagination from '~/components/common/Pagination.vue'
import { Paging } from '~/model/common/common'
import { CustomcatProduct } from '~/model/product/product'

export default Vue.extend({
  components: { Pagination },
  data(): {
    products: CustomcatProduct[]
    isLoading: boolean
    totalRecord: number
    paging: Paging
  } {
    return {
      products: [],
      isLoading: false,
      totalRecord: 0,
      paging: {
        page: 1,
        limit: 4
      }
    }
  },
  async fetch() {
    this.isLoading = true
    const { products, total } = await this.$productService.getCustomcatProducts(
      this.paging
    )
    this.products = products
    this.totalRecord = total || 0
    this.isLoading = false
  },
  methods: {
    handleCreate(product: CustomcatProduct) {
      this.$emit('select', product)
    }
  },
  watch: {
    paging: {
      handler() {
        this.$fetch()
      },
      deep: true
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

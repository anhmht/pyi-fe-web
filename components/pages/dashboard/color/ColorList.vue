<template>
  <div :class="$style.root">
    <el-table :data="colors" :class="$style.table">
      <el-table-column align="center" width="140" label="Color">
        <template slot-scope="scope">
          <el-tag :color="scope.row.hex" effect="dark">
            {{ scope.row.hex }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        width="300"
        label="Color Id"
        show-overflow-tooltip
        prop="id"
      >
      </el-table-column>
      <el-table-column
        width="200"
        label="Color Name"
        show-overflow-tooltip
        prop="name"
      >
      </el-table-column>
      <el-table-column width="150" label="Created date" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-popover
            placement="top-start"
            trigger="hover"
            :content="$displayDateTime(scope.row.createdDate)"
          >
            <span slot="reference">
              {{ $displayRevealTime(scope.row.createdDate) }}</span
            >
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column width="150" label="Modified date" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-popover
            placement="top-start"
            trigger="hover"
            :content="$displayDateTime(scope.row.modifiedDate)"
          >
            <span slot="reference">
              {{ $displayRevealTime(scope.row.modifiedDate) }}</span
            >
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column fixed="right" align="right" width="180">
        <template slot="header">
          <el-button type="primary">create</el-button>
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
      <Pagination :total="totalRecord" :page.sync="paging.page" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Pagination from '~/components/common/Pagination.vue'
import { Paging } from '~/model/common/common'
import { Color } from '~/model/product/product'

export default Vue.extend({
  components: { Pagination },
  data(): {
    colors: Color[]
    isLoading: boolean
    totalRecord: number
    paging: Paging
  } {
    return {
      colors: [],
      isLoading: false,
      totalRecord: 0,
      paging: {
        limit: 20,
        page: 1
      }
    }
  },
  async fetch() {
    this.isLoading = true
    const { colors, total } = await this.$productService.getColors(this.paging)
    this.colors = colors
    this.totalRecord = total
    this.isLoading = false
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

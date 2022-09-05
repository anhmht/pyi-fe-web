<template>
  <div :class="$style.root">
    <el-table :data="users" :class="$style.table">
      <el-table-column align="center" width="100" label="User">
        <template>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column
        width="200"
        label="User Name"
        show-overflow-tooltip
        prop="username"
      >
      </el-table-column>
      <el-table-column
        width="200"
        label="User Email"
        show-overflow-tooltip
        prop="email"
      >
      </el-table-column>
      <el-table-column
        width="200"
        label="Role"
        show-overflow-tooltip
        prop="role"
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
import { User } from '~/model/user/user'

export default Vue.extend({
  components: { Pagination },
  data(): {
    users: User[]
    isLoading: boolean
    totalRecord: number
    paging: Paging
  } {
    return {
      users: [],
      isLoading: false,
      totalRecord: 0,
      paging: {
        limit: 2,
        page: 1
      }
    }
  },
  async fetch() {
    this.isLoading = true
    const { users, total } = await this.$userService.getUser(this.paging)
    this.users = users
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

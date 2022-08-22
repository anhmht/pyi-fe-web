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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CategoryFilter } from '~/model/category/category'
import { User } from '~/model/user/user'

export default Vue.extend({
  data(): {
    users: User[]
    isLoading: boolean
    totalRecord: number
    filters: CategoryFilter
  } {
    return {
      users: [],
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
    const { user, total } = await this.$userService.getUser()
    this.users = user
    this.totalRecord = total
    this.isLoading = false
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

<template>
  <div :class="$style.root">
    <el-row>
      <el-col :md="8">
        <div :class="$style.info">
          Showing {{ displayFrom }} to {{ displayTo }} of {{ total }} results
        </div>
      </el-col>
      <el-col :md="16">
        <div :class="$style.pagination">
          <el-pagination
            :page-size="limit"
            layout="prev, pager, next"
            :total="total"
            :current-page.sync="currentPage"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    }
  },
  data(): {
    currentPage: number
    limit: number
  } {
    return {
      currentPage: this.page,
      limit: 16
    }
  },
  computed: {
    displayFrom(): number {
      return (this.currentPage - 1) * this.limit + 1
    },
    displayTo(): number {
      return this.currentPage * this.limit > this.total
        ? this.total
        : this.currentPage * this.limit
    }
  },
  watch: {
    currentPage: {
      handler(value: number) {
        this.$emit('update:page', value)
      }
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  font-size: 1.4rem;
  .info {
    margin-top: var(--space-1o2);
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
  }
  @media only screen and (max-width: 991px) {
    .info {
      text-align: center;
    }
    .pagination {
      justify-content: center;
    }
  }
}
</style>

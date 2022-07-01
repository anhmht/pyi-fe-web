<template>
  <div :class="[$style.root, 'container']">
    <Breadcrumb :data="breadCrumb" :current="category.name" />
    <div :class="$style.header">
      <h1>{{ categoryName }}</h1>
      <div :class="$style.sort">Sort: <Sort :sort.sync="filters.sort" /></div>
    </div>
    <div :class="$style.body">
      <el-row :gutter="24">
        <el-col :md="6">
          <CategorySideBar :filter.sync="filters.filter" />
        </el-col>
        <el-col :md="18"> bbbb </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import Sort from '~/components/pages/category/Sort.vue'
import CategorySideBar from '~/components/pages/category/Sidebar/index.vue'
import { allCategories } from '~/mock/data/Category'
import { Category } from '~/model/product/product'
import { CategoryFilter, Filter } from '~/model/category/category'
import { findParentCategory, parseQueryString } from '~/utils'

export default Vue.extend({
  components: { Breadcrumb, Sort, CategorySideBar },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data(): {
    category?: Category
    filters: CategoryFilter
  } {
    return {
      category: undefined,
      filters: {
        filter: {
          color: [],
          size: [],
          collection: []
        },
        limit: 16,
        page: 1,
        sort: 'newest'
      }
    }
  },
  computed: {
    queryFilters(): Filter {
      return parseQueryString(this.$route.query, this.slug)
    },
    categoryName(): string | undefined {
      return this.category?.name
    },
    breadCrumb(): Category[] {
      if (!this.category) return []
      return findParentCategory(allCategories, this.category.id)
    }
  },
  fetch() {
    this.category = allCategories.find((x) => x.path === this.slug)
    this.filters.filter.category = this.category!.id
  },
  created() {
    // sync url query params with filters the first time only
    this.filters.filter = this.queryFilters

    const { sort } = this.$route.query
    if (sort) {
      this.filters.sort = sort as string
    }
  },
  watch: {
    slug() {
      this.$fetch()
    },
    filters: {
      handler() {
        this.$router
          .replace({
            query: {
              ...this.filters.filter,
              category: undefined,
              sort: this.filters.sort
            }
          } as any)
          .catch((error: Error) => {
            if (error.name !== 'NavigationDuplicated') {
              throw error
            }
          })
      },
      deep: true
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  .header {
    padding: var(--space-2x) 0;
    padding-bottom: var(--space);
    border-bottom: 1px solid var(--color-bg-secondary);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sort {
    display: flex;
    align-items: baseline;
    font-size: 1.4rem;
  }
  .body {
    margin-top: var(--space);
  }
}
</style>

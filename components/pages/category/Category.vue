<template>
  <div :class="[$style.root, 'container']">
    <Breadcrumb v-if="category" :data="breadCrumb" :current="category.name" />
    <div :class="$style.header">
      <h1>{{ categoryName }}</h1>
      <div :class="$style.sort">
        Sort: <Sort :sort.sync="filters.sort" />
        <i
          v-if="isMobile"
          :class="$style.filter"
          @click="visible = true"
          class="fa fa-filter"
          aria-hidden="true"
        ></i>
      </div>
    </div>
    <div :class="$style.body">
      <el-row :gutter="32">
        <el-col :md="6">
          <CategorySideBar v-if="!isMobile" :filter.sync="filters.filter" />
        </el-col>
        <el-col :md="18">
          <div v-loading="loading" :class="$style.products">
            <FilterProduct :products="products" :is-loading="isLoading" />
            <el-divider class="divider"></el-divider>
            <div :class="$style.pagination">
              <Pagination :total="totalRecord" :page.sync="filters.page" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <SideBarDrawer :visible.sync="visible" :filter.sync="filters.filter" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import Sort from '~/components/pages/category/Sort.vue'
import CategorySideBar from '~/components/pages/category/Sidebar/index.vue'
import { Category, Product } from '~/model/product/product'
import { CategoryFilter, Filter } from '~/model/category/category'
import { findParentCategory, parseQueryString } from '~/utils'
import FilterProduct from '~/components/pages/category/FilterProduct.vue'
import Pagination from '~/components/common/Pagination.vue'
import SideBarDrawer from './Sidebar/SideBarDrawer.vue'
import { RootState } from '~/store/state'
import { EVENT_BUS } from '~/constant/event-bus'

export default Vue.extend({
  components: {
    Breadcrumb,
    Sort,
    CategorySideBar,
    FilterProduct,
    Pagination,
    SideBarDrawer
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data(): {
    filters: CategoryFilter
    products: Product[]
    visible: boolean
    isLoading: boolean
    totalRecord: number
  } {
    return {
      filters: {
        filter: {
          color: [],
          size: [],
          collection: []
        },
        limit: 12,
        page: 1,
        sort: 'newest'
      },
      products: [],
      visible: false,
      isLoading: true,
      totalRecord: 0
    }
  },
  computed: {
    category(): Category | undefined {
      if (this.categories.length === 0) return undefined
      return this.categories.find(
        (category: Category) => category.path === `/${this.slug}`
      )
    },
    categories(): Category[] {
      return (this.$store.state as RootState).categories
    },
    queryFilters(): Filter {
      return parseQueryString(this.$route.query)
    },
    categoryName(): string | undefined {
      return this.category?.name
    },
    breadCrumb(): Category[] {
      if (!this.category) return []
      return findParentCategory(this.categories, this.category.id)
    },
    isMobile(): boolean {
      return this.$mq === 'mobile'
    },
    loading(): boolean {
      if (this.isLoading && this.products.length === 0) return false
      return this.isLoading
    }
  },
  methods: {
    async fetchData() {
      this.isLoading = true
      const { products, total } = await this.$productService.getProducts(
        this.filters
      )
      this.products = products
      this.totalRecord = total
      this.isLoading = false
    },
    changeCategory(categoryId: string) {
      this.filters = {
        ...this.filters,
        filter: {
          ...this.filters.filter,
          category: categoryId
        }
      }
    }
  },
  created() {
    // sync url query params with filters the first time only
    this.filters.filter = this.queryFilters
    if (this.category) {
      this.changeCategory(this.category.id)
    }

    const { sort, page } = this.$route.query
    if (sort) {
      this.filters.sort = sort as string
    }
    if (page) {
      this.filters.page = parseInt(page as string)
    }
  },
  mounted() {
    this.$nuxt.$emit(EVENT_BUS.SCROLL_TOP)
  },
  watch: {
    slug() {
      this.$fetch()
    },
    filters: {
      handler() {
        if (!this.category) return
        this.$router
          .replace({
            query: {
              ...this.filters.filter,
              category: undefined,
              sort: this.filters.sort,
              priceTo:
                this.filters.filter.priceTo === 100
                  ? undefined
                  : this.filters.filter.priceTo,
              page: this.filters.page === 1 ? undefined : this.filters.page
            }
          } as any)
          .catch((error: Error) => {
            if (error.name !== 'NavigationDuplicated') {
              throw error
            }
          })
        this.fetchData()
      },
      deep: true
    },
    category: {
      handler(newVal) {
        this.changeCategory(newVal.id)
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
    .filter {
      margin-left: var(--space);
      cursor: pointer;
    }
  }
  .body {
    margin-top: var(--space);
  }
}
</style>

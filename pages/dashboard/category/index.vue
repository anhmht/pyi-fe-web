<template>
  <div :class="$style.root">
    <div class="container">
      <h1>Category</h1>
      <div :class="$style.category">
        <el-row :class="$style.row" :gutter="24">
          <el-col :md="8">
            <CategoryList :categories="categories" @select="handleEdit" />
          </el-col>
          <el-col :md="16" :class="$style.col">
            <div :class="$style.content">
              <div v-if="!visible" :class="$style.create">
                <el-button type="primary" @click="handleCreate"
                  >Create</el-button
                >
                <div :class="$style.edit">Or select category to edit</div>
              </div>
              <CategoryForm
                v-else
                :visible.sync="visible"
                :categories="categories"
                :category-id="categoryId"
              />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CategoryForm from '~/components/pages/dashboard/category/CategoryForm.vue'
import CategoryList from '~/components/pages/dashboard/category/CategoryList.vue'
import { Category } from '~/model/product/product'

export default Vue.extend({
  components: { CategoryList, CategoryForm },
  name: 'DashboardCategory',
  layout: 'dashboard',
  data(): {
    categories: Category[]
    visible: boolean
    categoryId?: string
  } {
    return {
      categories: [],
      visible: false,
      categoryId: undefined
    }
  },
  async fetch() {
    this.categories = await this.$categoryService.getCategories(true)
  },
  methods: {
    handleEdit(categoryId: string): void {
      this.visible = true
      this.categoryId = categoryId
    },
    handleCreate(): void {
      this.visible = true
      this.categoryId = undefined
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  .category {
    background: #fff;
    border-radius: var(--radius-5);
    padding: var(--space);
    margin-top: var(--space-2x);
  }
  .content {
    width: 100%;
    font-size: 1.3rem;
    .edit {
      margin-top: var(--space);
    }
    .create {
      text-align: center;
    }
  }
  .row {
    display: flex;
  }
  .col {
    align-items: center;
    justify-content: center;
    display: flex;
    border-left: 1px solid #e8e8e8;
  }
}
</style>

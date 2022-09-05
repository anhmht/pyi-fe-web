<template>
  <div :class="$style.root">
    <h2>{{ displayTitle }}</h2>
    <el-form
      :class="$style.form"
      label-position="top"
      :rules="rules"
      :model="form"
      ref="form"
    >
      <el-form-item label="Category Name" prop="name">
        <el-input placeholder="Category name" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Category Parent" prop="parentId">
        <el-select
          :class="$style.select"
          placeholder="Category name"
          v-model="form.parentId"
        >
          <el-option label="Root" :value="undefined"> </el-option>
          <el-option
            v-for="item in categories"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Category Path" prop="path">
        <el-input
          disabled
          placeholder="Category path"
          v-model="displayPath"
        ></el-input>
      </el-form-item>
      <div :class="$style.footer">
        <el-button @click="$emit('update:visible')">Cancel</el-button>
        <el-button type="primary" @click.prevent="handleSubmit">{{
          displayButton
        }}</el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Category } from '~/model/product/product'
import { toLowerCaseNonAccentVietnamese } from '~/utils'

export default Vue.extend({
  props: {
    categories: {
      type: Array as () => Category[],
      required: true
    },
    categoryId: {
      type: String,
      default: undefined
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data(): {
    form: { id?: string; name: string; parentId?: string; path: string }
    isLoading: boolean
    rules: {
      name: Object[]
      path: Object[]
    }
  } {
    return {
      form: {
        name: '',
        parentId: undefined,
        path: ''
      },
      isLoading: false,
      rules: {
        name: [
          {
            required: true,
            message: 'Please input category name',
            trigger: 'change'
          }
        ],
        path: [
          {
            required: true,
            message: 'Required path',
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {
    category(): Category | undefined {
      return this.categories.find((category) => category.id === this.categoryId)
    },
    displayPath(): string {
      if (!this.form.name) return 'https://napricot.com/category/'
      this.form.path = `/${toLowerCaseNonAccentVietnamese(this.form.name)
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )!
        .map((x) => x.toLowerCase())
        .join('-')}`
      return `https://napricot.com/category${this.form.path}`
    },
    displayButton(): string {
      if (this.categoryId) return 'Update'
      return 'Create'
    },
    displayTitle(): string {
      if (this.categoryId) return `Update ${this.form.name}`
      return 'Create Category'
    }
  },
  methods: {
    handleSubmit(): void {
      ;(this as any).$refs.form.validate((valid: boolean) => {
        if (valid) {
          if (this.categoryId) {
            this.updateCategory()
          } else {
            this.handleCreate()
          }
        }
      })
    },

    selectCategory(): void {
      const category = this.categories.find((x) => x.id === this.categoryId)
      if (category) {
        this.form = {
          id: category.id,
          name: category.name,
          parentId: category.parentId,
          path: category.path
        }
      }
    },

    async handleCreate() {
      this.isLoading = true
      try {
        const category = {
          ...this.form
        } as Category
        await this.$categoryService.createCategory(category)
        this.$notify.success({
          title: 'Create Successfully',
          message: `Create category ${this.form.name}`
        })
        this.$emit('submit')
        this.$emit('update:visible', false)
      } catch (error: any) {
        this.isLoading = false
        this.$notify.error({
          title: 'Error',
          message: error.message
        })
      }
    },

    async updateCategory() {
      this.isLoading = true
      try {
        const category = {
          ...this.form
        } as Category
        await this.$categoryService.updateCategory(category, this.category!)
        this.$notify.success({
          title: 'Update Successfully',
          message: `Update category ${this.form.name}`
        })
        this.$emit('submit')
        this.$emit('update:visible', false)
      } catch (error: any) {
        this.isLoading = false
        this.$notify.error({
          title: 'Error',
          message: error.message
        })
      }
    }
  },
  created() {
    this.selectCategory()
  },
  watch: {
    categoryId() {
      this.selectCategory()
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  padding: 0 var(--space);
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  .form {
    margin-top: var(--space-1x5);
  }
  .footer {
    margin-top: var(--space-2x);
    display: flex;
    justify-content: flex-end;
  }
  .select {
    width: 100%;
  }
}
</style>

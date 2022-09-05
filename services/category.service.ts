import { Context } from "@nuxt/types"
import { CATEGORIES, CATEGORIES_CREATE, CATEGORIES_UPDATE } from "~/constant/category"
import { Category } from "~/model/product/product"
import { patch } from "~/utils/json-patch"

const getCategories = async ({ app }: Context, isUpdate: boolean = false): Promise<Category[]> => {
  try {
    const { data } = await app.$api.post(CATEGORIES, { limit: -1, is_update: isUpdate })
    return data.categories as Category[]
  } catch (error) {
    return Promise.reject(error)
  }
}

const createCategory = async ({ app }: Context, category: Category): Promise<void> => {
  try {
    await app.$api.post(CATEGORIES_CREATE, category)
  } catch (error) {
    return Promise.reject(error)
  }
}

const updateCategory = async ({ app }: Context, newCategory: Category, oldCategory: Category): Promise<void> => {
  try {
    newCategory.createdDate = oldCategory.createdDate
    newCategory.modifiedDate = oldCategory.modifiedDate
    oldCategory.modifiedDate = ""
    const request = patch(newCategory, oldCategory)
    await app.$api.patch(CATEGORIES_UPDATE.replace('{id}', oldCategory.id), request)
  } catch (error) {
    return Promise.reject(error)
  }
}

export interface CategoryService {
  getCategories: (isUpdate?: boolean) => Promise<Category[]>
  createCategory: (category: Category) => Promise<void>
  updateCategory: (newCategory: Category, oldCategory: Category) => Promise<void>
}

export const categoryService = (context: Context): CategoryService => {
  return {
    getCategories: (isUpdate?: boolean) => getCategories(context, isUpdate),
    createCategory: (category: Category) => createCategory(context, category),
    updateCategory: (newCategory: Category, oldCategory: Category) => updateCategory(context, newCategory, oldCategory),
  }
}

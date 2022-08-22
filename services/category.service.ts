import { Context } from "@nuxt/types"
import { CATEGORIES } from "~/constant/category"
import { Category } from "~/model/product/product"

const getCategories = async ({ app }: Context, isUpdate: boolean = false): Promise<Category[]> => {
  try {
    const { data } = await app.$api.post(CATEGORIES, { limit: -1, is_update: isUpdate })
    return data.map((item: any) => {
      return {
        id: item.category_id,
        name: item.name,
        path: item.path,
        parentId: item.parent_id,
      } as Category
    })
  } catch (error) {
    return Promise.reject(error)
  }
}


export interface CategoryService {
  getCategories: (isUpdate?: boolean) => Promise<Category[]>
}

export const categoryService = (context: Context): CategoryService => {
  return {
    getCategories: (isUpdate?: boolean) => getCategories(context, isUpdate),
  }
}

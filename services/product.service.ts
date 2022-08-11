import { Context } from "@nuxt/types"
import { PRODUCT } from "~/constant/product"
import { CategoryFilter } from "~/model/category/category"
import { Product } from "~/model/product/product"

const getProducts = async ({ app }: Context, payload: CategoryFilter): Promise<{ product: Product[], total: number }> => {
  try {
    const request = {
      category: [{ category_id: payload.filter.category }],
      colors: payload.filter.color.map(x => ({ color_id: x })),
      price_from: payload.filter.priceFrom,
      price_to: payload.filter.priceTo,
      size: payload.filter.size.map(x => ({ size_id: x })),
      limit: payload.limit,
      page: payload.page,
      sort: payload.sort
    }
    const { data } = await app.$api.post(PRODUCT, request)
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}


export interface ProductService {
  getProducts: (payload: CategoryFilter) => Promise<{ product: Product[], total: number }>
}

export const productService = (context: Context): ProductService => {
  return {
    getProducts: (payload: CategoryFilter) => getProducts(context, payload),
  }
}

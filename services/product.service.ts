import { Context } from "@nuxt/types"
import { COLLECTION, COLOR, PRODUCT } from "~/constant/product"
import { CategoryFilter } from "~/model/category/category"
import { Color, Product, Collection } from "~/model/product/product"

const getProducts = async ({ app }: Context, payload: CategoryFilter): Promise<{ product: Product[], total: number }> => {
  try {
    const request = {
      category: [{ category_id: payload.filter.category }],
      colors: payload.filter.color.map(x => ({ color_id: x })),
      price_from: payload.filter.priceFrom,
      price_to: payload.filter.priceTo,
      sizes: payload.filter.size.map(x => ({ size_id: x })),
      collections: payload.filter.collection.map(x => ({ collection_id: x })),
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

const getColors = async ({ app }: Context): Promise<Color[]> => {
  const { data } = await app.$api.post(COLOR, {})
  return data.map(x => ({
    id: x.color_id,
    name: x.name,
  }) as Color)
}

const getCollections = async ({ app }: Context): Promise<Collection[]> => {
  const { data } = await app.$api.post(COLLECTION, {})
  return data.map(x => ({
    id: x.collection_id,
    name: x.name,
  }) as Collection)
}

export interface ProductService {
  getProducts: (payload: CategoryFilter) => Promise<{ product: Product[], total: number }>
  getColors: () => Promise<Color[]>,
  getCollections: () => Promise<Collection[]>
}

export const productService = (context: Context): ProductService => {
  return {
    getProducts: (payload: CategoryFilter) => getProducts(context, payload),
    getColors: () => getColors(context),
    getCollections: () => getCollections(context)
  }
}

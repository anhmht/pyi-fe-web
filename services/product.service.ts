import { Context } from "@nuxt/types"
import { COLLECTION, COLOR, PRODUCT, PRODUCT_DETAIL, SIZE } from "~/constant/product"
import { CategoryFilter } from "~/model/category/category"
import { Color, Product, Collection, Size } from "~/model/product/product"

const getProducts = async ({ app }: Context, payload: CategoryFilter): Promise<{ product: Product[], total: number }> => {
  try {
    const request = {
      categories: [{ category_id: payload.filter.category }],
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
    return {
      product: data.product.map((x: any) => Product.parseProduct(x)),
      total: data.total
    }
  } catch (error) {
    return Promise.reject(error)
  }
}

const getColors = async ({ app }: Context): Promise<Color[]> => {
  const { data } = await app.$api.post(COLOR, { limit: 20 })
  return data.map(x => ({
    id: x.color_id,
    name: x.name,
  }) as Color)
}

const getSizes = async ({ app }: Context): Promise<Size[]> => {
  const { data } = await app.$api.post(SIZE, { limit: 20 })
  return data.map(x => ({
    id: x.size_id,
    name: x.name,
  }) as Size)
}

const getCollections = async ({ app }: Context): Promise<Collection[]> => {
  const { data } = await app.$api.post(COLLECTION, { limit: 20 })
  return data.map(x => ({
    id: x.collection_id,
    name: x.name,
  }) as Collection)
}

const getProductDetail = async ({ app }: Context, slug: string): Promise<Product> => {
  const { data } = await app.$api.get(PRODUCT_DETAIL.replace("{slug}", slug))
  return Product.parseProduct(data)
}

export interface ProductService {
  getProducts: (payload: CategoryFilter) => Promise<{ product: Product[], total: number }>
  getColors: () => Promise<Color[]>,
  getCollections: () => Promise<Collection[]>,
  getProductDetail: (slug: string) => Promise<Product>
  getSizes: () => Promise<Size[]>
}

export const productService = (context: Context): ProductService => {
  return {
    getProducts: (payload: CategoryFilter) => getProducts(context, payload),
    getColors: () => getColors(context),
    getCollections: () => getCollections(context),
    getProductDetail: (slug: string) => getProductDetail(context, slug),
    getSizes: () => getSizes(context),
  }
}

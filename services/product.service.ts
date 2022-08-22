import { Context } from "@nuxt/types"
import { COLLECTION, COLOR, CUSTOMCAT_PRODUCT, GET_CUSTOMCAT_PRODUCT, PRODUCT, PRODUCT_DETAIL, SIZE } from "~/constant/product"
import { CategoryFilter } from "~/model/category/category"
import { Paging } from "~/model/common/common"
import { Color, Product, Collection, Size, CustomcatProduct } from "~/model/product/product"

const getProducts = async ({ app }: Context, payload: CategoryFilter): Promise<{ products: Product[], total: number }> => {
  try {
    const request = {
      categories: payload.filter.category ? [{ category_id: payload.filter.category }] : [],
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
      products: data.products.map((x: any) => Product.parseProduct(x)),
      total: data.total
    }
  } catch (error) {
    return Promise.reject(error)
  }
}

const getColors = async ({ app }: Context): Promise<{ colors: Color[], total: number }> => {
  const { data } = await app.$api.post(COLOR, { limit: -1 })
  return {
    colors: data.colors.map(x => ({
      id: x.color_id,
      name: x.name,
    }) as Color),
    total: data.total
  }
}

const getSizes = async ({ app }: Context): Promise<{ sizes: Size[], total: number }> => {
  const { data } = await app.$api.post(SIZE, { limit: -1 })
  return {
    sizes: data.sizes.map(x => ({
      id: x.size_id,
      name: x.name,
    }) as Size),
    total: data.total
  }
}

const getCollections = async ({ app }: Context): Promise<{ collections: Collection[], total: number }> => {
  const { data } = await app.$api.post(COLLECTION, { limit: -1 })
  return {
    collections: data.collections.map(x => ({
      id: x.collection_id,
      name: x.name,
    }) as Collection),
    total: data.total
  }
}

const getProductDetail = async ({ app }: Context, slug: string): Promise<Product> => {
  const { data } = await app.$api.get(PRODUCT_DETAIL.replace("{slug}", slug))
  return Product.parseProduct(data)
}

const getCustomcatProducts = async ({ app }: Context, paging: Paging): Promise<{ products: CustomcatProduct[], total: number }> => {
  try {
    const { data } = await app.$api.post(GET_CUSTOMCAT_PRODUCT, paging)
    return {
      products: data.products.map((x: any) => CustomcatProduct.parseProduct(x)),
      total: data.total
    }
  } catch (error) { return Promise.reject(error) }
}

const createCustomcatProduct = async ({ app }: Context, payload: CustomcatProduct): Promise<void> => {
  try {
    const request = {
      product: {
        product_id: payload.id,
        category_id: payload.categoryId,
        description: payload.desc,
        title: payload.title,
        collections: payload.collectionIds?.map(x => ({ collection_id: x })) || [],
      }
    }
    await app.$api.post(CUSTOMCAT_PRODUCT, request)
  } catch (error) { return Promise.reject(error) }
}
export interface ProductService {
  getProducts: (payload: CategoryFilter) => Promise<{ products: Product[], total: number }>
  getColors: () => Promise<{ colors: Color[], total: number }>,
  getCollections: () => Promise<{ collections: Collection[], total: number }>,
  getProductDetail: (slug: string) => Promise<Product>
  getSizes: () => Promise<{ sizes: Size[], total: number }>
  getCustomcatProducts: (paging: Paging) => Promise<{ products: CustomcatProduct[], total: number }>
  createCustomcatProduct: (payload: CustomcatProduct) => Promise<void>
}

export const productService = (context: Context): ProductService => {
  return {
    getProducts: (payload: CategoryFilter) => getProducts(context, payload),
    getColors: () => getColors(context),
    getCollections: () => getCollections(context),
    getProductDetail: (slug: string) => getProductDetail(context, slug),
    getSizes: () => getSizes(context),
    getCustomcatProducts: (paging: Paging) => getCustomcatProducts(context, paging),
    createCustomcatProduct: (payload: CustomcatProduct) => createCustomcatProduct(context, payload),
  }
}

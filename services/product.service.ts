import { Context } from "@nuxt/types"
import { COLLECTION, COLOR, CUSTOMCAT_PRODUCT, GET_CUSTOMCAT_PRODUCT, PRODUCT, PRODUCT_DETAIL, SIZE } from "~/constant/product"
import { CategoryFilter } from "~/model/category/category"
import { Paging } from "~/model/common/common"
import { Color, Product, Collection, Size, CustomcatProduct } from "~/model/product/product"

const getProducts = async ({ app }: Context, payload: CategoryFilter): Promise<{ products: Product[], total: number }> => {
  try {
    const request = {
      categories: payload.filter.category ? [{ categoryId: payload.filter.category }] : [],
      colors: payload.filter.color.map(x => ({ colorId: x })),
      price_from: payload.filter.priceFrom,
      price_to: payload.filter.priceTo,
      sizes: payload.filter.size.map(x => ({ sizeId: x })),
      collections: payload.filter.collection.map(x => ({ collectionId: x })),
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

const getColors = async ({ app }: Context, paging: Paging): Promise<{ colors: Color[], total: number }> => {
  const { data } = await app.$api.post(COLOR, paging)
  return {
    colors: data.colors as Color[],
    total: data.total
  }
}

const getSizes = async ({ app }: Context, paging: Paging): Promise<{ sizes: Size[], total: number }> => {
  const { data } = await app.$api.post(SIZE, paging)
  return {
    sizes: data.sizes as Size[],
    total: data.total
  }
}

const getCollections = async ({ app }: Context, paging: Paging): Promise<{ collections: Collection[], total: number }> => {
  const { data } = await app.$api.post(COLLECTION, paging)
  return {
    collections: data.collections as Collection[],
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
  getColors: (paging: Paging) => Promise<{ colors: Color[], total: number }>,
  getCollections: (paging: Paging) => Promise<{ collections: Collection[], total: number }>,
  getProductDetail: (slug: string) => Promise<Product>
  getSizes: (paging: Paging) => Promise<{ sizes: Size[], total: number }>
  getCustomcatProducts: (paging: Paging) => Promise<{ products: CustomcatProduct[], total: number }>
  createCustomcatProduct: (payload: CustomcatProduct) => Promise<void>
}

export const productService = (context: Context): ProductService => {
  return {
    getProducts: (payload: CategoryFilter) => getProducts(context, payload),
    getColors: (paging: Paging) => getColors(context, paging),
    getCollections: (paging: Paging) => getCollections(context, paging),
    getProductDetail: (slug: string) => getProductDetail(context, slug),
    getSizes: (paging: Paging) => getSizes(context, paging),
    getCustomcatProducts: (paging: Paging) => getCustomcatProducts(context, paging),
    createCustomcatProduct: (payload: CustomcatProduct) => createCustomcatProduct(context, payload),
  }
}

export interface IProduct {
  id: string,
  name: string,
  path: string,
  images: Image[],
  price: number,
  colors?: Color[],
  sizes?: Size[],
  categories: Category[],
  description?: string,
  productDetail?: string
  shippingDetail?: string
  collection?: Collection[],
  rating?: number,
  createdDate?: string,
  modifiedDate?: string,
}

export interface Color {
  id: string
  color: string
  name: string
  hex?: string
  size?: Size[]
  createdDate?: string,
  modifiedDate?: string,
}

export interface Size {
  id: string
  name: string
  disabled: boolean
  price?: number
  quantity?: number
  createdDate?: string,
  modifiedDate?: string,
}

export interface Image {
  src: string
  alt: string
}

export interface Category {
  id: string
  name: string
  path: string
  parentId?: string
  createdDate?: string
  modifiedDate?: string
}

export interface Collection {
  id: string
  name: string
  path: string
  createdDate?: string
  modifiedDate?: string
}

export class Product implements IProduct {
  id: string
  name: string
  path: string
  images: Image[]
  price: number
  colors?: Color[]
  sizes?: Size[]
  categories: Category[]
  description?: string
  productDetail?: string
  shippingDetail?: string
  collection?: Collection[]
  rating?: number
  createdDate?: string
  modifiedDate?: string
  constructor(data: IProduct) {
    this.id = data.id
    this.name = data.name
    this.path = data.path
    this.images = data.images
    this.price = data.price
    this.colors = data.colors
    this.sizes = data.sizes
    this.categories = data.categories
    this.description = data.description
    this.productDetail = data.productDetail
    this.shippingDetail = data.shippingDetail
    this.collection = data.collection
    this.rating = data.rating
    this.createdDate = data.createdDate
    this.modifiedDate = data.modifiedDate
  }

  static parseProduct(data: any): Product {
    return {
      id: data.id,
      name: data.name,
      path: data.path,
      price: data.price,
      productDetail: data.productDetail,
      shippingDetail: data.shippingDetail,
      collection: data.collection?.map(x => ({ ...x, id: x.collectionId })) || [],
      images: data.images,
      categories: data.categories.map(x => ({ ...x, id: x.categoryId, parentId: x.parentId })),
      colors: data.colors.map(x => ({ ...x, id: x.colorId, size: x.size.map(y => ({ ...y, id: y.sizeId })) })),
      description: data.description,
      rating: data.averageStars,
      createdDate: data.createdDate,
      modifiedDate: data.modifiedDate,
    } as Product
  }
}

export class CustomcatProduct {
  id: string
  type?: string
  image?: string
  title: string
  desc: string
  categoryId?: string
  collectionIds?: string[]
  path?: string
  constructor(data: any) {
    this.id = data.id
    this.title = data.title
    this.desc = data.desc
  }

  static parseProduct(data: any): CustomcatProduct {
    return {
      id: data.id,
      type: data.type,
      image: data.imageUrl,
      title: data.title,
      desc: data.description,
    } as CustomcatProduct
  }
}

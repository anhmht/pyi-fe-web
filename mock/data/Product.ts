import { Category, Color, Image, Product, Size } from "~/model/product/product";


export const colors: Color[] = [
  {
    id: '1',
    color: 'black',
    name: 'black'
  },
  {
    id: '2',
    color: 'grey',
    name: 'grey'
  },
  {
    id: '3',
    color: 'white',
    name: 'white'
  },
]

export const sizes: Size[] = [
  {
    id: '1',
    name: 'XXS',
    disabled: true
  },
  {
    id: '2',
    name: 'XS',
    disabled: false
  },
  {
    id: '3',
    name: 'S',
    disabled: false
  },
  {
    id: '4',
    name: 'M',
    disabled: false
  },
  {
    id: '5',
    name: 'L',
    disabled: false
  },
  {
    id: '6',
    name: 'XL',
    disabled: false
  },
  {
    id: '7',
    name: 'XXL',
    disabled: false
  },
]

export const images: Image[] = [
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    alt: 'Front of men\'s Basic Tee in black.'
  },
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    alt: 'Front of men\'s Basic Tee in black.'
  },
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    alt: 'Front of men\'s Basic Tee in black.'
  },
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    alt: 'Front of men\'s Basic Tee in black.'
  },
]

export const categories: Category[] = [
  {
    id: '1',
    name: 'Clothing',
    path: '/clothing'
  },
  {
    id: '2',
    name: 'Men',
    path: '/men',
    parentId: '1'
  },
]

export const products: Product[] = [
  {
    id: "1",
    name: 'Never Underestimate a Women, Who Loves Guinea Pigs and Was Born in Your Birthday',
    path: '/basic-tee',
    images,
    price: 35,
    colors: colors,
    sizes,
    categories
  },
  {
    id: '2',
    name: 'Basic Tee',
    path: '/basic-tee',
    images,
    price: 35,
    colors: colors,
    sizes, categories
  },
  {
    id: '3',
    name: 'Basic Tee',
    path: '/basic-tee',
    images,
    price: 35,
    colors: colors,
    sizes,
    categories
  },
  {
    id: '4',
    name: 'Basic Tee',
    path: '/basic-tee',
    images,
    price: 35,
    colors: colors,
    sizes,
    categories
  },
]



export const categoryFilterProducts: Product[] = [
  {
    id: "1",
    name: 'Never Underestimate a Women, Who Loves Guinea Pigs and Was Born in Your Birthday',
    path: '/basic-tee',
    images,
    price: 35,
    colors: colors,
    sizes,
    categories
  },
  {
    id: '2',
    name: 'Basic Tee',
    path: '/basic-tee',
    images,
    price: 35,
    colors: colors,
    sizes, categories
  },
  {
    id: '3',
    name: 'Basic Tee',
    path: '/basic-tee',
    images,
    price: 35,
    colors: colors,
    sizes,
    categories
  },
  {
    id: '4',
    name: 'Basic Tee',
    path: '/basic-tee',
    images,
    price: 35,
    colors: colors,
    sizes,
    categories
  },
  {
    id: '5',
    name: 'Basic Tee',
    path: '/basic-tee',
    images,
    price: 35,
    colors: colors,
    sizes,
    categories
  },
  {
    id: '6',
    name: 'Basic Tee',
    path: '/basic-tee',
    images,
    price: 35,
    colors: colors,
    sizes,
    categories
  },
  {
    id: '7',
    name: 'Basic Tee',
    path: '/basic-tee',
    images,
    price: 35,
    colors: colors,
    sizes,
    categories
  },
]

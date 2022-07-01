import { Category } from "~/model/product/product";

export const allCategories: Category[] = [
  {
    id: '1',
    name: 'Clothing',
    path: 'clothing'
  },
  {
    id: '2',
    name: 'Men',
    path: 'men',
    parentId: '1'
  },
  {
    id: '3',
    name: 'Women',
    path: 'women',
    parentId: '1'
  },
  {
    id: '4',
    name: 'Home & Living',
    path: 'home-living',
  },
  {
    id: '5',
    name: 'Drink ware',
    path: 'drink-ware',
    parentId: '4'
  },
  {
    id: '6',
    name: 'Mug',
    path: 'mug',
    parentId: '5'
  },
  {
    id: '7',
    name: 'Color Changing Mug',
    path: 'color-changing-mug',
    parentId: '5'
  },
  {
    id: '8',
    name: 'Canvas',
    path: 'canvas',
    parentId: '4'
  },
  {
    id: '9',
    name: 'Poster',
    path: 'poster',
    parentId: '4'
  },
  {
    id: '10',
    name: 'Accessories',
    path: 'accessories',
  },
  {
    id: '11',
    name: 'Case',
    path: 'case',
    parentId: '4'
  },
]

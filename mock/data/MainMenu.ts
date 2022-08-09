import { MainMenu } from "~/model/layout/header";
import { Category } from "~/model/product/product";

export const mainMenus: Category[] = [
  {
    id: '1',
    name: 'Home',
    path: '/'
  },
  {
    id: '2',
    name: 'Clothing',
    path: '/category/clothing'
  },
  {
    id: '3',
    name: 'Home & Living',
    path: '/category/home-living'
  },
  {
    id: '4',
    name: 'Accessories',
    path: '/category/accessories'
  },
]

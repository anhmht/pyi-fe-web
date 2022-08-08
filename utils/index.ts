
import cloneDeep from 'lodash/cloneDeep'
import { Filter } from '~/model/category/category';
import { Category } from '~/model/product/product';
import { v4 as uuidV4 } from 'uuid';

export function listToTree(array: any) {
  if (array.length === 0) return [];
  const list = cloneDeep(array)
  let map = {}, node, roots: any = [], i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId) {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

let result: Category[] = []
export function findParentCategory(list: Category[], id?: string, isFirst: boolean = true): Category[] {
  if (id) {
    const cat = list.find(x => x.id === id)
    if (!isFirst) {
      result.unshift(cat!)
    }
    return findParentCategory(list, cat?.parentId, false)
  } else {
    const array = cloneDeep(result)
    result = []
    return array
  }
}

export const sleep = (duration: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

export const parseArray = (data: any): string[] => {
  if (typeof data === 'string') {
    return data.split(',')
  }
  if (Array.isArray(data)) {
    return data
  }
  return []
}

export const parseNumber = (data: any): number | undefined => {
  if (typeof data === 'string') {
    return parseInt(data, 10)
  }
  if (typeof data === 'number') {
    return data
  }
  return undefined
}

export const parseQueryString = (query: any, slug: string): Filter => {
  const filter: Filter = {
    color: [],
    size: [],
    collection: [],
    category: slug
  }
  if (query.priceFrom) {
    filter.priceFrom = parseNumber(query.priceFrom) || undefined
  }
  if (query.priceTo) {
    filter.priceTo = parseNumber(query.priceTo) || undefined
  }
  if (query.color) {
    filter.color = parseArray(query.color)
  }
  if (query.size) {
    filter.size = parseArray(query.size)
  }
  if (query.collection) {
    filter.collection = parseArray(query.collection)
  }

  return filter
}

export const generateUuid = (): string => {
  return uuidV4();
}

import {
  ItemData,
  ItemReduxData
} from 'utils/api/interfaces/structure';

const itemToReduxType = (item: ItemData): ItemReduxData => {
  return {
    ...item,
    isFolder: !!item.children,
    isLoaded: false,
    isLoading: false,
    isOpen: false,
    children: item.children?.map(child => itemToReduxType(child))
  }
}

export const prepareDir = (item: ItemReduxData, children?: ItemData[]): ItemReduxData => {
  return {
    ...item,
    children: children?.map(itemToReduxType)
  }
} 

export const prepareRootDir = (data: ItemData): ItemReduxData => {
  return itemToReduxType(data)
}
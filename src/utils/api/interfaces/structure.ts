
export interface IStructureResponse extends Promise<ItemData> {
  data: ItemData;
}

export type a = {data: ItemData};

export type ItemData = {
  id: number;
  title: string;
  children: ItemData[] | undefined;
}

export interface ItemReduxData extends ItemData {
  isOpen: boolean;
  isLoading: boolean;
  isLoaded: boolean;
  isFolder: boolean;
  children: ItemReduxData[] | undefined;
}
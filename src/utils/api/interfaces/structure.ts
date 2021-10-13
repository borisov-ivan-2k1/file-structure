export type GetStrunctureResponse = Promise<ItemData>;

export type ItemData = {
  readonly id: number;
  readonly title: string;
  readonly children: ItemData[] | undefined;
}

export interface ItemReduxData extends ItemData {
  isOpen: boolean;
  isLoading: boolean;
  isLoaded: boolean;
  isFolder: boolean;
  readonly children: ItemReduxData[] | undefined;
}
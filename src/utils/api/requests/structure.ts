import { BASE_URL } from '../../constants';
import { ItemData, GetStrunctureResponse } from '../interfaces/structure';

export const getStructure = (dirId?: number): GetStrunctureResponse =>
  fetch(`${BASE_URL}/content?dirId=${dirId || ''}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText)
      return response.json().then((data: ItemData) => data);
    })
import { BASE_URL } from '../../constants';
import { IStructureResponse } from '../interfaces/structure';

export const getStructure = (dirId?: number): Promise<IStructureResponse> =>
  fetch(`${BASE_URL}/content?dirId=${dirId || ''}`);
import {FETCH_DATA_CASE} from './types';

export const fetchDaTaCase = (data: any) => ({
  type: FETCH_DATA_CASE,
  payload: data,
});

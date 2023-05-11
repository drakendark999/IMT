import {FETCH_DATA_CASE} from './types';

export const fetchDaTaCase = (data: []) => ({
  type: FETCH_DATA_CASE,
  payload: data,
});

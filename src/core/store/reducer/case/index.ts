import {FETCH_DATA_CASE, CaseActionType} from './types';

const initialState = {
  data: [],
};

export const caseReducer = (state = initialState, action: CaseActionType) => {
  switch (action.type) {
    case FETCH_DATA_CASE: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

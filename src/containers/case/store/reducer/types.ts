export const FETCH_DATA_CASE = 'FETCH_DATA_CASE';

export interface FetchCaseAction {
    type : typeof FETCH_DATA_CASE,
    payload:[]
}

export type CaseActionType = FetchCaseAction
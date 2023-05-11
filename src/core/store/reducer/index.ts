import { combineReducers } from 'redux';
import { caseReducer } from '../../../containers/case/store/reducer'; 
export const rootReducer = combineReducers({
    case:caseReducer
})
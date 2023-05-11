import CaseService from '../../../../core/services/case.service';
import {fetchDaTaCase} from '../../../../core/store/reducer/case/action';
import {ThunkActionTypes} from '../../../../core/store/thunk/types';


export const onThunkCase = (): ThunkActionTypes => async dispatch => {
  const exampleService = new CaseService();

  try {
    const res  = await exampleService.getCase();
    
      if (res) {
        dispatch(fetchDaTaCase(res));
      } 
  } catch (e) {
    console.log(e);
  }
};

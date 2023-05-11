import {database} from '../../../config/connect';
import {ref, push, set, onValue} from 'firebase/database';

export default class ApiService {
  protected apiGet<T>(url: string): Promise<T> {
    return this.apiRun<T>(url);
  }

  private apiRun<T>(url: string): Promise<T> {
    

    return new Promise<T>((resolve, reject) => {
      const dataRef = ref(database, url);
      onValue(dataRef, snapshot => {
        const data = snapshot.val();
        const dataArray = Object.values(data);
        resolve(dataArray as T)
        console.log('Data array:', dataArray);
      });
    });
  }
}

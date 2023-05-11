import ApiService from './api.service';
import { API_CASE } from '../../../config';
export default class CaseService extends ApiService {
    public getCase() {
        return this.apiGet(API_CASE)
    }
}

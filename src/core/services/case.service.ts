import ApiService from './api.service';

export default class CaseService extends ApiService {
    public getCase() {
        return this.apiGet('/case')
    }
}

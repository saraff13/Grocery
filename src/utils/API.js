import axios from 'axios';

export default class API {
  baseURL = 'https://reqres.in/api/';

  call({type = 'get', apiEndPoint, params = undefined}) {
    return axios[type](this.baseURL + apiEndPoint, params);
  }
}

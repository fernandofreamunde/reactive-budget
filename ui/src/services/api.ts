import Axios, { AxiosInstance, AxiosResponse } from "axios";

interface Endpoint {
  url: string,
  data?: object
}
class Api {
  private api: AxiosInstance;
  private token: string;

  constructor() {
    this.api = Axios.create({
      baseURL: 'http://localhost:3333'
    });
    this.token = '';
  }

  /**
   * setToken
   */
  public setToken(token:string) {
    this.token = token;
  }

  /**
   * doPost
   */
  public async doPost(target:Endpoint) 
  {
    const response = await this.api.post(target.url, target.data);

    this.refreshToken(response);
    return response;
  }

  /**
   * doPut
   */
  public async doPut(target:Endpoint) 
  {
    const response = await this.api.put(target.url, target.data);

    this.refreshToken(response);
    return response;
  }

  /**
   * doDelete
   */
  public async doDelete(target:Endpoint) 
  {
    const response = await this.api.delete(target.url);

    this.refreshToken(response);
    return response;
  }

  /**
   * doPost
   */
  public async doGet(target:Endpoint)
  {
    const response = await this.api.get(target.url,{
      headers: {
        Authorization: 'Bearer ' + this.token
      }
     });

    this.refreshToken(response);
    return response;
  }

  private refreshToken(response: AxiosResponse) 
  {  
    if (response.headers['new-token'] !== undefined) {
      this.setToken(response.headers['new-token']);
    }
  }
}

const api = new Api();
export default api;

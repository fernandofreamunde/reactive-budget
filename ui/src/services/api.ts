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
    this.token = this.getTokenFromCookie();
  }

  /**
   * setToken
   */
  public setToken(token:string) {
    this.token = token;
    this.setTokenOnCookie(token);
  }

  /**
   * getToken
   */
  public getToken() {
    return this.token;
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
      this.setTokenOnCookie(response.headers['new-token']);
    }
  }

  //Copied from w3schools
  private getTokenFromCookie() 
  {
    const name = 'token=';
    const rawArray = document.cookie.split(';');
    for(let i = 0; i < rawArray.length; i++) {
      let c = rawArray[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }

    console.log('Token not found on cookies!');
    return '';
  }

  private setTokenOnCookie(token:string) {
    document.cookie = 'token=' + token + ';';
  }
}

const api = new Api();
export default api;

import api from "./api";


interface LoginData {
  email: string,
  password: string
}

export default class AccountResource {
  
  /**
   * login
   */
  public async login(input: LoginData) {
    const response = await api.doPost({url:'account/login', data:input});
    api.setToken(response.data.token);
  }

  /**
   * register
   */
  public async register(input: LoginData) {
    return await api.doPost({url:'account/registration', data:input});
  }
}
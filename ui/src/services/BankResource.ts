import api from "./api";

export default class BankResource {
  
  /**
   * listBanks
   */
  public async listBanks() {
    return await api.doGet({url:'/bank'});
  }
}
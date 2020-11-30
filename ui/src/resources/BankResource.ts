import api from "../services/api";

interface BankInput {
	id: string,
	name: string,
	shortName: string,
	createdAt: string,
	updatedAt: string,
}

export default class BankResource {

  private id?: string;
  private name?: string;
	private shortName?: string;
	private createdAt?: string;
  private updatedAt?: string;

  constructor(bank?: BankInput) {

    if (bank !== undefined) {

      this.id = bank.id;
      this.name = bank.name;
      this.shortName = bank.shortName;
      this.createdAt = bank.createdAt;
      this.updatedAt = bank.updatedAt;
    }
  }
  
  /**
   * listBanks
   */
  public async list() 
  {
    let banks:Array<BankResource> = [];

    const response = await api.doGet({url:'/bank'});

    banks = response.data.map((element:BankInput) => {
      return this.createFromResponse(element);
    });

    return banks;
  }

  /**
   * createBank
   */
  public async create() {
    const response = await api.doPost({url:'/bank', data:this.forApi()});
    return this.createFromResponse(response.data);
  }

  /**
   * updateBank
   */
  public async update() {
    const response = await api.doPut({url:'/bank/' + this.id, data:this.forApi()});
    return this.createFromResponse(response.data);
  }

  /**
   * deleteBank
   */
  public async delete() {
    return await api.doDelete({url:'/bank/' + this.id});
  }

  /**
   * getId
   */
  public getId() {
    return this.id;
  }

  /**
   * getName
   */
  public getName() {
    return this.name;
  }


  /**
   * getShortName
   */
  public getShortName() {
    return this.shortName;
  }


  private createFromResponse(input: BankInput) 
  {
    return new BankResource(input);
  }

  private forApi() 
  {
    return {
      id: this.id,
      name: this.name,
      shortName: this.shortName,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }
}

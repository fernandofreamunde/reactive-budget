import Account from "../Entity/Account";

class currentAccountHelper {
    
    private account: Account;

    public setAccount(account:any) {
        this.account = <Account> account;
    }

    /**
     * getAccount
     */
    public getAccount() {
        return this.account;
    }
}

const currentAccount = new currentAccountHelper();

export default currentAccount;
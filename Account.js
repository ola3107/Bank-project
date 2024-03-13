// for Bankaccount
function BankAccount() {
    this.accounts = {};
    this.currentId = 9876543211 ;
}

BankAccount.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

BankAccount.prototype.addAccounts = function (account) {
    account.id = this.assignId();
    this.accounts[account.id] = account;
};


BankAccount.prototype.findAccount = function (id) {
    if (this.accounts[id] !== undefined) {
        return this.accounts[id];
    }
    return false;
};


BankAccount.prototype.deleteAccount = function (id) {
    if (this.accounts[id] === undefined) {
        return false;
    }
    delete this.accounts[id];
    return true;
};

export let bank = new BankAccount();

export function deposit(accountid, amount) {
  const account = bank.findAccount(accountid);
  account.deposit(amount);
  console.log(account)
}

export function withdraw(accountid, amount) {
  const account = bank.findAccount(accountid);
  account.withdraw(amount);
  console.log(account)
}

export function transfer(senderid, recieverid, amount) {
  const account1 = bank.findAccount(senderid);
  const account2 = bank.findAccount(recieverid);
  account1.withdraw(amount);
  account2.deposit(amount);

  console.log(account1)
  console.log(account2)

}













// create account class
export class Account {
  constructor(name, balance, type) {
    this.name = name;
    this.balance = balance;
    this.type = type;
  }

  deposit(amount) {
    let initial = parseInt(this.balance);
    let deposit = parseInt(amount);
    this.balance = deposit + initial;
    return this.balance
  }

  withdraw(amount) {
    let initial = parseInt(this.balance);
    let withdrawal = parseInt(amount);
    this.balance = initial - withdrawal;

    if (amount > this.balance) {
      return "Insufficient funds";
    }
    
  }
}





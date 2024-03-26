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

export function displayAccountDetails(bankToDisplay) {
    let accountList = document.querySelector("ul#accountList");
    let htmlForAccountInfo = "";
    Object.keys(bankToDisplay.accounts).forEach(function (key) {
        const account = bankToDisplay.findAccount(key);
        htmlForAccountInfo += "<li id='" + account.id + "'>" + capitalizeFirstLetter(account.name) + "</li>";
    });
    accountList.innerHTML = htmlForAccountInfo;
}

function capitalizeFirstLetter(string) {
   return string.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');

}

export function showAccount(accountId) {
  const account = bank.findAccount(accountId);
  let detail = document.querySelector('.bank-account-info')
  detail.style.display = "block";
  document.querySelector('#account-name').innerHTML = capitalizeFirstLetter(account.name)
  document.querySelector('#account-number').innerHTML = account.id
  document.querySelector('#account-type').innerHTML = account.type
  document.querySelector('#account-balance').innerHTML = account.balance
  
  let buttons = document.getElementById("button");
    
  buttons.innerHTML = "";
  let button = document.createElement("button");
  button.className = "deleteButton";
  button.id = account.id;
  button.textContent = "Delete Acc";

  buttons.appendChild(button);
}

export function attachAccountListeners() {
  let accountsList = document.getElementById("accountList");
  accountsList.addEventListener("click", function(event) {
    showAccount(event.target.id);
  });

  let buttons = document.getElementById("button");
  buttons.addEventListener("click", function(event) {
    bank.deleteAccount(event.target.id);
    displayAccountDetails(bank);
    let detail = document.querySelector('.bank-account-info')
    detail.style.display = "none";
  });
}



export function deposit(accountid, amount) {
  const account = bank.findAccount(accountid);
  const success = document.querySelector(".success-alert");   
  
  if(account){
    account.deposit(amount);
    success.style.display = "block";
    setTimeout(function () {
      success.style.display = "none";
    }, 5000);

    return success
  }
}

export function withdraw(accountid, amount) {
  const account = bank.findAccount(accountid);
  account.withdraw(amount);
  console.log(account)
}

export function transfer(senderid, recieverid, amount) {
  const account1 = bank.findAccount(senderid);
  const account2 = bank.findAccount(recieverid);
  let senderBalance = account1.balance
  const error = document.querySelector(".error-alert");
  const success = document.querySelector(".success-alert");   
  

  if(amount > senderBalance){
    error.style.display = "block";
      setTimeout(function () {
        error.style.display = "none";
      }, 5000);
      return error
  }else {
    account1.withdraw(amount);
    account2.deposit(amount);
    success.style.display = "block";
      setTimeout(function () {
        success.style.display = "none";
      }, 5000);

      return success
  }
 

}













// create account class
const error = document.querySelector(".error-alert");
const success = document.querySelector(".success-alert");
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
      error.style.display = "block";
      setTimeout(function () {
        error.style.display = "none";
      }, 5000);
      return error
     
    }else {
      success.style.display = "block";
      setTimeout(function () {
        success.style.display = "none";
      }, 5000);

      return success
    }
    
  }
}





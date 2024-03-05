/* create account */
function Bankaccount() {
    this.account = [];
    this.currentId = 9023432031;
}

Bankaccount.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

Bankaccount.prototype.addAccount = function(account) {
    account.id = this.assignId()
    this.account.push(account);
}

Bankaccount.prototype.findAccount = function(id) {
    for (let i = 0; i < this.account.length; i++) {
        if (this.account[i]) {
            if (this.account[i] && this.account[i].id == id) {
                return this.account[i];
            }
        }
    }
    return false;
}

Bankaccount.prototype.deleteAccount = function(id) {
    for (let i = 0; i < this.account.length; i++) {
        if (this.account[i]) {
            if (this.account[i].id == id) {
                delete this.account[i];
                return true;
            }
        }
    }
    return false;
}




/* account */
function Account(name, balance, type) {
    this.name = name;
    this.balance = balance;
    this.type = type;
}

Account.prototype.depositMoney = function(amount) {
    this.balance = parseInt(amount);
}

Account.prototype.withdrawMoney = function(amount) {
    this.balance -= +(amount);
}


//user interface logic


function displayAccountDetails(bankToDisplay) {
    let accountList = document.querySelector(".account-list");
    let htmlForAccountInfo = "";
    Object.keys(bankToDisplay.account).forEach(function(key) {
        let accountUser = bankToDisplay.findAccount(key);
        htmlForAccountInfo += "<li id=" + accountUser.id + ">" + accountUser.name + "</li>";
    });
    accountList.innerHTML = htmlForAccountInfo;
}

let bank = new Bankaccount();

function showAccount(accountId) {
    const account = bank.findAccount(accountId);
   // document.querySelector(".bank-account-info").computedStyleMap.display = "block";
    let element = document.querySelector(".bank-account-info");
    element.style.display = "block";
    document.getElementById("account-name").innerHTML = account.name;
    document.getElementById("account-number").innerHTML = account.id;
    document.getElementById("account-balance").innerHTML = account.balance;
    document.getElementById("account-type").innerHTML = account.type;

   
    
    let buttons = document.querySelector("#button");
   /*  buttons.createElement(button)
    button.
    
    buttons.append("<button class='deleteButton' id=" + account.id + ">Delete</button>"); */
}

function attachAccountListeners() {
    document.querySelector("ul.account-list").addEventListener("click", function() {
        showAccount(this.id);
    });

    document.querySelector(".bank-account-info").addEventListener("click", function() {
        bank.deleteAccount(this.id);
        document.querySelector(".bank-account-info").style.display = "none";
        displayAccountDetails(bank);
    });
}













export { bank, Account, displayAccountDetails, showAccount, attachAccountListeners};

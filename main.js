import "./style.css";
import { showSidebar, hideSidebar } from "./menu.js";
import {
  bank,
  Account,
  deposit,
  withdraw,
  transfer,
  displayAccountDetails,
  attachAccountListeners,
} from "./Account.js";

/* -------header------- */
document.querySelector("#head").innerHTML = `
  <nav>
    <div class="logo">
      <h1>Bank<span>Free</span></h1>
      <p>Bank For Free</p>
    </div>
    <ul>
      <li><a href="./bank_pro/index.html">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#features">Features</a></li>
      <li class="dropdown">
        <a href="#" class="dropbtn">Product <i class="ri-arrow-down-s-fill"></i></a>
        <ul class="dropdown-content">
          <li><a href="/loan.html">Loan</a></li>
          <li><a href="/Savings-account.html">Saving & current</a></li>
          <li><a href="/Product/credit">Credit-card</a></li>
        </ul>
      </li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="btn desktop">
      <button class="btn1">Sign in</button>
      <button class="btn2">Login</button>
    </div>
    <div class="open-sidebar"><i class="ri-menu-line"></i></div>
    
    <ul class="sidebar">
      <div class="close-sidebar"><i class="ri-close-fill"></i> </div>
      <li><a href="./bank_pro/index.html">Home</a></li>
      <li><a href="./Bank_pro/index.html/#about">About</a></li>
      <li><a href="./Bank_pro/index.html/#features">Features</a></li>
      <li class="dropdown"><a href="/product.html">Product</a></li>
      <li><a href="./Bank_pro/index.html/#contact">Contact</a></li>
    
      <div class="btn">
        <button class="btn1">Sign in</button>
        <button class="btn2">Login</button>
      </div>
    </ul>
  </nav>
`;
head.querySelector(".open-sidebar").addEventListener("click", showSidebar);
head.querySelector(".sidebar").addEventListener("click", hideSidebar);
/* --------footer-------- */
document.querySelector("#footer").innerHTML = `
<div class="footer__container">
  <div class="footer__content">
    <h1>BankFree</h1>
    <p>Bank free is a free bank for everyone</p>
    <i class="ri-bank-line bank-icon bank-icon"></i>
  </div>
  <div class="footer__content">
    <h3>Quick link</h3>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="">sign up</a></li>
    </ul>
  </div>
  <div class="footer__content">
    <h3>Support</h3>
    <ul>
      <li>Help</li>
      <li>FAQ</li>
      <li>Privacy</li>
      <li>Terms</li>
    </ul>
  </div>
  <div class="footer__content">
    <h3>Sign Up To Our Newsletter</h3>
    <p>Get the latest news and updates from Bank free</p>
    <form action="">
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </form>

    <div class="icons">
      <a href=""><i class="ri-twitter-x-line"></i></a>
      <a href=""><i class="ri-facebook-circle-fill"></i></a>
      <a href=""><i class="ri-whatsapp-fill"></i></a>
      <a href=""><i class="ri-instagram-fill"></i></a>
    </div>
  </div>
</div>

<div class="footer__bottom">
  <p>Design with <i class="ri-service-fill"></i> by <a href=""> Olasunkanmi</a></p>
  <p>&copy; 2024 Bank free. All rights reserved</p>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
  attachAccountListeners();

  const form = document.querySelector("#create-account");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#Name").value;
    const balance = document.querySelector("#deposit").value;
    const type = document.querySelector("#type").value;

    document.querySelector("#Name").value = "";
    document.querySelector("#deposit").value = "";
    document.querySelector("#type").value = "";

    const account = new Account(name, balance, type);
    bank.addAccounts(account);
    displayAccountDetails(bank);
    let welcome = document.querySelector(".welcome-alert");
    welcome.style.display = "block";
    setTimeout(function () {
      welcome.style.display = "none";
    }, 5000);
  });

  const depositMoney = document.querySelector("#deposit-form");
  depositMoney.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.querySelector("#accountNumber").value;
    const amount = document.querySelector("#amount").value;

    document.querySelector('#accountNumber').value = ''
    document.querySelector('#amount').value = ''

    deposit(id, amount);
    console.log(amount);
    /* const account = bank.findAccount(id);
    account.deposit(amount);
    console.log(account); */
  });

  const withdrawMoney = document.querySelector("#withdraw-form");
  withdrawMoney.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.querySelector("#withdraw-account-number").value;
    const amount = document.querySelector("#withdraw-amount").value;

    document.querySelector('#withdraw-account-number').value = ''
    document.querySelector('#withdraw-amount').value = ''
    withdraw(id, amount);
    /* const account = bank.findAccount(id);
    account.withdraw(amount);
    console.log(account); */
  });

  const transferMoney = document.querySelector("#transfer-form");
  transferMoney.addEventListener("submit", (e) => {
    e.preventDefault();
    const id1 = document.querySelector("#sender-account-number").value;
    const id2 = document.querySelector("#reciever-account-number").value;
    const amount = document.querySelector("#transfer-amount").value;

    document.querySelector("#sender-account-number").value = ''
    document.querySelector("#reciever-account-number").value = ''
    document.querySelector("#transfer-amount").value = ''

    transfer(id1, id2, amount);
    /* const account1 = bank.findAccount(id1);
    const account2 = bank.findAccount(id2);
    account1.withdraw(amount);
    account2.deposit(amount);

    console.log(account1)
    console.log(account2) */
  });

  document.getElementById('deposit-btn').addEventListener('click', function() {
    document.querySelector('.deposit').style.display = 'block'
    document.querySelector('.withdraw').style.display = 'none'
    document.querySelector('.transfer').style.display = 'none'
  });

  document.getElementById('withdraw-btn').addEventListener('click', function() {
    document.querySelector('.withdraw').style.display = 'block'
    document.querySelector('.deposit').style.display = 'none'
    document.querySelector('.transfer').style.display = 'none'
  });

  document.getElementById('transfer-btn').addEventListener('click', function() {
    document.querySelector('.transfer').style.display = 'block'
    document.querySelector('.deposit').style.display = 'none'
    document.querySelector('.withdraw').style.display = 'none'
  });
  
});

/* let account = new Account('Olasunkanmi', 1000, 'savings');
bank.addAccounts(account);

let account1 = new Account('deji', 1000, 'savings');

let account4 = new Account('dayo', 1000, 'savings');
bank.addAccounts(account4);


let id = 9876543212
let id2 = 9876543213



let account2 = bank.findAccount(id);

account2.deposit(6000);
console.log(account2);
console.log(account1);

account2.withdraw(2000);
console.log(account2); */

import './style.css'
import { showSidebar, hideSidebar } from './menu.js'
import { bank, Account, displayAccountDetails, showAccount, attachAccountListeners } from './Account.js'

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
          <li><a href="/Product/loan">Loan</a></li>
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
`
head.querySelector('.open-sidebar').addEventListener('click', showSidebar)
head.querySelector('.sidebar').addEventListener('click', hideSidebar)
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
`
document.addEventListener('DOMContentLoaded', () => {
  
  const form = document.querySelector('#create-account');
  attachAccountListeners();
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#Name').value;
    const balance = document.querySelector('#deposit').value;
    const type = document.querySelector('#type').value;

    document.querySelector('#Name').value = '';
    document.querySelector('#deposit').value = '';
    document.querySelector('#type').value = '';
    

    const account = new Account(name, balance, type);
    bank.addAccount(account);
    displayAccountDetails(bank);
    document.querySelector('.welcome-alert').style.display = 'block';
    setTimeout(() => {
      document.querySelector('.welcome-alert').style.display = 'none';
    }, 5000);
  });

  const deposit = document.querySelector('#deposit-form');
  deposit.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = parseInt(document.querySelector('#account-number').value);
    const amount = parseInt(document.querySelector('#amount').value);

    document.querySelector('#account-number').value = '';
    document.querySelector('#amount').value = '';

    const account = bank.findAccount(id);
    if(account !== false) {
      account.depositMoney(amount);
      console.log(account);
    } else {
      console.log('Account not found for id: ', id);
    }
  
  });

  const withdraw = document.querySelector('#withdraw-form');
  withdraw.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = parseInt(document.querySelector('#withdraw-account-number').value);
    const amount = parseInt(document.querySelector('#withdraw-amount').value);
   
    document.querySelector('#withdraw-account-number').value = '';
    document.querySelector('#withdraw-amount').value = '';

   const account = bank.findAccount(id);
   if(account) {
     account.withdrawMoney(amount);
     console.log(account);
   } else {
     console.log('Account not found for id: ', id);
   }
  
  });

  const transfer = document.querySelector('#transfer-form');
  transfer.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = parseInt(document.querySelector('#sender-account-number').value);
    const id2 = parseInt(document.querySelector('#reciever-account-number').value);
    const amount = parseInt(document.querySelector('#transfer-amount').value);
   
    document.querySelector('#sender-account-number').value = '';
    document.querySelector('#reciever-account-number').value = '';
    document.querySelector('#transfer-amount').value = '';

   const sender = bank.findAccount(id);
   const reciever = bank.findAccount(id2);
   if(sender && reciever) {
     sender.withdrawMoney(amount);
     reciever.depositMoney(amount);
     console.log(sender);
     console.log(reciever);
   } else {
     console.log('Account not found for id: ', id);
   }
  
  });

  


});







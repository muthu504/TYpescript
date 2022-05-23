/**
 * 8.	Classes & Modules: Write a class Account with attributes id, name, balance.
 */
 class Account{
    constructor(id,name,balance){
        this.id=id;
        this.name= name;
        this.balance = balance;
    }
}
class SavingAccount extends Account{
   constructor(id,name,balance,interest){
          super(id,name,balance);
          this.interest  = interest;
   }
   getBalance(){
       this.totalBalance=0;
       this.totalBalance = this.balance + (this.balance*this.interest);
       return this.totalBalance;
   }
}

class CurrentAccount extends Account{
   constructor(id,name,balance,cash_credit){
          super(id,name,balance);
          this.cash_credit  = cash_credit;
   }
   getBalance(){
       this.totalBalance=0;
       this.totalBalance = this.balance -this.cash_credit;
       return this.totalBalance;
   }
}

SavingAccountObj = new SavingAccount(1,"Vagdevi",99000,22000);
console.log(SavingAccountObj.getBalance())

CurrentAccountObj = new CurrentAccount(2,"Bindhu",88000,5500);
console.log(CurrentAccountObj.getBalance())
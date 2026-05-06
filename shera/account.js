function createBankAccount (){
    let balance = 500;
    const user = {
        deposit: function (amount){
            if(typeof amount==="number" && amount>0){
                balance+=amount;
            }
        },
         withdraw: function (amount){
            if(typeof amount==="number" && amount>=amount){
                balance-=amount;
            }
        },
        getBalance: function(){
            return balance;
        }
    }
}

const customer = createBankAccount();
console.log(customer.deposit(500));

// ES6 class 
// Bank Example

class Bank {

    constructor(fullNm, accNO, bal) {

        this.fullName = fullNm
        this.accountNum = accNO
        this.balance = bal
        this.transaction = []

    }

    deposit(amt) {

        this.balance = this.balance + amt
        this.transaction.push(amt)

        return this.balance
    }

    withdraw(amt) {

        if (amt < this.balance) {

            this.balance = this.balance - amt
            this.transaction.push(-amt)

            return this.balance
        }
        else {

            console.log(`Insufficient amount ${this.balance}`);
        }
    }

    lastFiveTransation() {

        return this.transaction.slice(-5);
    }

    totalBalance() {

        return this.balance
    }

}

// object creation

let atul = new Bank("Atul Mahajan", "32411500704", 1000);

atul.deposit(500);
atul.withdraw(700)
atul.deposit(100)
atul.withdraw(500)
atul.deposit(1000)
atul.withdraw(400)

console.log(atul.lastFiveTransation());
console.log(atul.totalBalance());//  return remaning balance of account




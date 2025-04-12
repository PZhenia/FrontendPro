  class BankAccount {
    #balance = 0;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if(amount < 0) {
            return;
        }
        this.#balance += amount;
    }

    withdraw(amount) {
        if(amount > this.#balance || amount <= 0) {
            return;
        }
        this.#balance -= amount;
    }
  }

  const account1 = new BankAccount(1000);

  console.log(account1.getBalance());
  account1.deposit(500);
  console.log(account1.getBalance());
  account1.withdraw(200);
  console.log(account1.getBalance());
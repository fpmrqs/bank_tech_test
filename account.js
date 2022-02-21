class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.#validateTransaction(amount)
    this.balance += amount;
  }

  withdrawl(amount) {
    this.#validateTransaction(amount)
    this.balance -= amount;
  }

  #validateTransaction(amount) {
    if (typeof amount !== 'number' || amount < 0) {
      throw new Error("Please use a positive interger for money transacitons");
    }
  }
}

module.exports = Account
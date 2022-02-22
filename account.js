const Statement = require("./statement");
const Transaction = require("./transaction");

class Account {
  constructor(statement = new Statement(), transaction = Transaction) {
    this.transaction = transaction;
    this.statement = statement;
    this.balance = 0;
  }

  deposit(amount) {
    this.#validateTransaction(amount);
    this.balance += amount;
    this.statement.addTransaction(
      new this.transaction({ deposit: amount, balance: this.balance })
    );
  }

  withdrawl(amount) {
    this.#validateTransaction(amount);
    this.balance -= amount;
    this.statement.addTransaction(
      new this.transaction({ withdrawl: amount, balance: this.balance })
    );
  }

  #validateTransaction(amount) {
    if (typeof amount !== "number" || amount < 0) {
      throw new Error("Please use a positive interger for money transactions");
    }
  }
}

module.exports = Account;

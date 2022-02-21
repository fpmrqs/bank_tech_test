class Transaction {
  constructor(name) {
    this.name = name;
    this.date = Date.now;
  }
}

module.exports = Transaction;
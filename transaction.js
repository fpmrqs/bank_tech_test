class Transaction {
  constructor({ deposit = null, withdrawl = null, balance }) {
    this.deposit = deposit;
    this.withdrawl = withdrawl;
    this.balance = balance;
    this.date = this.#set_transaction_date();
  }

  #set_transaction_date() {
    const today = new Date();

    return (
      ("0" + today.getDate()).slice(-2) + "/" +
      ("0" + (today.getMonth() + 1)).slice(-2) + "/" +
      today.getFullYear()
    );
  }
}

module.exports = Transaction;

class Statement {
  constructor() {
    this.transactions = [];
    this.header = "date || credit || debit || balance\n";
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  print() {
    let printedStatement = this.header;
    this.transactions.forEach((transaction) => {
      printedStatement += `${transaction.date} || ${transaction.deposit} || ${transaction.withdrawl} || ${transaction.balance}\n`;
    });
    
    console.log(printedStatement);
  }
}

module.exports = Statement;

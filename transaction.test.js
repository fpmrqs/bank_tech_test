const Transaction = require("./transaction.js")

describe("Transaction class", () => {

  
  it("records name of each transaction", () => {
    const transaction = new Transaction({ deposit: 100, balance: 100 })
    expect(transaction.deposit).toEqual(100)
  });

  it("records time of each transaction", () => {
    const transaction = new Transaction({ deposit: 100, balance: 100 })
    expect(transaction.date).toEqual("21/02/2022")
  })
});
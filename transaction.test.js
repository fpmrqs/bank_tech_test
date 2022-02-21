const Transaction = require("./transaction.js")

describe("Transaction class", () => {

  
  it("records name of each transaction", () => {
    const transaction = new Transaction("deposit")
    expect(transaction.name).toEqual("deposit")
  });

  it("records time of each transaction", () => {
    const transaction = new Transaction("deposit")
    expect(transaction.date).toEqual("21/02/2022")
  })
});
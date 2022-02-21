const Transaction = require("./transaction.js")

describe("Transaction class", () => {
  it("records name of each transaction", () => {
    const transaction = new Transaction("deposit")
    expect(transaction.name).toEqual("deposit")
  });
});
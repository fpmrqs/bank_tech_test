const Statement = require("./statement.js")

describe("Statement class", () => {
  const statement = new Statement

  it("prints the correct table format", () => {
    expect(statement.print()).toEqual (
      "date || credit || debit || balance\n" +
      "|| || ||"
    )
  });

  it("prints deposit transactions", () => {
    
  });
});
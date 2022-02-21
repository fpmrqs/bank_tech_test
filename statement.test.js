const Statement = require("./statement.js");

describe("Statement class", () => {
  it("prints the correct table format", () => {
    const statement = new Statement();

    expect(statement.print()).toEqual(
      "date || credit || debit || balance\n"
    );
  });

  it("prints deposit transaction with date", () => {
    const statement = new Statement();
    statement.addTransaction({
      deposit: 100,
      withdrawl: "",
      balance: 100,
      date: "17/07/2014",
    });

    expect(statement.print()).toEqual(
      "date || credit || debit || balance\n" + "17/07/2014 || 100 ||  || 100"
    );
  });
});

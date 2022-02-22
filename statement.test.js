const Statement = require("./statement.js");

describe("Statement class", () => {
  it("prints the statement table header", () => {
    const statement = new Statement();
    console.log = jest.fn();
    statement.print()

    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance\n"
    );
  });

  it("prints header + transactions with date", () => {
    const statement = new Statement();
    statement.addTransaction({
      deposit: 100,
      withdrawl: "",
      balance: 100,
      date: "17/07/2014",
    });

    console.log = jest.fn();
    statement.print()

    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance\n" + "17/07/2014 || 100 ||  || 100\n"
    );
  });
});

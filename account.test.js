const Account = require("./account.js");

describe("Account class", () => {
  const account = new Account();

  it("adds to the balance via a deposit method", () => {
    account.deposit(500);
    expect(account.balance).toEqual(500);
  });

  it("deposit function only accepts positive intergers", () => {
    expect(() => account.deposit(-100)).toThrow(
      "Please use a positive interger for money transactions"
    );
    expect(() => account.deposit("loads of money")).toThrow(
      "Please use a positive interger for money transactions"
    );
  });

  it("can only withdrawl if there is oney enough balance", () => {
    expect(() => account.withdrawl(1000)).toThrow(
      "Not enough funds in the account!"
    );
  });

  it("deducts from the balance via a withdrawl function", () => {
    account.withdrawl(250);
    expect(account.balance).toEqual(250);
  });

  it("withdrawl function only accepts positive intergers", () => {
    expect(() => account.withdrawl(-100)).toThrow();
    expect(() => account.withdrawl("loads of money")).toThrow();
  });

});

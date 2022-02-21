const Account = require("./account.js");

describe("Account class", () => {
  const account = new Account();

  it("adds to the balance via a deposit method", () => {
    account.deposit(500);
    expect(account.balance).toEqual(500);
  });

  it("deposit function only accepts positive intergers", () => {
    expect(() => account.deposit(-100)).toThrow(
      "Please use a positive interger to deposit money"
    );
    expect(() => account.deposit("loads of money")).toThrow(
      "Please use a positive interger to deposit money"
    );
  });

  it("deducts from the balance via a withdrawl method", () => {
    account.withdrawl(250);
    expect(account.balance).toEqual(250);
  });
});

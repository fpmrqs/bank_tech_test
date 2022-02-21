const Account = require("./account.js");

describe("Account class", () => {
  it("adds to the balance via a deposit method", () => {
    const account = new Account();

    account.deposit(500);
    expect(account.balance).toEqual(500);
  });
});
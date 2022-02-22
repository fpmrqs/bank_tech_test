# bank_tech_test

* This is a tech test from week 9 of Makers Academy
* For the original test instructions, please refer to [this](https://github.com/makersacademy/course/blob/main/individual_challenges/bank_tech_test.md)

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023

Deposit
Withdrawl
Print Bank Statement
Date


| Account class                  |
| Contains          | Actions
| this.balance      | Deposit
| this.transaction  | Withdrawl

Transaction class
this.date

BankStatement class
this.history

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

# How to run

```
const Account = require("./account.js");
const Statement = require("./statement");
const Transaction = require("./transaction");

const account = new Account;

account.deposit(500)

account.deposit(250)

account.withdrawl(45)

account.statement.print()
```
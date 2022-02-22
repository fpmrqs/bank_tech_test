# bank_tech_test

* This is a tech test from week 9 of Makers Academy
* For the original test instructions, please refer to [this](https://github.com/makersacademy/course/blob/main/individual_challenges/bank_tech_test.md)

### How to install  
Clone this repo to your machine and install dependencies via the command bellow:  
```
npm install
```

### Running Tests (jest)
The current test coverage is 100%. To run the unit tests, use the command below:  
```
jest
```

### Running Linter (ESlint)  
ES Lint was used for linting, together with prettier. To tun the linter, use the command below: 
```
npx eslint <file you're looking to lint>
```

### Approach  
* My approach was to find the best balance in between having clear separation of concerns but also readable code.
* The program is divided into three classes, as per the tables below

| Account       | Transaction   | Statement     |
| ------------- | ------------- | ------------- |
| deposit()     || addTransaction()  |
| withdrawl()   || print()  |

The Transaction class is responsible for storing datab about each transaction, including dates, nature of transaction, amount and current balance.

## How to run

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
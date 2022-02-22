[![codecov](https://codecov.io/gh/fpmrqs/bank_tech_test/branch/main/graph/badge.svg?token=ORFIJOETGF)](https://codecov.io/gh/fpmrqs/bank_tech_test)  [![fpmrqs](https://circleci.com/gh/fpmrqs/bank_tech_test.svg?style=svg)](https://app.circleci.com/pipelines/github/fpmrqs/bank_tech_test?filter=all)

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


* The Account class is responsible for taking the input from the user and handling the account balance
* The Transaction class only has one private function but is responsible for storing the data from each transaction including date, nature of transaction, amount and current balance. 
* The Statement class handles the printing of the bank statement

## How to run
Run node to start interacting with the program. You can interact via the following commands:
```
# Load our Account class and create a new instance of it
> const Account = require("./account.js");
> const account = new Account;

# Make deposits and whitdrawls
> account.deposit(100)
> account.withdrawl(24)

# Print statement
> account.statement.print()
```
Example of the program running on the terminal:
```
> node
Welcome to Node.js v17.4.0.
Type ".help" for more information.
> const Account = require("./account.js");
undefined
> 
> const account = new Account;
undefined
> 
> account.deposit(500)
undefined
> 
> account.deposit(250)
undefined
> 
> account.withdrawl(45)
undefined
> 
> account.statement.print()
date || credit || debit || balance
22/02/2022 || 500 ||  || 500
22/02/2022 || 250 ||  || 750
22/02/2022 ||  || 45 || 705

undefined
> 
```

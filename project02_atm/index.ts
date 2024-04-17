#! /usr/bin/env node

import inquirer from 'inquirer'

let myBalance = 50000;
let pinCode = 1234;
let numberOfTries = 3;
let condition = true;

console.log('please use pin 1234 to use ATM')
while(condition){

let pinQuery = await inquirer.prompt(
    [
        {
            name: "pinInput",
            message: "please enter your pin",
            type: "number"
        }
    ]
)

if (pinQuery.pinInput === pinCode) {
    console.log('Congratulation! your pin is verified')

    let operationQuery = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select an operation",
                type: "list",
                choices: ["balance inquiry", "cash withdrawal", "fast cash withdrawal"]
            }
        ]
    )

    if (operationQuery.operation === "cash withdrawal") {
        let amount = await inquirer.prompt(
            {
                name: "amount",
                message: "please enter the amount",
                type: "number"
            }
        )
        if (amount.amount <= myBalance) {
            myBalance -= amount.amount
            let withdrawalAmount = amount.amount
            console.log(`PKR ${withdrawalAmount}.00 Withdrawal Succesfull`)
            console.log(`your remaining account balance is PKR ${myBalance}`)
            console.log('Thankyou for using ATM')
            condition = false

        }
        else if (amount.amount > myBalance) {
            console.log("operation failed due to insufficient balance")
        }
        else {
            console.log("some error occured, please try again")
        }
    }
    else if (operationQuery.operation === "fast cash withdrawal") {
        let fastCashWithdrawal = await inquirer.prompt(
            [
                {
                    name: "fastCashAmount",
                    message: "how much you want to withdraw",
                    type: "list",
                    choices: ["500", "1000", "5000", "25000", "50000"]
                }
            ]
        )
 
        if (fastCashWithdrawal.fastCashAmount <= myBalance && fastCashWithdrawal.fastCashAmount === "500") {
            myBalance -= fastCashWithdrawal.fastCashAmount
            let withdrawalAmount = fastCashWithdrawal.fastCashAmount
            console.log(`PKR ${withdrawalAmount}.00 Withdrawal Succesfull`)
            console.log(`your remaining account balance is PKR ${myBalance}`)
            console.log('Thankyou for using ATM')
            condition = false

        }
        else if (fastCashWithdrawal.fastCashAmount <= myBalance && fastCashWithdrawal.fastCashAmount === "1000") {
            myBalance -= fastCashWithdrawal.fastCashAmount
            let withdrawalAmount = fastCashWithdrawal.fastCashAmount
            console.log(`PKR ${withdrawalAmount}.00 Withdrawal Succesfull`)
            console.log(`your remaining account balance is PKR ${myBalance}`)
            console.log('Thankyou for using ATM')
            condition = false

        }
        else if (fastCashWithdrawal.fastCashAmount <= myBalance && fastCashWithdrawal.fastCashAmount === "5000") {
            myBalance -= fastCashWithdrawal.fastCashAmount
            let withdrawalAmount = fastCashWithdrawal.fastCashAmount
            console.log(`PKR ${withdrawalAmount}.00 Withdrawal Succesfull`)
            console.log(`your remaining account balance is PKR ${myBalance}`)
            console.log('Thankyou for using ATM')
            condition = false

        }
        else if (fastCashWithdrawal.fastCashAmount <= myBalance && fastCashWithdrawal.fastCashAmount === "25000") {
            myBalance -= fastCashWithdrawal.fastCashAmount
            let withdrawalAmount = fastCashWithdrawal.fastCashAmount
            console.log(`PKR ${withdrawalAmount}.00 Withdrawal Succesfull`)
            console.log(`your remaining account balance is PKR ${myBalance}`)
            console.log('Thankyou for using ATM')
            condition = false

        }
        else if (fastCashWithdrawal.fastCashAmount <= myBalance && fastCashWithdrawal.fastCashAmount === "50000") {
            myBalance -= fastCashWithdrawal.fastCashAmount
            let withdrawalAmount = fastCashWithdrawal.fastCashAmount
            console.log(`PKR ${withdrawalAmount}.00 Withdrawal Succesfull`)
            console.log(`your remaining account balance is PKR ${myBalance}`)
            console.log('Thankyou for using ATM')
            condition = false

        }
        else {
            console.log("some error occured, please try again")
        }
    }
    else if (operationQuery.operation === "balance inquiry") {
        console.log(`your account balance is PKR ${myBalance}.00`)
        console.log('Thankyou for using ATM')
        condition = false
    }
}
else if (pinQuery !== pinCode) {
    numberOfTries -= 1
    console.log("invalid pin, please enter your correct pin")
    console.log(`number of attempts remaining ${numberOfTries}`)
    if(numberOfTries === 0){
        condition = false;
        console.log("your card is blocked! please contact your bank")
    }
}

}

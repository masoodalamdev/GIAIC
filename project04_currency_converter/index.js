#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter From Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Enter To Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter Your Amount',
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from]; // 1
let toAmount = currency[user_answer.to]; // 280
let amount = user_answer.amount; // 10
let baseAmount = amount / fromAmount; // 10/1 = 10
let convertedAmount = baseAmount * toAmount; // 10*280 = 2800
console.log(convertedAmount.toFixed(2));

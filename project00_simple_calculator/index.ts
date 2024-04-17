#! /usr/bin/env node

import inquirer from 'inquirer'

const answer = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Select an operator to perform an action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
    {
        message: "Enter second number",
        type: "number",
        name: "secondNumber"
    }
])

if(answer.operator === "Addition"){
    console.log(`The result is ${answer.firstNumber + answer.secondNumber}`)
}else if(answer.operator === "Subtraction"){
    console.log(`The result is ${answer.firstNumber - answer.secondNumber}`)
}else if(answer.operator === "Multiplication"){
    console.log(`The result is ${answer.firstNumber * answer.secondNumber}`)
}else if(answer.operator === "Division"){
    console.log(`The result is ${answer.firstNumber / answer.secondNumber}`)
}else {
    console.log("Please select valid operator")
}
#! /usr/bin/env node
import inquirer from 'inquirer'
let todos = [];
let condition = true;

if (todos.length === 0) {
    console.log(`Your Todos are empty`)
}
while (condition) {
    let addTaskQuery = await inquirer.prompt(
        [
            {
                name: 'addOne',
                message: 'Do you want to add item in your Todos ?',
                type: 'confirm',
                default: 'false'
            },
        ]
    )
    if (addTaskQuery.addOne === true) {
        let addTask = await inquirer.prompt(
            [
                {
                    name: 'todo',
                    message: 'what you want to add in your Todos',
                    type: 'input'
                },
            ]
        )
        todos.push(addTask.todo)
        console.log('your Todos are : ')
        console.log(todos)
        let query = await inquirer.prompt(
            [
                {
                    name: 'query',
                    message: 'what you want to do ?',
                    type: 'list',
                    choices: ['Do you want to add more ?', 'Do you want to remove the last todo ?']
                }
            ]
        )
        if (query.query === 'Do you want to add more ?') {
            let addAnotherTask = await inquirer.prompt(
                [
                    {
                        name: 'todo',
                        message: 'what you want to add in your Todos',
                        type: 'input'
                    },
                ]
            )
            todos.push(addAnotherTask.todo)
            console.log('your Todos are : ')
            console.log(todos)
        }
        else if (query.query === 'Do you want to remove the last todo ?') {
            let removeTask = await inquirer.prompt(
                [
                    {
                        name: 'removeTodo',
                        message: 'Are you sure want to remove the last Todo ?',
                        type: 'confirm',
                        default: 'false'
                    },
                ]
            )
            if (removeTask.removeTodo === true) {
                todos.pop()
                console.log('your Todos are : ')
                console.log(todos)
            }
        }
    }
    else if (addTaskQuery.addOne === false) {
        condition = false
        if (todos.length === 0) {
            console.log(`Your Todos are empty`)
        }
        else {
            console.log('your Todos are : ')
            console.log(todos)
        }
    }
    else {
        if (todos.length === 0) {
            console.log(`Your Todos are empty`)
            condition = false
        }
    }
}


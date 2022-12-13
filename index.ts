#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
type answers = {
    userId: string,
    userpin: number,
    accType: string,
    options: string,
    cashAmount: number,

}

let input: answers = await inquirer.prompt([
    {

    name: "userId",
    type: "string",
    message: "Enter you User Id"

},
{
    name: "userpin",
    type: "number",
    message: "Enter you User pin",
    when(answers) {
        return answers.userId;
    },

},
{
    name: "accType",
    type: "list",
    choices: ["Current Account", "Saving Account"],
    message: "Choose Account Type",
    when(answers) {
        return answers.userpin;
    },
},
{
    name: "options",
    type: "list",
    choices: ["Fast Cash", "Cash Withdrawl"],
    message: "choose given below: ",
    when(answers) {
        return answers.accType
    },
},
{
    name: "cashAmount",
    type: "list",
    choices: [1000, 3000, 5000, 10000],
    message: "Choose Amount: ",
    when(answers) {
        return answers.options === "Fast Cash"
    },
},
{
    name: "cashAmount",
    type: "number",
    message: "Enter Amount: ",
    when(answers) {
        return answers.options === "Cash Withdrawl"
    },
},
]);



const { userId, userpin, cashAmount } = input;

const Balance = Math.floor(Math.random() * 100000)
if (userId && userpin && cashAmount) {
    console.log(Balance)
    if (Balance > cashAmount) {
        let currentBalance = Balance - cashAmount;
        console.log(chalk.green(`Transaction Successful \nYour Current Balance is ${currentBalance}`))

    } else {
        console.log("Insufficent Amount");
    }

}


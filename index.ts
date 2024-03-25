#! /usr/bin/env node
import inquirer from "inquirer";
let userNumber = await inquirer.prompt([
  {
    message: "guess one number between 1 to 7",
    type: "number",
    name: "yourNumber",
  },
]);

const guessNumber = Math.floor(Math.random() * 6);
if (userNumber.yourNumber === guessNumber) {
  console.log("congratulations , you are right");
} else {
  console.log("sorry, try again");
}
console.log(userNumber);

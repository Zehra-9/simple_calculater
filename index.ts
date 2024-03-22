#! /usr/bin/env node

import inquirer from "inquirer";



//asking qufstion from users through inquirer.

let  answers = await inquirer.prompt([
    {message: "Enter First number", type: "number", name: "firstNumber"},
    {message:"Enter second number", type: "number", name: "secondNumber"},
    {
        message: "Select one Operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication","Division"],
    },             

]);
// conditional statements If-Else
if(answers.operator === "Addition"){
   console.log(answers.firstNumber  + answers.secondNumber)   
}
else if(answers.operator === "Subtractions"){

    console.log(answers.firstNumber  -  answers. secondNumber);
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber);
}
else if(answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber);
}
else{
    console.log("invalid Input");
}